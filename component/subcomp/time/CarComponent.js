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

class CarForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            HeadTable: ['तारीख', 'सुरवातीचा काळ', 'शेवटचा काळ'],
            DataTable: time.car.map(function(item) {return [item.Date,item.start,item.end];})
          }
    }
    
    render(){
        const state = this.state;
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
            <BannerAd/>
                <Text style={styles.txt}>{' \t\t हिंदु धर्मात, नेहमीच मुहूर्त पाहून शुभ कार्ये सुरू केली जातात. हिंदू कॅलेंडरमध्ये लग्न, घरात प्रवेश, मुंडन यासह वाहने खरेदी करण्यासाठी विशेष तारखा, नक्षत्र आणि चढत्या गोष्टी निश्चित केल्या आहेत. वाहन खरेदीसाठी शुभ वेळ पाहून खरेदी केलेली वाहने घरात शांतता आणतील आणि अपघातांची भीती कमी होईल. कार, ​​दुचाकी, ट्रक आणि इतर सर्व प्रकारच्या व्यावसायिक आणि अव्यावसायिक वाहने खरेदीसाठी शुभ आहेत. त्यापैकी तारीख आणि नक्षत्रांना विशेष महत्त्व आहे.'}</Text>
                <View style={styles.TableContainer}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                    <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
                    <Rows data={state.DataTable} textStyle={styles.TableText}/>
                    </Table>
                <Text style={styles.txt}>{'\n\t\t शुभ तारख, नक्षत्र, लग्न आणि वाहन खरेदीसाठी मुहूर्त वगळता असे बरेच शुभ काळ आहेत जेव्हा वेळ न पाहता वाहने खरेदी केली जातात. त्यापैकी अक्षय तृतीया, सर्वार्थ सिद्धि योग, गुरु पुष्य योग, रवी पुष्य योग, अमृत सिद्धि योग इत्यादी प्रमुख आहेत. या मुहूर्तांना हिंदू धर्म आणि वैदिक ज्योतिषात विशेष महत्त्व आहे. या मुहूर्तामध्ये मुहूर्ता पाहिल्याशिवाय बरीच मांगलिक आणि शुभ कामे सुरू केली जाऊ शकतात. तथापि, हे लग्नाच्या विषयावर पूर्णपणे लागू होत नाही.'}</Text>
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

export default (CarForm);