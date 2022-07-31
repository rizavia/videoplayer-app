import axios from "axios";

const KEY = "AIzaSyBWzq6iXyF7xCnOO00T4t8pKoN94W7Y6cA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    q: "bollywood",
    key: KEY,
  },
});
