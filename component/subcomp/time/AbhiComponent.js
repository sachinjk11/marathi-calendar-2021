import React from 'react';
import { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, StyleSheet, Alert, PanResponder, Share } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import { BannerAd } from '../../bannerAd';

const Separator = () => (
    <View style={styles.separator} />
  );

class AbhiForm extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}>
            <BannerAd/>
            <Text style={styles.txtHead}>{'आम्ही कॅलेंडरमध्ये अभिजीत मुहूर्त आधीच नमूद केले आहे. शुभकाळ चा अर्थ अभिजीत मुहूर्त आहे.'}</Text>
            <Text style={styles.txt}>{' \t \t अभिजीत म्हणजे "विजेता" आणि मुहूर्ता म्हणजे "वेळ". आपल्या सनातन धर्मात काळाला खूप महत्त्व दिले गेले आहे आणि असे मानले जाते की काम योग्य वेळी केले तर यश निश्चित आहे. साधारणपणे, दिवस, तारीख, नक्षत्र, योग आणि डेमन यांचा योग मुहूर्तासाठी दिसतो, आणि त्या आधारे, हे निश्चित केले जाते की यश निश्चित झाल्यावर कोणते कार्य करावे. परंतु ही गणना थोडीशी क्लिष्ट आहे आणि केवळ पंचांगातील तज्ञ त्यांचे वर्णन करू शकतात. \n \n\ \n\t\t अशा परिस्थितीत अभिजीत मुहूर्ता पंचांग विषयी माहिती नसलेल्या सामान्य लोकांसाठी सर्वोत्तम आहे. अभिजीत मुहूर्ता हा प्रत्येक दिवसातील एक वेळ आहे ज्यामध्ये आपण जवळजवळ सर्व शुभ कर्मे करू शकता. येथे एक गोष्ट स्पष्ट करणे योग्य आहे की अभिजीत मुहूर्ता आणि अभिजीत नक्षत्र यांचा थेट संबंध नाही. पण जर अभिजीत मुहूर्ता आणि अभिजीत नक्षत्र एकत्र पडले तर ते अत्यंत शुभ मानले जाते.'}</Text>
            <Text style={styles.txt}>{'\n \t \t अभिजीत मुहूर्ता बहुतेक सर्व शुभ कार्यात मान्य आहे - जसे की पहिल्यांदा एखाद्या कामापासून प्रवास सुरू करणे, नवीन काम सुरू करणे, एखादे दुकान किंवा व्यवसाय सुरू करणे, कर्जाची परतफेड करणे किंवा पैसे गोळा करणे किंवा पूजा सुरू करणे इ. यावेळी काही विद्वान गृह प्रवेश, मुंडन करण्याचे काम, लग्न इत्यादी देखील ओळखतात. तथापि, असेही मानले जाते की हे सामान्य शुभ कार्यासाठी खूप चांगले आहे.'}</Text>
            <BannerAd/>
            </ScrollView>);
    }
}
const styles = StyleSheet.create({
    txt : {
        textAlign:"justify",
        margin:10
    },
    txtHead : {
        textAlign:"justify",
        margin:11
    }
  });
export default (AbhiForm);