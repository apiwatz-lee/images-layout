import { useState, useEffect } from "react";
import axios from "axios";

const useImages = () => {
  const [images, setImages] = useState([]);

  const handleFetchImages = async () => {
    try {
      const { data } = await axios.get("https://picsum.photos/v2/list");
      setImages(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchImages();
  }, []);

  return { images };
};

export default useImages;
