import React from 'react'
import './registration.css'

export default function Registration() {
	return (
		<div className="registration__page">
            <form>
                <h3 className="form__Header">
                    Регистрация
                </h3>
                    <div className="registrationForm">
                    <div className="registrationField">ИМЯ</div><div><input type="text"/></div>
                    <div className="registrationField">ФАМИЛИЯ</div><div><input type="text"/></div>
                    <div className="registrationField">E-MAIL</div><div><input type="email"/></div>
                    <div className="registrationField">ЛОГИН</div><div><input type="text"/></div>
                    <div className="registrationField">ПАРОЛЬ</div><div><input type="text"/></div>
                    <div className="registrationField">ПОВТОРИТЕ ПАРОЛЬ</div><div><input type="text"/></div>
                </div>
                <p><input type="submit" value="ЗАРЕГИСТРИРОВАТЬСЯ" class="submitForm"/></p>
            </form>
		</div>
	);
}
