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

class GuruForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            HeadTable: ['तारीख', 'सुरवातीचा काळ', 'शेवटचा काळ'],
            DataTable: time.guru.map(function(item) {return [item.date,item.start,item.end];})
          }
    }
    
    render(){
        const state = this.state;
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
            <BannerAd/>
                <Text style={styles.txt}>{' \t\t सिंह ज्याप्रमाणे सर्व प्राण्यांचा राजा आहे, त्याचप्रमाणे गुरु पुष्य योग देखील सर्व योगांमध्ये वर्चस्व मानला जातो. असे म्हणतात की या शुभ योगाने केलेले कार्य यशस्वी होते. म्हणूनच लोक गुरु पुष्य योगाने आपले नवीन कार्य सुरू करणे शुभ मानतात. या निमित्ताने ते आपला नवीन व्यवसाय सुरू करतात, नवीन मालमत्ता किंवा नवीन वाहन खरेदी करतात.'}</Text>
                <View style={styles.TableContainer}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                    <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
                    <Rows data={state.DataTable} textStyle={styles.TableText}/>
                    </Table>
                <Text style={styles.txt}>{'\n\t\t शास्त्रानुसार असे मानले जाते की या नक्षत्रात श्रीमंती आणि संपत्तीची देवी देवी लक्ष्मी जन्माला आली. जेव्हा पुष्य नक्षत्र गुरुवार आणि रविवारी पडतो तेव्हा त्याला अनुक्रमे गुरु पुष्यमृत योग आणि रवि पुष्यमृत योग म्हणतात. हे दोन्ही योग धनतेरस, चैत्र प्रतिपदाइतकेच शुभ आहेत. ग्रहांच्या विरोधाभासी स्थिती असूनही हा योग खूप शक्तिशाली आहे. त्याच्या प्रभावाखाली सर्व दुष्परिणाम दूर होतात पण असे म्हणतात की या योगामध्ये लग्नासारखे शुभ कार्य करू नका. '}</Text>
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

export default (GuruForm);