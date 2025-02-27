import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
        width:"100%"
      }}
    >
      <Text style={{backgroundColor: "blue"}}>Pace Estimado</Text>
    </View>
  );
}
