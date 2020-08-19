import React from 'react';
import styles from './FilterOptions.module.css';
const filterOptions = React.forwardRef((props, ref) => {
    let collectionOptions = props.options.map(e => {
        return (<div>
            <input type="radio" value={e} /><label>{e}</label>
        </div>)
    })


    return (
        <div className={styles.panelContent} ref={ref}>
            {collectionOptions}
        </div>
    )
})
export default filterOptions;