async function fetchTodos() {
  let res = await fetch("/api/todos");
  let todos = await res.json();
  const list = document.getElementById("todoList");
  list.innerHTML = "";
  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.textContent = todo.text;
    if (todo.done) li.style.textDecoration = "line-through";

    li.onclick = async () => {
      await fetch(`/api/todos/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ done: !todo.done }),
      });
      fetchTodos();
    };

    let btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = async (e) => {
      e.stopPropagation();
      await fetch(`/api/todos/${todo.id}`, { method: "DELETE" });
      fetchTodos();
    };
    li.appendChild(btn);
    list.appendChild(li);
  });
}

async function addTodo() {
  const input = document.getElementById("todoInput");
  if (!input.value.trim()) return;
  await fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: input.value }),
  });
  input.value = "";
  fetchTodos();
}

fetchTodos();
