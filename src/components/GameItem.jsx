import React from 'react'

import { useNavigate } from 'react-router-dom';
import { getListGames, removeGame } from '../service/localstorage';

export const GameItem = ({ game, setGames }) => {
    const { id, name, url, author, published_date } = game;
    const navigate = useNavigate();

    const deleteGame = () => {
        removeGame(id);
        setGames(getListGames());
    }

    return (
        <tr className="table-primasry">
            <th>{name}</th>
            <td>{url}</td>
            <td>{author}</td>
            <td>{published_date}</td>
            <td>
                <div className="d-flex gap-3">
                    <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-game/${id}`)}>Edit</span>
                    <span type="button" className="badge bg-danger" onClick={() => deleteGame()}>Delete</span>
                </div>
            </td>
        </tr>
    )
}
