import React from 'react';
import styles from './Card.module.css';
import ImageLoader from '../ImageLoad/ImageLoad';


const card = (props) => {
    let data = props.data;
    return (
        <div className={styles.card} key={props.id} onClick={props.showDetails}>
            <ImageLoader imgName={data.name}></ImageLoader>
            <div className={styles.container}>
                <h4><b>{data.name}</b></h4>
                <div className={styles.informationTile}>
                    <p className={styles.category}>{data.type}</p>
                    <div className={styles.tilesRating}></div>
                    <p>{data.price}</p>
                    <div className={styles.iconCart}></div>
                </div>
            </div>
        </div>
    )
}
export default card;