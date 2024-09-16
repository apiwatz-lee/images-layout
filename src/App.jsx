import Gallery from "./components/Gallery";
import styled from "styled-components";
import Layout from "./components/Layout";

const S = {};

S.Container = styled.section`
  margin: 0 auto;
  width: 100%;
  padding: 2%;
  background-color: #f5f5f5;
`;

S.TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

S.Text = styled.p`
  color: #333;
`;

S.Link = styled.a`
  color: #007aff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function App() {
  return (
    <>
      <Layout>
        <S.Container>
          <S.TitleWrapper>
            <S.Text>{`Everyone's photo`}</S.Text>
            <S.Link
              href="https://unsplash.com/"
              target="_blank"
            >{`View all 2,724,700`}</S.Link>
          </S.TitleWrapper>

          <Gallery />
        </S.Container>
      </Layout>
    </>
  );
}

export default App;
