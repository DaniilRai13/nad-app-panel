import React from "react";
import { NavLink } from "react-router-dom";
import cls from './Nav.module.css'

export const Nav = () => {
  return (
    <div className={cls.nav__container}>
      <NavLink className={`${cls.nav__container__link} btn`} to='/'>
        <div >Загрузка</div>
      </NavLink>
      {/* <NavLink className={`${cls.nav__container__link} btn`} to='/showWorks'>
        <div >Работы</div>
      </NavLink> */}
    </div>
  )
}