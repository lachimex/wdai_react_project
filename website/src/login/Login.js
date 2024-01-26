import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import MyContext from '../rendering/Context';
import './login.css'

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [message, setMessage] = useState('');
    const [state, setState] = useState("default");
    const { sharedValue, updateValue } = useContext(MyContext);
    const {userCarts, updateCartContent} = useContext(MyContext);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUsername(parsedUser.user);
            setToken(parsedUser.token);
            setState("logged in")
        }
        else {
            setState("default")
        }
    }, [sharedValue, userCarts]);

    function setConfirmationPassword(confirmationPassword) {
        setMessage("");
        if (confirmationPassword != password) {
            setMessage("hasła są różne");
        }
        else {
            setMessage("");
        }
        setTimeout(() => {
            setMessage("");
        }, 3000)
    }

    const handleLogin = async () => {
        setMessage("");
        try {
            const response = await axios.post('http://localhost:5000/login', {
                username: username,
                password: password,
            });
            setToken(response.data.token);
            console.log(token);
            setState("logged in");
            setMessage('zalogowano');
            localStorage.setItem("user", JSON.stringify({ token: response.data.token, user: response.data.username }));
            console.log(localStorage.getItem("user"));
            updateValue(true);
        } catch (error) {
            setMessage('Invalid username or password');
        }
        setTimeout(() => {
            setMessage("");
        }, 3000)
    };

    const handleRegister = async () => {
        console.log(message);
        try {
            const response = await axios.post('http://localhost:5000/register', {
                username: username,
                password: password,
            });
            setMessage(JSON.stringify(response.data.msg));
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            document.getElementById('confirmationPassword').value = '';
        } catch (error) {
            setMessage('Invalid username or password');
        }
    }

    const handleLogout = () => {
        setMessage("wylogowano");
        setToken("");
        setState("default");
        setUsername("");
        setPassword("");
        localStorage.removeItem("user");
        updateValue(false);
        setTimeout(() => {
            setMessage("");
        }, 3000)
    }

    const renderContentBasedOnState = () => {
        switch (state) {
            case "logged in":
                return (
                    <div id='login_info'>
                        <h1>Użytkownik: {username}</h1>
                        <img src='https://www.svgrepo.com/download/43426/profile.svg' id='profile_pic'></img>
                        <button onClick={handleLogout}>Wyloguj się</button>
                        <p id='message'>{message}</p>
                    </div>)
            case "registering":
                return (
                    <div id='login_info'>
                        <h1>Zarejestruj się</h1>
                        <form>
                            <label>Username: </label>
                            <input id='username' type="text" onChange={(e) => setUsername(e.target.value)} />
                            <label>Password: </label>
                            <input id='password' type="password" onChange={(e) => setPassword(e.target.value)} />
                            <label>Potwierdź hasło: </label>
                            <input id='confirmationPassword' type="password" onChange={(e) => setConfirmationPassword(e.target.value)} />
                        </form>
                        <div id='buttons'>
                            <button onClick={handleRegister}>Zarejestruj się</button>
                            <button onClick={() =>
                            { 
                            setState("default");
                            setMessage("");
                            }
                            }>Powrót</button>
                        </div>
                        <p id='message'>{message}</p>
                    </div>
                )
            case "default":
                return (
                    <div id='login_info'>
                        <h1>Zaloguj się</h1>
                        <form>
                            <label>Username: </label>
                            <input id='username' type="text" onChange={(e) => setUsername(e.target.value)} />
                            <label>Password: </label>
                            <input id='password' type="password" onChange={(e) => setPassword(e.target.value)} />
                        </form>
                        <div id='default_button_div'>
                            <button onClick={handleLogin}>Login</button>
                            <p className='bordered-text'>Nie masz konta?</p>
                            <button onClick={() => {
                                setState("registering")
                                setMessage("")}}>Zarejestruj się</button>
                        </div>
                        <p id='message'>{message}</p>
                    </div>
                )
        }
    }

    return (
        <div className="login">
            {renderContentBasedOnState()}
        </div>
    );
}

export default App;