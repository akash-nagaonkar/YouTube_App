import axios from "axios";
import { RootState } from "..";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_API_URL } from "../../Utils/constants";
import { parseData } from "../../Utils";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  "youtubeApp/getHomePageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState() as RootState;
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""
      }`
    );

    const parsedData = await parseData(items);
  }
);
