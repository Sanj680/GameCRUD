
import { useEffect, useState } from 'react';
import { getListGames } from '../service/localstorage';
import { GameItem } from './GameItem';


export const GameList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        setGames(getListGames());
    }, []);

    return (
        <div>
            <h1 className="my-5 text-center">Manage Games</h1>

            {
              games.length > 0 ? (
                    <div className="card bg-secondary p-3">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Url</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Published_date</th>
                                    <th scope="col">Actions</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   games.map(game => <GameItem game={game} key={game.id} setGames={setGames} />)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="text-center">No games</h3>
                )
            }

        </div>
    )
}
