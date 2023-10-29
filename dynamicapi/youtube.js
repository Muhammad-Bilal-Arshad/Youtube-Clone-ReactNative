import axios from 'axios';
import { RAPID_API } from "@env";


export const  trending = async (params) =>{
 
    const options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/trending',
        params: {
          geo: 'US',
          lang: 'en',
          ...params
        },
        
        headers: {
          'X-RapidAPI-Key': `${RAPID_API}`,// your use our own api key
          
          
          'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data.data;
      } catch (error) {
          console.error(error);
          return []
      }

}

