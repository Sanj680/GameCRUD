import { useNavigate, useParams } from 'react-router-dom';

import { useForm } from '../hooks/useForm';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { editGame, getGameById,addGame} from '../service/localstorage';


export const LoginForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        name: '',
        email: ''
    });

    useEffect(() => {
        if (id) {
            const game = getGameById(id);
            setForm(game);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editGame(id, inputValues) : addGame({ id: uuid(), ...inputValues });
        resetForm();
        setshowAlert(true);
        setTimeout(() => {
            setshowAlert(false);
        }, 2000);
    };

    return (
        <div>

            <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/")}>All Games</button>
                <h1 className="text-center">Login</h1>
                <div />
            </div>

            <div className="card border-primary p-5 m-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Name</label>
                        <input
                            name="name"
                            type="text"
                            value={inputValues.name}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Email</label>
                        <input
                            name="email"
                            type="text"
                            value={inputValues.url}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-outline-primary btn-block">Login</button>
                    </div>
                </form>
            </div>

        

        </div >
    )
}