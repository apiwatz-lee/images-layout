import { useState, useEffect } from "react";
import axios from "axios";
import { useLoading } from "../context/LoadingContext";

const useImages = () => {
  const [images, setImages] = useState([]);
  const { setIsLoading } = useLoading();

  const handleFetchImages = async () => {
    try {
      const { data } = await axios.get("https://picsum.photos/v2/list");
      setImages(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchImages();
  }, []);

  return { images };
};

export default useImages;
