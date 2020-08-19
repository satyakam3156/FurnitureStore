import React from 'react';
import styles from './FilterOptions.module.css';
const filterOptions = React.forwardRef((props, ref) => {
    let collectionOptions = props.options.map(e => {
        return (<div>
            <input type="radio" value={e} name={props.name} onChange={($event)=>props.onRadioClick($event.target.value)} /><label>{e}</label>
        </div>)
    })


    return (
        <div className={styles.panelContent} ref={ref}>
            {collectionOptions}
        </div>
    )
})
export default filterOptions;