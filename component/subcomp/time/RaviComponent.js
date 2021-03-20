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

class RaviForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            HeadTable: ['तारीख', 'सुरवातीचा काळ', 'शेवटचा काळ'],
            DataTable: time.ravi.map(function(item) {return [item.date,item.start,item.end];})
          }
    }
    
    render(){
        const state = this.state;
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
            <BannerAd/>
                <Text style={styles.txt}>{' \t\t वैदिक ज्योतिषात 27 नक्षत्र आहेत. 8 व्या ठिकाणी पुष्य नक्षत्र अतिशय शुभ व कल्याणकारी नक्षत्र आहे म्हणूनच त्याला नक्षत्रांचा सम्राट देखील म्हणतात. जेव्हा हा नक्षत्र रविवारी असतो तेव्हा या नक्षत्र जोडीने रवि पुष्य योग बनतो. या योगात ग्रहांची सर्व वाईट परिस्थिती अनुकूल आहे, ज्याचा परिणाम आपल्यासाठी नेहमीच शुभ असतो. रवी पुष्य योग रवी पुष्य नक्षत्र योग म्हणूनही ओळखला जातो.'}</Text>
                <View style={styles.TableContainer}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                    <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
                    <Rows data={state.DataTable} textStyle={styles.TableText}/>
                    </Table>
                <Text style={styles.txt}>{'\n\t\t जर ग्रहांची स्थिती प्रतिकूल असेल किंवा चांगले मुहूर्त नसेल तर अशा परिस्थितीत रवी पुष्य योग विवाह वगळता सर्व कामांसाठी अत्यंत फायदेशीर ठरतो. या योगामध्ये सोन्याचे दागिने, मालमत्ता व वाहने इत्यादी खरेदी करणे फायद्याचे आहे. रवी पुष्य योगात नवीन व्यवसाय आणि व्यवसाय सुरू करणे देखील सर्वोत्कृष्ट असल्याचे म्हटले जाते. या व्यतिरिक्त, योगिक प्रणाली आणि मंत्र साध्य करण्यासाठी विशेषतः उपयुक्त आहे.'}</Text>
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

export default (RaviForm);