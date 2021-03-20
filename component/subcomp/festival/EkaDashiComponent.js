import React from 'react';
import { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, StyleSheet, Alert, PanResponder, Share } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import fast from '../../../data/fast.json';
import { BannerAd } from '../../bannerAd';

const Separator = () => (
    <View style={styles.separator} />
  );

class EkaForm extends Component {

    constructor(props){
        super(props);
    }

    render(){
        
        const renderItem = ({item, index}) => {
            return(
                <View>
                <BannerAd/>
                <Card
                    title={item.name}
                    containerStyle={{borderColor:'red'}}
                >
                <Text style={{margin: 5, textAlign: 'justify'}}> {'तारीख : '+item.Date}</Text>
                <Text style={{margin: 5, textAlign: 'justify'}}> {'एकादशी उपवास सोडण्याची वेळ : \n\t'+item.end}</Text>
                <Text style={{margin: 2, textAlign: 'justify'}}> {'\t \t '+item.info}</Text>
                <Text style={{margin: 2, textAlign: 'justify'}}> {'\t \t '+item.importance}</Text>

                </Card>
                </View>
            );
        }

        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
               <FlatList  
                        data={fast.ekadashi}
                        renderItem={renderItem}
                /> 
            </ScrollView>);
    }
}

export default (EkaForm);