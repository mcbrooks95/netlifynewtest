import React from 'react'
// import { withRouter, Router, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Login from './Login';
import LoginParent from './LoginParent';
import User from './User';
import * as serviceWorker from './serviceWorker';
// import ApolloProvider from 'apollo-client'

// import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// import { ApolloClient } from "apollo-client";
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
 
// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'https://asdfasdff444.herokuapp.com/v1/graphql' });
 
// const ApolloApp = AppComponent => (
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>
// );
 
// render(ApolloApp(App), document.getElementById('root'));

const routing = (
  <ApolloProvider client={client}>
    <Router>    
        <div>
          <Route path="/login" component={LoginParent} />
          <Route path="/user" component={User} />
          {/* <Route path="" component={App} /> */}
        </div>
    </Router>
  </ApolloProvider>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
