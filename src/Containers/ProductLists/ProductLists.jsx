import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
import styles from './ProductLists.module.css';
import { withRouter, Redirect, Route } from 'react-router';
import Details from '../../Components/Details/Details';
import {subscriber} from '../../FilterSubject';
class ProductLists extends Component{
    
    state={
        products:[],
        allProducts:[],
        error:false,
    }
    showDetails = (e)=>{
        console.log(this.props)
        this.props.history.push({pathname:'/details',state:e})
    }
    componentDidMount(){
        fetch('http://www.json-generator.com/api/json/get/ceoUCMVMjm?indent=2')
        .then(res=>res.json())
        .then(data=>this.setState({products:data,allProducts:data}))
        .catch(err=>this.setState({error:true}))
        subscriber.subscribe(filters=>{
            this.filterData(filters);
        })
    }

    filterData = (filters)=>{
        
        let products = this.state.allProducts;
        console.log(products);
        let updatedProducts;
        switch(filters.filterType){
            case 'collection':
                
                updatedProducts = products.filter(e=>e['name'].toLowerCase() === filters.filters.collection.toLowerCase());
                console.log(updatedProducts)
                this.setState({products:updatedProducts});
                break;
                case 'category':
                 updatedProducts = products.filter(e=>e['type'].toLowerCase() === filters.filters.category.toLowerCase());
                console.log(updatedProducts)
                this.setState({products:updatedProducts});
                    break;
                    case 'color':
                     updatedProducts = products.filter(e=>e.details.color.indexOf(filters.filters.color.toLowerCase()) != -1);
                console.log(updatedProducts)
                this.setState({products:updatedProducts});
                        break;
        }
    }
    render(){
        let cards = this.state.products.map(e=>{
            return <Card data={e} showDetails={()=>{this.showDetails(e)}}>

             </Card>
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