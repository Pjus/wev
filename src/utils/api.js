import axios from "axios";

export const fetchFromId = async (videoId) =>{
    console.log(videoId);

    let data;
    const options = {
        method: 'GET',
        url: 'https://youtube-v311.p.rapidapi.com/videos/',
        params: {
          part: 'snippet,contentDetails,statistics',
          id: videoId,
          maxResults: '1'
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
          'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        data = response.data;
    } catch (error) {
        console.error(error);
    }
    return data;
};

export const fetchFromSearch = async (url) => {
    console.log(url);

    let data;
    const options = {
        method: "GET",
        url: "https://youtube-v311.p.rapidapi.com/search/",
        params: {
            part: "snippet",
            maxResults: "30",
            order: "relevance",
            q: url,
            safeSearch: "moderate",
            type: "video,channel,playlist",
        },
        headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
            "X-RapidAPI-Host": "youtube-v311.p.rapidapi.com",
        },
    };
    try {
        const response = await axios.request(options);
        data = response.data;
    } catch (error) {
        console.error(error);
    }
    return data;
};
