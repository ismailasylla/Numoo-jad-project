import { ApolloClient, from, HttpLink } from '@apollo/client'

import authLink from './authLink'
import cache from './cache'

const httpLink = new HttpLink({
  uri: 'https://test-2-numoo-api.azurewebsites.net/graphql',
})

const apiClient = new ApolloClient({
  link: from([authLink, httpLink]),
  cache,
  headers:{ 
    "Access-Control-Allow-Origin": "*"
  }
})

export default apiClient;