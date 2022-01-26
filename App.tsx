import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createClient, Provider as UrqlProvider } from 'urql';
import { Stories } from './src/Strories';

const client = createClient({
  url: 'http://localhost:3000/graphql',
});

export default function App() {
  return (
    <UrqlProvider value={client}>
      <Stories />
    </UrqlProvider>
  );
}
