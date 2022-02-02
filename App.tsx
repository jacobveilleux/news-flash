import { StatusBar } from 'expo-status-bar';
import {
  createClient,
  dedupExchange,
  fetchExchange,
  Provider as UrqlProvider,
} from 'urql';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/screens/Root.navigator';
import { cacheExchange } from '@urql/exchange-graphcache';
import schema from './src/graphql/graphql.schema.json';

const client = createClient({
  url: 'http://localhost:3000/graphql',
  exchanges: [
    dedupExchange,
    cacheExchange({
      schema: schema as any,
      resolvers: {
        Query: {
          story: (_, args) => ({ __typename: 'Story', id: args.id }),
        },
      },
    }),
    fetchExchange,
  ],
});

export default function App() {
  return (
    <UrqlProvider value={client}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </UrqlProvider>
  );
}
