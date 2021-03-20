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

class SidhiForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            HeadTable: ['तारीख', 'सुरवातीचा काळ', 'शेवटचा काळ'],
            DataTable: time.sidhi.map(function(item) {return [item.date,item.start,item.end];})
          }
    }
    
    render(){
        const state = this.state;
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
            <BannerAd/>
                <Text style={styles.txt}>{' \t\t सर्वार्थ सिद्धि योग अत्यंत शुभ योग मानला जातो. हे तीन शब्दांनी बनलेले आहे. सर्वार्थ म्हणजे सर्व, सिद्धि म्हणजे प्राप्ति आणि संयोजन म्हणजे योग, म्हणून प्रत्येक मार्गाने लाभ मिळवणे सर्वार्थ सिद्धि योग असे म्हणतात. हा एक शुभ योग आहे, म्हणून या योगामध्ये केल्या गेलेल्या कार्याचा परिणाम अपेक्षित होतो.'}</Text>
                <View style={styles.TableContainer}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                    <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
                    <Rows data={state.DataTable} textStyle={styles.TableText}/>
                    </Table>
                <Text style={styles.txt}>{'\n\t\t सर्वार्थ सिद्धि योग निश्चित युद्ध आणि निश्चित नक्षत्र यांच्या संयोजनाने बनविला जातो. हा योग विशेषतः शुभ कार्याच्या सुरूवातीस फायदेशीर ठरतो आणि सर्व इच्छा पूर्ण करतो. युद्ध आणि नक्षत्रांचे हे योगायोग कायम असतात. सर्व शुभ कामांच्या शुभारंभासाठी सर्वार्थ सिद्धि योग योग्य वेळ आहे.'}</Text>
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

export default (SidhiForm);