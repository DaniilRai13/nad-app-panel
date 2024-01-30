import React from "react";
import { NavLink } from "react-router-dom";
import cls from './Nav.module.css'

export const Nav = () => {
  return (
    <div className={cls.nav__container}>
      <div>
        <NavLink to='/uploadImg'>Загрузка</NavLink>
      </div>
      <div>
        <NavLink to='/showWorks'>Работы</NavLink>
      </div>
    </div>
  )
}