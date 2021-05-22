import { setContext } from '@apollo/client/link/context';
import { auth } from '../config';

const authLink = setContext(async (_, { headers }) => {
    if (!auth.currentUser) {
        return {
            headers: {
              ...headers,
            }
          } 
    }

    const token = await auth?.currentUser?.getIdToken();    

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

  export default authLink;