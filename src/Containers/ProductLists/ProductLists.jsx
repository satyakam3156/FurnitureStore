import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
import styles from './ProductLists.module.css';
import { withRouter, Redirect, Route } from 'react-router';
import Details from '../../Components/Details/Details';
class ProductLists extends Component{
    state={
        products:[],
        error:false
    }

    showDetails = (e)=>{
        console.log(this.props)
        this.props.history.push({pathname:'/details',state:e})
    }
    componentDidMount(){
        fetch('http://www.json-generator.com/api/json/get/ceoUCMVMjm?indent=2')
        .then(res=>res.json())
        .then(data=>this.setState({products:data}))
        .catch(err=>this.setState({error:true}))
    }
    render(){
        let cards = this.state.products.map(e=>{
            return <Card data={e} showDetails={()=>{this.showDetails(e)}}></Card>
        });
        return (
        <div className={styles.cardLayout}>
            {this.state.error?<h1 className={styles.errorPanel}>OOPS!Reload to try again</h1>:cards}
            <Route path='/details' component={Details}></Route>
        </div>
        )
    }
}

export default withRouter(ProductLists);