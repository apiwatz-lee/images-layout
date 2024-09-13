import styled from "styled-components";
import useImages from "../hooks/useImages";

const S = {};

S.Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding-top: 8px;
`;

S.ImageWrapper = styled.div`
  flex: 1 1 auto;
  height: 150px;
`;

S.Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

const Gallery = () => {
  const { images } = useImages();
  return (
    <S.Gallery>
      {images?.map((image) => (
        <S.ImageWrapper key={image?.id}>
          <S.Image
            src={image?.download_url}
            alt={`author-${image?.author}`}
            onClick={() => window.open(image?.url, "_blank")}
            loading="lazy"
          />
        </S.ImageWrapper>
      ))}
    </S.Gallery>
  );
};

export default Gallery;
