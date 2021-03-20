import React from 'react';
import { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, StyleSheet, Alert, PanResponder, Share } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import fast from '../../../data/fast.json';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { BannerAd } from '../../bannerAd';

const Separator = () => (
    <View style={styles.separator} />
  );

class MondayForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            HeadTable: ['तारीख', 'उत्सव'],
            DataTable: fast.monday.map(function(item) {return [item.date,item.name];})
          }
    }
    
    render(){
        const state = this.state;
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
             <BannerAd/>
                <Text style={styles.txt}>{' \t\t सावन महिन्याला हिंदू धर्मात खूप महत्त्व आहे. कारण श्रावण महिन्यात भगवान शिवपूजा करण्याची विशेष प्रथा आहे. हिंदू कॅलेंडरनुसार हा महिना वर्षाचा पाचवा महिना आहे आणि इंग्रजी कॅलेंडरनुसार सावन महिना जुलै-ऑगस्टमध्ये येतो. या काळात, सावन सोमवर व्रताला अत्यंत महत्त्व दिले जाते. वास्तविक श्रावण महिना हा भगवान भोलेनाथांचा आवडता आहे. या महिन्यात सोमवार व्रत आणि सावन स्नानची परंपरा आहे. श्रावण महिन्यात भगवान भोलेनाथ यांची बेल पत्राद्वारे पूजा करणे आणि त्यांना जल अर्पण करणे अत्यंत फलदायी मानले जाते.'}</Text>
                <Text style={styles.txt}>{'\t\t शिव पुराणानुसार या महिन्यात जो कोणी सोमवारी उपवास ठेवतो, भगवान शिव त्यांच्या सर्व मनोकामना पूर्ण करतात. सावन महिन्यात लाखो भाविक हरिद्वार, देवघर, उज्जैन, नाशिक आणि भारतातील अनेक धार्मिक स्थळांवर ज्योतिर्लिंग दर्शनासाठी येतात. \n\n \t\t या महिन्यातील पावसाळ्यामुळे संपूर्ण पृथ्वी पावसाने हिरवीगार होत असल्याने सावन महिन्याचा निसर्गाशी खूप संबंध आहे. उन्हाळ्यानंतर या महिन्यात झालेल्या पावसाने मानवी समुदायाला मोठा दिलासा मिळाला आहे.'}</Text>

                <View style={styles.TableContainer}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                    <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
                    <Rows data={state.DataTable} textStyle={styles.TableText}/>
                    </Table>
                <Text style={styles.txt}>{'\n सावन दरम्यान ओम नमः शिवायचा जप करावा. \n\n \t\tसावन महिना शिवाला समर्पित आहे. असे म्हटले जाते की जर एखादा भक्त सावण महिन्यात महादेवाचे व्रत खरे मन आणि पूर्ण भक्तीने पाळत असेल तर त्याला शिव आशीर्वाद मिळालाच पाहिजे. '}</Text>
                <Text style={styles.txt}>{'उपवास आणि पूजा करण्याची पद्धत : \n\n●\tसकाळी सूर्योदय होण्यापूर्वी उठा आणि शौचास इत्यादी निवृत्तीनंतर स्नान करा. \n●\tउपासनास्थळ स्वच्छ करुन वेदी स्थापित करा.\n●\tशिव मंदिरात जाऊन शिवलिंगाला दूध अर्पण करा \n●\tमग महादेवाच्या उपोषणाचा संकल्प पूर्ण भक्तीने घ्या \n●\tदिवसातून दोनदा (सकाळी आणि संध्याकाळी) भगवान शिवांची प्रार्थना करा.\n●\tपूजेसाठी, तिळाच्या तेलाचा दिवा लावा आणि भगवान शिव यांना फुले द्या. \n●\tमंत्रात सुपारी, पंच अमृत, नारळ आणि द्राक्षांचा वेल शिवला अर्पण करा. \n●\tउपवासाच्या वेळी सावन व्रत कथा सांगा'}</Text>
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

export default (MondayForm);