import React, { Component } from 'react';
import styles from './Filters.module.css';
import FilterOptions from '../../Components/FilterOptions/FilterOptions';
import { filterService } from '../../FilterSubject';
class Filters extends Component {
    state = {
        filters: {
            collection: '',
            color: '',
            category: '',
            price: 0,
        },
    }


    options = {
        collection: ['Coombes', 'Momo', 'Keeves Set'],
        category: ['Arm Chair', 'Shelves', 'Chair'],
        color: ['Black', 'Grey']
    }
    constructor(props) {
        super(props);
        this.collectionRef = React.createRef();
        this.colorRef = React.createRef();
        this.categoryRef = React.createRef();

    }
    toggleCollectionContent = () => {
        this.collectionRef.current.style.display = this.collectionRef.current.style.display === 'block' ? 'none' : 'block';
    }
    toggleCategoryContent = () => {
        this.categoryRef.current.style.display = this.categoryRef.current.style.display === 'block' ? 'none' : 'block';
    }
    toggleColorContent = () => {
        this.colorRef.current.style.display = this.colorRef.current.style.display === 'block' ? 'none' : 'block';
    }

    collectionFilter = (value) => {
        console.log(value);
        filterService.send({
            filters: {
                ...this.state.filters,
                collection: value
            },
            filterType:'collection'
        })
        this.setState({
            filters: {
                ...this.state.filters,
                collection: value
            },
            
        })
    }
    categoryFilter = (value) => {
        filterService.send({
            filters: {
                ...this.state.filters,
                category: value
            },
            filterType:'category'

        })
        this.setState({
            filters: {
                ...this.state.filters,
                category: value
            }
        })

    }
    colorFilter = (value) => {
        filterService.send({
            filters: {
                ...this.state.filters,
                color: value
            },
            filterType:'color'
        })
        this.setState({
            filters: {
                ...this.state.filters,
                color: value
            }
        })
    }
    render() {
        return (
            <div>
                <p>FILTER BY</p>
                <button className={styles.collapsibleBtn}
                    onClick={this.toggleCollectionContent}>
                    Collection <i className={styles.arrow}>
                    </i>
                </button>
                <FilterOptions options={this.options.collection} ref={this.collectionRef}
                    onRadioClick={this.collectionFilter}
                    name="collection"></FilterOptions>
                <button className={styles.collapsibleBtn} onClick={this.toggleCategoryContent}>
                    Category <i className={styles.arrow}>
                    </i>
                </button>
                <FilterOptions options={this.options.category} ref={this.categoryRef}
                    onRadioClick={this.categoryFilter}
                    name="category"></FilterOptions>
                <button className={styles.collapsibleBtn} onClick={this.toggleColorContent}>
                    Color <i className={styles.arrow}>
                    </i>
                </button>
                <FilterOptions options={this.options.color} ref={this.colorRef}
                    onRadioClick={this.colorFilter}
                    name="color"></FilterOptions>
                <div className={styles.sliderContainer}>
                    Price
                <input type="range" min="1" max="100" className={styles.slider}></input>
                </div>
            </div>

        )
    }
}
export default Filters;