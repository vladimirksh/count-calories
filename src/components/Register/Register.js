import React, {useState} from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import * as auth from '../../auth.js';
import './Register.css';


function Register(props) {
  const [userData, setUserData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      calGoal: ''
  });

  const navigate = useNavigate();


  function handleChange (e) {
    const {name, value} = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  }

  function handleSubmit (e) {
    e.preventDefault();
    if (userData.password === userData.confirmPassword){
      auth.register(userData.username, userData.password, userData.email).then((res) => {
        if(res){
          setUserData({
            message: ''
          })
          navigate('/login', {replace: true})
        } else {
          setUserData({
            message: 'Что-то пошло не так!'
          })
        }
      });
    }
  }
  return (
    <div className="register">
      <p className="register__welcome">
          Пожалуйста, зарегистрируйтесь.
      </p>
      <form onSubmit={handleSubmit} className="register__form">
        <label htmlFor="username">
          Логин:
        </label>
        <input id="username" name="username" type="text" value={userData.username} onChange={handleChange} />
        <label htmlFor="email">
          Email:
        </label>
        <input id="email" name="email" type="email" value={userData.email} onChange={handleChange} />
        <label htmlFor="password">
          Пароль:
        </label>
        <input id="password" name="password" type="password" value={userData.password} onChange={handleChange} />
        <label htmlFor="confirmPassword">
          Повторите пароль:
        </label>
        <input id="confirmPassword" name="confirmPassword" type="password" value={userData.confirmPassword} onChange={handleChange} />
        <label htmlFor="calGoal">
          Калории за день:
        </label>
        <input id="calGoal" name="calGoal" type="number" value={userData.calGoal} onChange={handleChange} />
        <div className="register__button-container">
          <button type="submit" onSubmit={handleSubmit} className="register__link">Зарегистрироваться</button>
        </div>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <NavLink to="/login" className="register__login-link">Войти</NavLink>
      </div>
      </div>
);
}

export default Register;
