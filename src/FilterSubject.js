import { BehaviorSubject} from 'rxjs';

const subscriber = new BehaviorSubject({
    filters: {
        collection: '',
        color: '',
        category: '',
        price: 0,
    },
    filterType:''
})
 const filterService = {
     send:function(data){
         subscriber.next(data)
     }
 };

 export {subscriber, filterService}; 