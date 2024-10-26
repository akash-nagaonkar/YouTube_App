import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { getHomePageVideos } from "../Store/reducers/getHomePageVideos";

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <Navbar />
      <div className="flex h-[100vh]">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
