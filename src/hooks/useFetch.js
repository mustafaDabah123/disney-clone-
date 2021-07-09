import {useState , useEffect} from 'react';
import axios from "axios";

function useFetch(url) {
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(false);

    useEffect(() => { 
        const fetchData = async () => {
           try {
             const res = await axios.get(url);
             setData(res.data);
             setLoading(true);
           }catch (err) {
             console.log(err);
             setLoading(false);
           }
        }
          fetchData();

     },[url]);

     return {data , loading} 

}

export default useFetch;
