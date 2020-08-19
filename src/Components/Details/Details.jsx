import React from 'react'
import { withRouter } from 'react-router';
import ImageComponent from '../ImageLoad/ImageLoad';
import styles from './Details.module.css';

const details = (props) => {
    let data = props.location.state;
    console.log(data);
    let colorBlocks = data.details.color.map(e => <div className={styles[e]}></div>)
    return (
        <div className={styles.detailsPanel}>
            <div className={styles.imageStyle}>
                <ImageComponent imgName={data.name}></ImageComponent>
            </div>
            <div className={styles.details}>
                <p className={styles.opacText}>{data.name}</p>
                <h3>{data.details.name}</h3>
                <p>{data.details.description}</p>
                <p className={styles.opacText}>Color</p>
                {colorBlocks}
                <p className={styles.opacText}>Price per unit</p>
                <div className={styles.selectionTile}>

                    {data.price}
                    <button className={styles.buyButton}>Buy Now</button>
                    <div className={styles.iconCart}></div>

                </div>
            </div>
        </div>
    )
}
export default withRouter(details);