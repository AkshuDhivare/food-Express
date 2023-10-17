import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Custom(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    toast.info("Data fetch in process");
    const apiCall = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data.products);
      } catch (error) {
        setError(error);
      }
      toast.success("Data fetch in successfully");
    };
    apiCall();
  }, []);

  return [data, error];
}

export default Custom;
