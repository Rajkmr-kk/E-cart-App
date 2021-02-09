import React, { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...argus) => {
    setLoading(true);
    const response = await apiFunc(...argus);
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return response;
    }
    setError(false);
    setData(response.data);
    return response;
  };

  return {
    request,
    data,
    error,
    loading,
  };
};
