import { ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: `${process.env.REACT_APP_BACKEND_URL || 'http://localhost:1337'}/graphql`,
    cache: new InMemoryCache(),
  });

export default client;
