import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});


const elementRoot = document.getElementById('root');
const root = ReactDOM.createRoot(elementRoot);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
