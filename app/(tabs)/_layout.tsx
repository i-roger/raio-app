import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
<Tabs
  screenOptions={{
    tabBarActiveTintColor: '#ffd33d',
    headerStyle: {
      backgroundColor: '#25292e',
    },
    tabBarItemStyle:{
      margin: 10,
    },
    headerShown: false,
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
    backgroundColor: '#30363c',
    borderTopWidth: 0,
    shadowOffset: {
        width: 0,
        height: 40,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    position: 'absolute',
    bottom: 0,
    padding: 10,
    width: '100%',
    height: 84,
    zIndex: 0,
    },
  }}
>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="paceestimado"
        options={{
          title: 'Pace Estimado',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="paceparakmh"
        options={{
          title: 'Pace para Km/h',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />

      <Tabs.Screen
      name="sobremim"
      options={{
        title: 'Sobre Mim',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused? 'flash' : 'flash-outline'} color={color} size={24}/>
        )
      }}
      />
    </Tabs>
  );
}
