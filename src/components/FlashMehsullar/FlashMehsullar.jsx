import React from 'react'
import style from "./FlashMehsullar.module.css";
import flashurunler from "../../assets/flashurunler.webp";
import poshet from "../../assets/poshet.webp";
import star from "../../assets/star.svg";
import { HeartOutlined } from '@ant-design/icons';
import yagh from "../../assets/yagh.webp";
import krem from "../../assets/krem.webp";
import serum from "../../assets/serum.webp";

const FlashMehsullar = () => {
  return (
    <div>
      <div className={style.butunMehsullar}>
        <div className={style.yanyana2}>
            <div className={style.mehsul01}>
                <h2>Flaş Məhsullar</h2>
            </div>
            <div className={style.mehsul02}>
                <div className={style.btn2}>
                    <button>Bütün məhsullar <i></i></button>
                    </div>
            </div>
        </div>
        <div className={style.allMehsul}>
      
      <div className={style.mehsul1}>
          <div className={style.yanyana}>
              <div className={style.flash}>
                  <img src={flashurunler} alt="flash" />
              </div>
              <div className={style.icon1}>
              <button><HeartOutlined /></button>
              </div>
          </div>
          <div className={style.mehsulunOzu}> <img src={poshet} alt="poshet" /></div>
         
         <h5>ESNAFDEDEGaloş 1.kalite 1000'li Vakumlu Paket</h5>
          <p  className={style.ulduzlar}>3.9
              <img src={star} alt="ulduz" />
              <img src={star} alt="ulduz" />
              <img src={star} alt="ulduz" />
              <img src={star} alt="ulduz" />
              <img src={star} alt="ulduz" />
          </p>
          <p  className={style.qiymet}>84,92 TL</p>
      </div>


      <div className={style.mehsul1}>
          <div className={style.yanyana}>
              <div className={style.flash}>
                  <img src={flashurunler} alt="flash" />
              </div>
              <div className={style.icon1}>
              <button><HeartOutlined /></button>
              </div>
          </div>
        <div className={style.mehsulunOzu}>
          <img src={serum} alt="poshet" />
        </div>
         <h5>Licape Micellar Glikolik Asitli Aha-bha Peeling Tonik 200ml</h5>
          <p  className={style.ulduzlar}>4.4
          <img src={star} alt="ulduz" />
              <img src={star} alt="ulduz" />
              <img src={star} alt="ulduz" />
              <img src={star} alt="ulduz" />
              <img src={star} alt="ulduz" />
          </p>
          <p  className={style.qiymet}>1234,32 TL</p>
      </div>

      <div className={style.mehsul1}>
          <div className={style.yanyana}>
              <div className={style.flash}>
                  <img src={flashurunler} alt="flash" />
              </div>
              <div className={style.icon1}>
              <button><HeartOutlined /></button>
              </div>
          </div>
        <div className={style.mehsulunOzu}>
        <img src={krem} alt="poshet" />
        </div>
         <h5>Sherka Cilt Beyazlatıcı Aydınlatıcı Leke Karşıtı Bakım Kremi 30 spf 50ml</h5>
          <p  className={style.ulduzlar}>4.9
          <img src={star} alt="ulduz" />
              <img src={star} alt="ulduz" />
              <img src={star} alt="ulduz" />
              <img src={star} alt="ulduz" />
              <img src={star} alt="ulduz" />
          </p>
          <p  className={style.qiymet}>9283,29 TL</p>
      </div>

      <div className={style.mehsul1}>
          <div className={style.yanyana}>
              <div className={style.flash}>
                  <img src={flashurunler} alt="flash" />
              </div>
              <div className={style.icon1}>
                  <button><HeartOutlined /></button>
              </div>
          </div>
         <div className={style.mehsulunOzu}>
         <img src={yagh} alt="poshet" />
         </div>
         <h5>Dermolog Zeytinyağlı Kudret Narı (Propolis Ve Bal İlaveli ) 250Gr</h5>
          <p  className={style.ulduzlar}>2.4
          <img src={star} alt="ulduz" />
              <img src={star} alt="ulduz" />
              <img src={star} alt="ulduz" />
              <img src={star} alt="ulduz" />
              <img src={star} alt="ulduz" />
          </p>
          <p  className={style.qiymet}>999,99 TL</p>
      </div>

      </div>
      </div>
       
    </div>
  )
}

export default FlashMehsullar;