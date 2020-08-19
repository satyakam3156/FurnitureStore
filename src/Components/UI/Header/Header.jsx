import React from 'react';
import styles from './Header.module.css';
import logo from '../../../assets/images/logo.png';
const header = (props)=>{
return (
   <nav className={styles.navContainer} id="navContainer">
    
    <div className={styles.navLinksContainer}>
    <img src={logo} alt="logo" className={styles.logo} onClick={props.toggleFilter}/>
      <a href="#" className={styles.navLinks}>HOME</a>
      <a href="#" className={styles.navLinks}>SHOP</a>
      <a href="#" className={styles.navLinks}>MAGAZINE</a>
    </div>
    <div className={styles.searchAddCart}>
    <div className={styles.iconCart}></div>
    <input className={styles.searchInput} type="text"></input>
    <div className={styles.iconMenu} id="iconMenu"></div>
    <a href="#" className={styles.navLinks}>LOGIN</a>
    
    <div className={styles.iconTimes} id="iconTimes"></div>
    </div>
    
  </nav>
)
}

export default header;