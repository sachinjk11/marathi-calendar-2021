import React from 'react';
import { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, StyleSheet, Alert, PanResponder, Share } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import time from '../../../data/time.json';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { BannerAd } from '../../bannerAd';

const Separator = () => (
    <View style={styles.separator} />
  );

class NameForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            HeadTable: ['तारीख', 'सुरवातीचा काळ', 'शेवटचा काळ'],
            DataTable: time.name.map(function(item) {return [item.Date,item.start,item.end];})
          }
    }
    
    render(){
        const state = this.state;
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
            <BannerAd/>
                <Text style={styles.txt}>{' \t\t हिंदू धर्माच्या सर्व संस्कारामध्ये नामकरण संस्काराला खूप महत्वाचे मानले जाते. अश्यात तर आज कालच्या आधुनिक युगात आई वडील आपल्या मुलांचे नाव असेच कुठल्याही दिवशी ठेवतात. परंतु आपल्या धार्मिक मान्यतेच्या आधारावर कुठल्याही नवजात शिशु चे नाव योग्य नामकरण संस्काराच्या वेळी सर्व मोठ्या व्यक्तींच्या निगराणीत ठेवले पाहिजे. कुठल्याही व्यक्तीच्या जीवनात त्याच्या नावाचे महत्व सर्वात खास होते, कारण त्याला त्याची ओळख त्याच्या नावाने मिळते. \n\n\t\tआज ह्या लेखा द्वारे आम्ही तुम्हाला नामकरण संस्कार चे लाभ आणि सोबतच या वर्षी याच्या विशेष मुहूर्ताच्या बाबतीत सांगत आहोत. नामकरण संस्कार विशेष मुहूर्तावर होणे हे ही विशेष मानले जाते. ज्या प्रकारे अन्य महत्वाची कार्य आणि परिजनांसाठी मुहूर्त पाहून त्याला संपन्न केले जाते, ठीक त्याच प्रकारे शिशु चे नाव ही शुभ मुहुर्तात ठेवले पाहिजे. धार्मिक आधारांवरच नाही तर ज्योतिषीय आधारावर ही नामकरण संस्काराला अहम मानले गेले आहे. चला तर मग पाहूया, या वर्षी नामकरण संस्कार साठी कोणते मुहूर्त खास आहेत आणि त्याचे महत्व काय आहे.'}</Text>
                <View style={styles.TableContainer}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                    <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
                    <Rows data={state.DataTable} textStyle={styles.TableText}/>
                    </Table>
                <Text style={styles.txt}>{'\n\t\t हिंदू धर्माचे पवित्र 16 संस्करामध्ये नामकरण एक महत्वपूर्ण संस्कार आहे. जसे की तुम्ही ही या गोष्टीला चांगल्या प्रकारे समजत असाल की कुठल्याही व्यक्तीच्या आयुष्यात नावाचे काय महत्व असते. समाजात व्यक्तीला ओळख त्याच्या नावानेच मिळते. जाहीर आहे की नामकरण संस्काराचे महत्व अश्या प्रकारे आपोआप वाढले जाते. तथापि जन्मानंतर शिशु ला नेहमी आई वडील किंवा नातेवाईक स्वतःहून कुठल्या न कुठल्या नावाने बोलवायला लागतात.\n\n\t\tपरंतु हिंदू धर्माच्या मान्यतेनुसार जन्माच्या अकराव्या किंवा बाराव्या दिवशीच सर्व विधी विधान सोबत शुभ मुहूर्तावर नामकरण संस्कार संपन्न झाले पाहिजे. या संस्काराच्या वेळी पंडित किंवा पुरोहित शिशु च्या जन्म कुंडलीच्या आधारावर आणि ग्रह नक्षत्रांची गणना केल्यानंतर त्यांचे नाव ठेवले जाते. ह्या संस्काराला केल्याने बाहेरूनच नाही तर आंतरिक लाभ ही मिळतो. नामकरण संस्कार नक्की केले पाहिजे कारण याने शिशुच्या मानसिक आणि शारीरिक विकासात मदत होते. या व्यतिरिक्त या संस्काराला करण्याचा एक लाभ अजून आहे की याने शिशु चे आयु आणि बुद्धी मध्ये वृद्धी होते. विशेष रूपाने नामकरण संस्कार द्वारे शिशुला नवीन ओळख मिळते, जे त्याच्या भविष्यासाठी विशेष महत्वाचे असते.'}</Text>
                </View>
            <BannerAd/>
            </ScrollView>);
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      marginTop : 15,
      marginHorizontal: 16,
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    TableContainer: { 
        flex: 1,
        padding: 10,
        paddingTop: 15,
        backgroundColor: '#ffffff' 
      },
      HeadStyle: { 
        height: 40,
        alignContent: "center",
        backgroundColor: '#ffe0f0'
      },
      TableText: { 
        margin: 10
      },
      txt : {
        textAlign:"justify",
        margin:10
    }
  });

export default (NameForm);