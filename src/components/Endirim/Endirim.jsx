import React from 'react'
import style from "./Endirim.module.css";
import endirimfoto from "../../assets/endirimfoto.webp";

const Endirim = () => {
  return (
    <div className={style.endirim}>
        <img src={endirimfoto} alt="" />
    </div>
  )
}

export default Endirim;