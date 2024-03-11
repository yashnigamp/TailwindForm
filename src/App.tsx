import { useState } from "react";
import Drawer from "./components/Drawer/Drawer";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="text-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          onClick={toggleDrawer}
        >
          Show right drawer
        </button>
      </div>
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-30">
          <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        </div>
      )}
    </>
  );
}

export default App;
