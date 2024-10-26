import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-[6vh]">
        <Navbar />
      </div>
      <div className="flex h-[94vh]">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
