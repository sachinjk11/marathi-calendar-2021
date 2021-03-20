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

class AmrutForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            HeadTable: ['तारीख', 'उत्सव'],
            DataTable: fast.ganesh.map(function(item) {return [item.Date,item.name];})
          }
    }
    
    render(){
        const state = this.state;
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
             <BannerAd/>
                <Text style={styles.txt}>{' \t\t संकष्टी चतुर्थी हा हिंदू धर्माचा एक प्रसिद्ध सण आहे. हिंदूंच्या समजुतीनुसार कोणतेही शुभ कार्य करण्यापूर्वी गणेशाची पूजा केली जाते. इतर सर्व देवतांमध्ये गणेशाला प्रथम उपासक मानले जाते. त्याला शहाणपणा, सामर्थ्य आणि विवेकबुद्धीचा दर्जा आहे. भगवान गणेश आपल्या भक्तांचे सर्व त्रास आणि अडचणी दूर करतात, म्हणून त्यांना विघ्नहर्ता आणि संकटमोचन देखील म्हणतात. तसे, हिंदू धर्मात देवी-देवतांना प्रसन्न करण्यासाठी अनेक उपवास आणि उपवास केले जातात.'}</Text>
                <Text style={styles.txt}>{' संकष्टी चतुर्थी म्हणजे काय? \n\n \t\t संकष्टी चतुर्थी म्हणजे संकटाचा पराभव करण्यासाठी चतुर्थी. संकष्टी हा संस्कृत भाषेतील एक शब्द आहे, ज्याचा अर्थ आहे कठीण काळापासून मुक्त होणे. या दिवशी व्यक्ती आपल्या व्यथा दूर करण्यासाठी गणपतीची पूजा करते. पुराणानुसार, चतुर्थीला गौरी पुत्र गणेश यांची पूजा करणे खूप फलदायी आहे. या दिवशी लोक सूर्योदयाच्या वेळेपासून चंद्र उदय होईपर्यंत उपवास ठेवतात. संकष्टी चतुर्थीवर संपूर्ण कायदेशीर प्रथेसह गणेशची पूजा केली जाते.'}</Text>

                <View style={styles.TableContainer}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                    <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
                    <Rows data={state.DataTable} textStyle={styles.TableText}/>
                    </Table>
                <Text style={styles.txt}>{'\nसंकष्टी चतुर्थी कधी आहे?  \n\n \t\t संकष्टी चतुर्थी कृष्ण पक्ष आणि शुक्ल पक्षाच्या चौथ्या दिवशी साजरी केली जाते. हिंदू कॅलेंडरनुसार, चतुर्थी प्रत्येक महिन्यात दोनदा येते, जे लोक मोठ्या श्रद्धेने साजरे करतात. पौर्णिमेनंतर येणार्‍या चतुर्थीला संकष्टी चतुर्थी म्हणतात, तर अमावस्या नंतरची चतुर्थी विनायक चतुर्थी म्हणतात. संकष्टी चतुर्थी हा भगवान गणेशाची उपासना करण्याचा खास दिवस मानला जातो. शास्त्रानुसार माघ महिन्यात पौर्णिमेनंतर चतुर्थी खूप शुभ आहे.'}</Text>
                <Text style={styles.txt}>{'संकष्टी चतुर्थीचे महत्त्व  \n\n \t\t संकष्टीवर गणपतीची पूजा केल्यास घरातील नकारात्मक प्रभाव दूर होतो आणि शांतता टिकते. असं म्हणतात की गणेशाने घरात येणा all्या सर्व आपत्तींना दूर करून त्या व्यक्तीच्या इच्छेची पूर्तता केली जाते. चतुर्थीला चंद्र दर्शन देखील खूप शुभ मानले जाते. सूर्योदयापासून सुरू होणारा हा व्रत चंद्र दर्शनानंतर संपेल. संकष्टी चतुर्थीला वर्षभरात 13 उपवास असतात. सर्व उपवासांसाठी वेगळी वेगवान कथा आहे.'}</Text>
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

export default (AmrutForm);