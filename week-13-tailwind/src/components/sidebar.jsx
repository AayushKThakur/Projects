export function Sidebar() {
  return (
    <div className="flex">
      <div className=" dark:bg-gray-800 transition-all duration-2000 hidden md:block  bg-red-200 w-96 h-screen">
        Sidebar
      </div>

      <div className="bg-green-200 w-full">Content</div>
    </div>
  );
}
