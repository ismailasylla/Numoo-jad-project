import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://test-2-numoo-api.azurewebsites.net/graphql',
  cache: new InMemoryCache(),
  headers:{ 
    "Access-Control-Allow-Origin": "*"
  }
});

ReactDOM.render(
  <AppProvider>
    <AuthProvider>
      <React.StrictMode>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </React.StrictMode>
    </AuthProvider>
  </AppProvider>,
  document.getElementById('root')
);

reportWebVitals();
