import "@/App.css";

import { games } from "@/data/games";

import { TopBar } from "@/components/topbar";
import { GameCard } from "@/components/gamecard";
import { MenuCards } from "@/components/menucard";

function App() {
  return (
    <div
      className="container py-4"
    >
      <TopBar />

      <div className="flex items-end h-[300px] py-4 justify-between">
        {games.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            imgSrc={game.imgSrc}
          />
        ))}
      </div>

      <MenuCards />
    </div>
  );
}

export default App;
