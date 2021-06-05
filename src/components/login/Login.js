import React from 'react'
import './login.css'

export default function Login() {
	return (
<div className="login__page">
            <form>
                <h3 className="form__Header">
                    Авторизация
                </h3>
                <div className="loginForm">
                    <div className="loginField">ЛОГИН</div><div><input type="text"/></div>
                    <div className="loginField">ПАРОЛЬ</div><div><input type="text"/></div>
                </div>
                <p><input type="submit" value="ВОЙТИ" class="submitForm"/></p>
            </form>
		</div>
	);
}
