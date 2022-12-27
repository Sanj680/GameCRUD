
import { GameForm, GameList, Navbar,LoginForm} from "./components";

import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/create-game" element={<GameForm />} />
          <Route path="/edit-game/:id" element={<GameForm/>} />
          <Route path="/login" element={<LoginForm/>} />
        </Routes>
      </div>
    </div>
  );
};
