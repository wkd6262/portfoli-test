import img1 from "../assets/Images/Bold and brash.jpeg";

type PortFolio = {
  title: string;
  img: string;
  info: string;
  date: string;
  id: number;
};

const portfolio: PortFolio[] = [
  {
    title: "포트폴리오",
    img: img1,
    info: "포트폴리오1",
    date: "2024-01-02",
    id: 1,
  },
  {
    title: "포트폴리오",
    img: img1,
    info: "포트폴리오",
    date: "2024-03-02",
    id: 2,
  },
  {
    title: "포트폴리오",
    img: img1,
    info: "포트폴리오",
    date: "2024-04-02",
    id: 3,
  },
  {
    title: "포트폴리오",
    img: img1,
    info: "포트폴리오",
    date: "2024-05-02",
    id: 4,
  },
  {
    title: "포트폴리오",
    img: img1,
    info: "포트폴리오",
    date: "2024-8-02",
    id: 5,
  },
];

export default portfolio;
