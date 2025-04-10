import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function sobremim() {
    return(
        
        <SafeAreaView style={{backgroundColor: '#25292e'}}>
            <View style={{alignItems: 'center', margin: 10,}}>
                <TouchableOpacity style={{width: '100%', paddingTop:20, paddingBottom: 20, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: "center", backgroundColor: '#d79732', shadowOpacity: 0.2, shadowOffset: {width:10, height:10}, shadowRadius: 3, borderRadius: 10}} onPress={() => Linking.openURL('https://www.instagram.com/raiolaranja/')}>
                    <View style={{justifyContent: 'space-evenly', flexDirection: 'row', alignItems: "center", width:'100%', gap:4,}}>
                        <Image 
                        style={styles.myimg}
                        source={require('@/assets/images/raiolaranja.png')}/>

                        <View style={{width:'50%'}}>
                            <Text style={{fontSize: 17, color:'#000'}}>Você também pode falar comigo diretamente, basta clicar aqui!</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{margin: 10}}>
                <Text style={styles.title}>
                    FAQ:
                </Text>
            </View>
            <ScrollView style={{backgroundColor: '#25292e', height:'100%'}}>
        <View style={{paddingBottom: 300}}>

            <View style={styles.boxFaq}>
                <Text style={styles.faqTitle}>Como utilizar a ferramenta "Pace Estimado"?</Text>
                <Text style={styles.faqText}>R: Digite a distância corretamente, se for KM digite : 5 ou 10 ou 12, se for em METROS digite : 0,400 ou 0,200 ou 1,500. Não deixe nenhum campo vazio, caso necessário coloque 0 no campo.</Text>

            </View>

            <View style={styles.boxFaq}>
                <Text style={styles.faqTitle}>Como copiar o resultado do cálculo?</Text>
                <Text style={styles.faqText}>R: Basta tocar em cima do resultado calculado, automaticamente será copiado.</Text>

            </View>
            
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    myimg: {
        borderRadius: 100,
        width: 105,
        height: 105
    },
    boxFaq: {
        backgroundColor: '#d79732',
        borderRadius: 5,
        margin:10,
        padding: 20,
    },
    faqTitle: {
        paddingBottom: 5,
        fontWeight: 600,
        fontSize: 20
    },
    faqText: {
        fontSize: 15

    },
    title: {
        color: '#e9e9ea',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 5,
      },
})