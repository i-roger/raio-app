import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons'

export default function menu() {
    const router = useRouter();

    return(
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.button} onPress={() => router.navigate('/')}>
                <Ionicons name="home" size={42} color='#ce7e00'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.navigate('/sobremim')}>
                <Ionicons name="flash" size={42} color='#ce7e00'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    menuContainer : {
        bottom: 0,
        flexDirection: 'row',
        gap: 10,
        width: '100%',
        height: '12%',
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        borderRadius: 20,
    },
    button: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#3a3e42',
        padding: 10,
        borderRadius: 5,
    
      },
      buttonText: {
        color: '#e9e9ea',
        fontWeight: '600',
        margin: 'auto',
      }
})