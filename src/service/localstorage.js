export const getListGames = () => {
  if (!localStorage["games"]) {
    localStorage["games"] = "[]";
  }

  let games= localStorage["games"];
  games = JSON.parse(games);
  return games;
};

export const addGame = (game) => {
  const games = getListGames();
  games.push(game);
  localStorage["games"] = JSON.stringify(games);
};

export const removeGame = (id) => {
  let games = getListGames();
 games = games.filter((game) => game.id !== id);
  localStorage["games"] = JSON.stringify(games);
};

export const getGameById = (id) => {
  const games = getListGames();
  const game = games.find((game) => game.id === id);
  return game;
};

export const editGame = (id, newGame) => {
  let games = getListGames();
  games = games.filter((game) => game.id !== id);
  games.push(newGame);
  localStorage["games"] = JSON.stringify(games);
};