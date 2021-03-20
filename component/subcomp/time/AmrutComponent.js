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

class AmrutForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            HeadTable: ['तारीख', 'सुरवातीचा काळ', 'शेवटचा काळ'],
            DataTable: time.amrut.map(function(item) {return [item.date,item.start,item.end];})
          }
    }
    
    render(){
        const state = this.state;
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
            <BannerAd/>
                <Text style={styles.txt}>{' \t\t वैदिक ज्योतिषानुसार अमृत सिद्धि योग अत्यंत शुभ योग मानला जातो. असे म्हणतात की या योगामध्ये केलेली सर्व कामे पूर्णपणे यशस्वी आहेत, म्हणूनच सर्व शुभ कार्यासाठी या योगास शुभ काळ म्हणून प्राधान्य दिले जाते. या योगामध्ये कोणतीही नवीन कामे सुरू करणे देखील शुभ मानले जाते. जसे व्यापार संबंधित करार, नोकरीसाठी अर्ज, जमीन, वाहन व सोन्याची खरेदी, परकीय चलन इ.'}</Text>
                <View style={styles.TableContainer}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                    <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
                    <Rows data={state.DataTable} textStyle={styles.TableText}/>
                    </Table>
                <Text style={styles.txt}>{'\n\t\t '}</Text>
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