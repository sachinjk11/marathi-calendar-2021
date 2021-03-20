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

class HomeTimeForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            HeadTable: ['तारीख', 'सुरवातीचा काळ', 'शेवटचा काळ'],
            DataTable: time.home.map(function(item) {return [item.date,item.start,item.end];})
          }
    }
    
    render(){
        const state = this.state;
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
            <BannerAd/>
                <Text style={styles.txt}>{' \t\t असे सांगितले जाते की आयुष्य जगण्यासाठी मानवासाठी महत्वाच्या तीन गोष्टी आहेत, “अन्न”, “वस्त्र” आणि “निवारा”. हे आयुष्य काढण्यासाठी मानवाच्या मूलभूत गरजा आहेत. या प्राथमिक गरजांविना मानवाच्या जीवनाची सुरवात कधीच होऊ शकत नाही. जेवण भूकेला संपवून मानवी शरीराला पोषक तत्व प्रदान करते, कपड्याची आवश्यकता शरीर झाकावण्यासोबतच शरीराला थंडी आणि ऊन यापासून बचाव करण्यासाठी असते. आता आपण घर किंवा निवासस्थान बद्दल बोलूया, हे मानवाला ऊन, पाऊस, थंडी पासून वाचवण्यासोबतच सुरक्षा आणि आश्रय देते.'}</Text>
                <View style={styles.TableContainer}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                    <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
                    <Rows data={state.DataTable} textStyle={styles.TableText}/>
                    </Table>
                <Text style={styles.txt}>{'\n\t\t वैदिक ज्योतिष विभिन्न योग आणि दशेची माहिती देते आणि ग्रह आणि नक्षत्रांना एक सोबत संरेखित करते. कुंडलीचा चौथा भाव खासकरून योग्य वेळी संपत्तीवर मालकी हक्क प्राप्त करणे आणि मालमत्ता खरेदी करण्याच्या वेळी महत्वपूर्ण भूमिका बजावते. कुंडली मध्ये “सुख स्थान” च्या नावाने जाणले जाणारे हे भाव विशेष रूपात घर, समृद्धी, भूमी ,चल तसेच चल संपत्ती आणि वाहन इत्यादींचे कारक होते. ज्योतिषीय आधारावर या घराचे विश्लेषण करण्याने खास करून या गोष्टीची माहिती मिळते की कुठल्या जमीन किंवा मालमत्तेला विकत घेण्यात गुंतवणूक करायची आहे आणि केव्हा करायची नाही'}</Text>
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

export default (HomeTimeForm);