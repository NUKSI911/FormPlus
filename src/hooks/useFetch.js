import React, { useState } from "react";
import Axios from "axios";
import ApiEndPoint from "../config/endPoints";

const useFetch = ({ url, headerOption }) => {
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchData = async () => {
    try {
      await Axios.get(`${ApiEndPoint.BASE_URL}/${url}`, {
        headers: {
          "Content-Type": "application/json",
          ...headerOption,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            return setData(response.data);
          }
        })
        .catch((e) => setErrorMsg(e));
    } catch (e) {
      setErrorMsg(e);
    }
  };

  return { fetchData, data, errorMsg };
};

export default useFetch;
