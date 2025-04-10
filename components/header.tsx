import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router'

interface headerProps {
    title: string;
}

export default function Header({title}:headerProps ) { 
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={()=> router.back()} style={styles.btnVoltar} underlayColor='#d79732'>
                <Text style={styles.buttonText}>VOLTAR</Text>
            </TouchableHighlight>
            <Text style={styles.headerTitle}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: 80, 
        flexDirection: 'row', 
        alignItems: 'center',
    },
    headerTitle : { 
        flex:1,
        color: '#e9e9ea',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonText: {
        color: '#e9e9ea',
        fontWeight: 700,
        margin: 'auto',
      },
      btnVoltar: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
        width: 80,
        height: 60,
        top: 0,
        left: 0,
        margin: 10,
      },
    })