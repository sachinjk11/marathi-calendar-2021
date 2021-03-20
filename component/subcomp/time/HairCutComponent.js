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

class HairForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            HeadTable: ['तारीख', 'सुरवातीचा काळ', 'शेवटचा काळ'],
            DataTable: time.haircut.map(function(item) {return [item.Date,item.start,item.end];})
          }
    }
    
    render(){
        const state = this.state;
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
            <BannerAd/>
                <Text style={styles.txt}>{' \t\t पूर्वीच्या जीवनातील कर्जापासून मुक्त होण्यासाठी, जन्मसिद्ध हक्क कापला गेला आहे, अशी मुंडनविषयी एक हिंदू धार्मिक मान्यता आहे. वैज्ञानिक मते, जेव्हा बाळ आईच्या पोटात असते तेव्हा तिच्या डोक्यावर असलेल्या केसांमधे बरेच हानिकारक बॅक्टेरिया असतात, जे धुल्यानंतरही काढता येत नाहीत, म्हणून बाळाच्या जन्माच्या 1 वर्षाच्या आत एकदा ते केस मुंडणे आवश्यक आहे. केले पाहिजे.'}</Text>
                <View style={styles.TableContainer}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                    <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
                    <Rows data={state.DataTable} textStyle={styles.TableText}/>
                    </Table>
                <Text style={styles.txt}>{'\n\t\t मुंडन सोहळ्यासाठी मुलास शुभ मुहूर्तात सादर करणे फायदेशीर आणि फायदेशीर आहे, म्हणून मुंडनशी संबंधित मुहूर्तासाठी एखाद्या विद्वान ज्योतिषाचा सल्ला घ्या किंवा त्यांच्या एकूण परंपरेनुसार मुलांना मुंडण करा.'}</Text>
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

export default (HairForm);