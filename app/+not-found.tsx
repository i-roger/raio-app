import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {

  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Página não encontrada!' }} />
      <View style={styles.container}>
        <Link href="./" style={styles.button}>
          Voltar para o Início!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
