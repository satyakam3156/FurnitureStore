import React from 'react';

const MyContext = React.createContext({
    collection: '',
    color: '',
    category: '',
    price: 0,
});

export default MyContext;