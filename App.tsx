import { StatusBar } from 'expo-status-bar';
import { createClient, Provider as UrqlProvider } from 'urql';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/screens/Root.navigator';

const client = createClient({
  url: 'http://localhost:3000/graphql',
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
