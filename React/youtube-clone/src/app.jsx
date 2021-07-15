import React, { useEffect, useState } from "react";
import styles from "../src/app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const Search = (query) => {
    youtube.search(query).then((items) => setVideos(items));
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={Search} />
      <VideoList videos={videos} />;
    </div>
  );
}

export default App;
