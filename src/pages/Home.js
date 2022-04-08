import "../styles/home.css"
import NewsCard from "../components/NewsCard";

export default function Home() {
  return (
    <div className="home-page-container">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
}