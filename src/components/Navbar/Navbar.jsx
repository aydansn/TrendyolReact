import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import trendyollogo from "../../assets/trendyolLogo.svg";
import { UserOutlined } from '@ant-design/icons';
import { HeartOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
   <div>
     <div className={style.butunNavbar}>
      <div className={style.logoHisse}>
        <img src={trendyollogo} alt="trendyol logo" />
      </div>

      <div className={style.navRight}>
        <div className={style.input1}>
          <input
            type="text"
            placeholder="Aradığınız ürün, kategori veya markayı yazınız"
          />
        </div>
      </div>

      <div className={style.links}>
        <Link to="/girish"> <UserOutlined /> Girish Yap</Link>
        <Link to="/favori"> <HeartOutlined /> Favorilerim</Link>
        <Link to="/sebet"> <ShoppingCartOutlined /> Sebetim</Link>
      </div>
    </div>
    <div className={style.kategoryNav}>
      <div className={style.list1}>
      Azərbaycan
      </div>
      <div className={style.list1}>
      Kadın
      </div>
      <div className={style.list1}>
      Erkek
      </div>
      <div className={style.list1}>
      Anne & Çocuk
      </div>
      <div className={style.list1}>
      Ev & Yaşam
      </div>
      <div className={style.list1}>
      Süpermarket
      </div>
      <div className={style.list1}>
      Kozmetik
      </div>
      <div className={style.list1}>
      Ayakkabı & Çanta
      </div>
      <div className={style.list1}>
      Elektronik
      </div>
      <div className={style.list1}>
      Spor&Outdoor
      </div>
      <div className={style.list1}>
      Çok Satanlar
      </div>
      <div className={style.list1}>
      Flaş Ürünler
      </div>
    </div>
    

    </div>
    
  );
};

export default Navbar;
