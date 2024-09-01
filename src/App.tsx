import styled from "styled-components";
import "./App.css";
import portfolio from "./assets/test";

function App() {
  interface SectionProps {
    index: number;
  }
  const colors = ["lightblue", "yellow", "purple", "lightgreen", "lightcoral"];

  // Main 컴포넌트 스타일
  const Main = styled.div`
    height: auto;
    padding: 20px;
    background-color: #f0f0f0;
    text-align: center;
    position: relative;
  `;

  // 각 Section에 Sticky 효과를 적용하는 스타일
  const Section = styled.div<SectionProps>`
    height: 100vh;
    background-color: ${(props) =>
      colors[
        (props.index - 1) % colors.length
      ]}; // 색상 배열을 사용하여 배경색 설정
    padding: 20px;
    margin: 10px 0;
    border: 1px solid #ccc;
    z-index: ${(props) => props.index + 1}; // 섹션의 z-index 설정
    position: sticky;
    top: ${(props) =>
      props.index * 50}px; // 섹션의 위치를 조정하여 층 쌓기 효과 생성
  `;

  // 포트폴리오 박스 스타일
  const PortFolioBox = styled.div`
    margin-top: 20px;
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      margin-top: 10px;
      font-size: 1rem;
    }
    img {
      object-fit: cover;
      width: 20vw;
      height: 20vw;
      margin-top: 10px;
      border-radius: 8px;
    }
  `;

  const Header = styled.div`
    text-align: right;
    width: 100%;
    h1 {
      margin: 0;
      font-size: 2.5vw;
    }
  `;

  return (
    <Main>
      <Section index={1}>
        <Header>
          <h1>Welcome to My Portfolio</h1>
        </Header>
      </Section>
      {portfolio.map((item, i) => (
        <Section key={item.id} index={i + 2}>
          <Header>
            <h1>
              {item.title} ({item.id})
            </h1>
          </Header>
          <PortFolioBox>
            <h3>{item.title}</h3>
            <h4>제작 일자: {item.date}</h4>
            <img src={item.img} alt={item.title} />
          </PortFolioBox>
        </Section>
      ))}
    </Main>
  );
}

export default App;
