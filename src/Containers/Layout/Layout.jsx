import React, { Component } from 'react';
import Header from '../../Components/UI/Header/Header'
import ProductsList from '../ProductLists/ProductLists';
import FilterPanel from '../Filters/Filters';
import styles from './Layout.module.css';
import { withRouter } from 'react-router';
class Layout extends Component {
    state={
        filterState:true
    }
    toggleFilter=()=>{
        this.setState((prevState)=>{
            return {
                filterState:!prevState.filterState
            }
        })
    }
    render() {
        let filterVisibility = this.state.filterState? <div className={styles.filterPanel}><FilterPanel></FilterPanel></div>:null
        let layOut = this.props.location.pathname ==="/"?
<div className={this.state.filterState?styles.viewPanel:styles.fullPanel}>
    {filterVisibility}
                    <div className={this.state.filterState?styles.resultPanel:null}>
                    {this.props.children}
                    </div>
                </div>:
                <div className={styles.fullPanel}>
                    {this.props.children}
                </div>;

        return (
            <React.Fragment>
                <Header toggleFilter={this.toggleFilter}></Header>
                {layOut}
                
            </React.Fragment>

        )
    }
}

export default withRouter(Layout);