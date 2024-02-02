import React from "react";
import { NavLink } from "react-router-dom";
import cls from './Nav.module.css'

export const Nav = () => {
  return (
    <div className={cls.nav__container}>
      <div className={cls.nav__container__link}>
        <NavLink to='/uploadImg'>Загрузка</NavLink>
      </div>
      <div className={cls.nav__container__link}>
        <NavLink to='/showWorks'>Работы</NavLink>
      </div>
    </div>
  )
}