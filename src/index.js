import React from 'react'
import { withRouter, Router } from 'react-router'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import ApolloProvider from 'apollo-client'

import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// import { ApolloClient } from "apollo-client";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// const defaultOptions = {
//     watchQuery: {
//       fetchPolicy: 'cache-and-network',
//       errorPolicy: 'ignore',
//     },
//     query: {
//       fetchPolicy: 'network-only',
//       errorPolicy: 'all',
//     },
//     mutate: {
//       errorPolicy: 'all'
//     }
//   }

// const cache = new InMemoryCache();
// const client = new ApolloClient({
//     defaultOptions,
//   cache,
//   link: new HttpLink({
//     uri: 'https://asdfasdff444.herokuapp.com/v1/graphql',
//   })
// });


//   ReactDOM.render(
//     <ApolloProvider client={client}>
//       <Router >
//         <App />
//       </Router>
//     </ApolloProvider>,
//     document.getElementById('root'),
//   )







 
// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'https://asdfasdff444.herokuapp.com/v1/graphql' });
 
const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
 
render(ApolloApp(App), document.getElementById('root'));












// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
