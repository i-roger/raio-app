import { Stack } from "expo-router";

import MenuOptions from "../components/menuOption"

export default function RootLayout() {
    return (
        <Stack screenOptions={{
            statusBarBackgroundColor:'#3a3e42',
            headerShown: true, 
            headerStyle: {backgroundColor: '#3a3e42'},
             headerTitleStyle: {color: 'white'},
             headerTintColor: 'orange',
             headerBackTitle: 'Voltar', 
             contentStyle: {
                borderTopColor: '#25292e',
                backgroundColor: '#000',
                }
            }}>
            <Stack.Screen name="index"
            options={{
                headerShown: false, 
                contentStyle: {backgroundColor: "#000"}
                }}
                />
            <Stack.Screen name="paceestimado" options={{
                title: 'Pace Estimado',
                contentStyle: {backgroundColor: "#000"}
                }}
                />
            <Stack.Screen name="paceparakmh" options={{title: 'Pace para Km/h'}}/>
            <Stack.Screen name="sobremim" options={{title: 'Sobre Mim'}}/>
        </Stack>
    )
}