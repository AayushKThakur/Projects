import { PostComponent } from "./Post";
import { useEffect, useState } from "react";

//LinkedIn like post-Component
// function App() {
//   const [posts, setPosts] = useState([]);

//   const postComponents = posts.map((post) => (
//     <PostComponent
//       name={post.name}
//       subtitle={post.subtitle}
//       time={post.title}
//       image={post.image}
//       description={post.description}
//     />
//   ));

//   function addPost() {
//     setPosts([
//       ...posts,
//       {
//         name: "harkirat",
//         subtitle: "10000 followers",
//         time: "2m ago",
//         image:
//           "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
//         description:
//           "What to know how to win big? Check out how these folks won $6000 in bounties.",
//       },
//     ]);
//   }

//   return (
//     <div style={{ background: "#dfe6e9", height: "100vh" }}>
//       <button onClick={addPost}>Add post</button>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <div>{postComponents}</div>
//       </div>
//     </div>
//   );
// }
// export default App;

//LinkedIn like top bar
function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab).then(
      async (res) => {
        const json = await res.json();
        setTabData(json);
        setLoading(false);
      }
    );
  }, []);

  return (
    <div>
      <button
        onClick={function () {
          setCurrentTab(1);
        }}
        style={{ color: currentTab == 1 ? "red" : "black" }}
      >
        Todo #1
      </button>
      <button
        onClick={function () {
          setCurrentTab(2);
        }}
        style={{ color: currentTab == 2 ? "red" : "black" }}
      >
        Todo #2
      </button>
      <button
        onClick={function () {
          setCurrentTab(3);
        }}
        style={{ color: currentTab == 3 ? "red" : "black" }}
      >
        Todo #3
      </button>
      <button
        onClick={function () {
          setCurrentTab(4);
        }}
        style={{ color: currentTab == 4 ? "red" : "black" }}
      >
        Todo #4
      </button>
      <br />
      {loading ? "Loading..." : tabData.title}
    </div>
  );
}
export default App;

// Toggle Component, conditional rendering example
// const ToggleMessage = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     return (
//         <div>
//             <button onClick={() => setIsVisible(!isVisible)}>
//                 Toggle Message
//             </button>
//             {isVisible && <p>This message is conditionally rendered!</p>}
//         </div>
//     );
// };

//create a countdown
// const Timer = () => {
//     const [seconds, setSeconds] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setSeconds(prev => prev + 1);
//         }, 1000);

//         return () => clearInterval(interval); // Cleanup on unmount
//     }, []);

//     return <div>{seconds} seconds elapsed</div>;
// };

// fetching data
// const UserList = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://jsonplaceholder.typicode.com/users');
//                 const data = await response.json();
//                 setUsers(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []); // Empty dependency array means this runs once when the component mounts.

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <ul>
//             {users.map(user => (
//                 <li key={user.id}>{user.name}</li>
//             ))}
//         </ul>
//     );
// };

// export default UserList;

//gretting prop example
// const Greeting = ({ name }) => {
//   return <h1>Hello, {name}!</h1>;
// };

// const App = () => {
//   return <Greeting name="Alice" />;
// };
