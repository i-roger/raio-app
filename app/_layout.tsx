import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{navigationBarColor: '#25292e', }}> {/* Define a cor da barra de navegação nativa do Android */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
