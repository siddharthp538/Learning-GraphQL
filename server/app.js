const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const schema = require('./schema/schema');
const mongoose = require('mongoose');

mongoose.connect('mongodb://siddharth:test123@ds143474.mlab.com:43474/gql-siddharth' , {useNewUrlParser:true});
mongoose.connection.once('open' , ()=>{
  console.log('connected to the database..');
});

app.use('/graphql' , graphqlHTTP({
  schema,
  graphiql:true
}));

app.listen(4000 , ()=>{
  console.log('Server running on 4000.....');
});
