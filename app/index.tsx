import { Text, View } from "react-native";
import { Link } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView 
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View 
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
      
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link style={{alignContent:"center", textAlign:"center", color:"white", fontWeight:"500", backgroundColor:"blue", borderRadius:5, padding:10, width:150, height:150}} href="/paceestimado">Pace Estimado</Link>
      </View>
    </SafeAreaView>
  );
}
