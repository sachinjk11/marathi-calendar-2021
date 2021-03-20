import React from 'react';
import { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, StyleSheet, Alert, PanResponder, Share } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Separator = () => (
    <View style={styles.separator} />
  );

class FastForm extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
            <Text style={styles.txt}>{'\t\tहिंदू धर्मात उपवास आणि उत्सव यांचे विशेष महत्त्व आहे. हिंदू धर्मानुसार, दरमहा वेगवेगळ्या तारख भगवान विष्णू, शिव, मां दुर्गा आणि गणेश यांच्यासह अनेक देवतांना समर्पित असतात, म्हणून या तारखांना उत्सव आणि उपवास करण्याचे महत्त्व आणखीनच वाढते. या पानावर आपल्याला या वर्षात येणा  विविध तारख, उत्सव आणि उपवासांची माहिती मिळेल एकादशी, अमावस्या, पौर्णिमा, संकष्टी चतुर्थी आणि प्रदोष व्रत दरमहा हिंदू धर्मात ठेवले जातात.'}</Text>
            <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>उपवास</Text>
                    <Separator/>
                    <View style={styles.container}>              
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:95}}
                    raised
                    icon={
                        <Fontisto name="flag" size={24} color="white" />
                        }
                    title=" एकादशी"
                    onPress={()=>{navigate('एकादशी');}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:95}}
                    raised
                    icon={
                        <MaterialCommunityIcons name="moon-new" size={24} color="white" />
                        }
                    title=" पौर्णिमा"
                    onPress={()=>{navigate('पौर्णिमा');}}
                    />
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:95}}
                    raised
                    icon={
                        <FontAwesome5 name="moon" size={24} color="white" />
                        }
                    title=" चतुर्थी"
                    onPress={()=>{navigate('चतुर्थी');}}
                    />
            </View>
            <View style={styles.container}>              
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:95}}
                    raised
                    icon={
                        <MaterialCommunityIcons name="leaf-maple" size={24} color="white" />
                        }
                    title=" श्रावण सोम"
                    onPress={()=>{navigate('सोमवार');}}
                    />
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:95}}
                    raised
                    icon={
                        <Ionicons name="ios-bonfire" size={24} color="white" />
                        }
                    title=" नवरात्र"
                    onPress={()=>{navigate('महत्व',{ name:'9Night'});}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:95}}
                    raised
                    icon={
                        <MaterialCommunityIcons name="moon-full" size={24} color="white" />
                        }
                    title=" अमावस्या"
                    onPress={()=>{navigate('महत्व',{ name:'Black'});}}
                    />  
                    </View>

                <View style={styles.container}>
                    <Button
                     buttonStyle={{backgroundColor: 'lightseagreen', width:95}}
                    raised
                    icon={ <FontAwesome5 name="grip-lines" size={24} color="white" />}
                    title=" महाशिव"
                    onPress={()=>{navigate('महत्व',{ name:'SHIV'});}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:95}}
                    raised
                    icon={<FontAwesome5 name="feather-alt" size={24} color="white" /> }
                    title=" कृष्णजन्म"
                    titleStyle={{ marginLeft: 10 }}
                    onPress={()=>{navigate('महत्व',{ name:'JANM'});}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'lightseagreen', width:95}}
                    raised
                    icon={ <MaterialCommunityIcons name="pot" size={24} color="white" /> }
                    title=" नागपंचमी"
                    onPress={()=>{navigate('महत्व',{ name:'NP'});}}
                    />
                </View>
            </Card>
            
            <Card containerStyle={styles.cardContainer}>
                <Text style={styles.instTitle}>दिवाळी</Text>
                <Separator/>
                <View style={styles.container}>              
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:120}}
                    raised
                    icon={
                        <MaterialCommunityIcons name="firework" size={24} color="white" />
                        }
                    title=" दिवाळी"
                    onPress={()=>{navigate('महत्व',{ name:'DWL'});}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:120}}
                    raised
                    icon={
                        <FontAwesome name="money" size={24} color="white" />
                        }
                    title=" लक्ष्मी पुजन"
                    onPress={()=>{navigate('महत्व',{ name:'DWL'});}}
                    />
                </View>
                <View style={styles.container}>  
                <Button
                     buttonStyle={{backgroundColor: 'lightseagreen', width:120}}
                    raised
                    icon={
                        <FontAwesome5 name="hands-helping" size={24} color="white" />
                        }
                    title=" भाऊबीज"
                    onPress={()=>{navigate('महत्व',{ name:'BBJ'});}}
                    />
                    <Button
                    buttonStyle={{backgroundColor: 'tomato', width:120}}
                    raised
                    icon={
                        <MaterialCommunityIcons name="cow" size={24} color="white" />
                        }
                    title=" गोवर्धन पूजा"
                    onPress={()=>{navigate('महत्व',{ name:'GP'});}}
                    />     
                </View>
            </Card>

            <Card containerStyle={styles.cardContainer}>
                <Text style={styles.instTitle}>गणेशोत्सव</Text>
                <Separator/>
                <View style={styles.container}>              
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:120}}
                    raised
                    icon={
                        <Entypo name="evernote" size={24} color="white" />
                        }
                    title=" गणेश चतुर्थी"
                    onPress={()=>{navigate('महत्व',{ name:'Ganesh'});}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:120}}
                    raised
                    icon={
                        <Entypo name="evernote" size={24} color="white" />
                        }
                    title=" अनंत चतुर्दशी"
                    onPress={()=>{navigate('महत्व',{ name:'GEND'});}}
                    />
                </View>
                <View style={styles.container}>              
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:120}}
                    raised
                    icon={
                        <MaterialCommunityIcons name="fireplace" size={24} color="white" />
                        }
                    title=" हरतालिका"
                    onPress={()=>{navigate('महत्व',{ name:'HRT'});}}
                    />
                    <Button
                    buttonStyle={{backgroundColor: 'tomato', width:120}}
                    raised
                    title=" "
                    />
            </View>
            </Card>
            
            <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>उत्सव</Text>
                    <Separator/>
                    <View style={styles.container}> 
                    <Button
                     buttonStyle={{backgroundColor: 'lightseagreen', width:120}}
                    raised
                    icon={ <MaterialCommunityIcons name="spotlight" size={24} color="white" />}
                    title=" घटस्थापना"
                    onPress={()=>{navigate('महत्व',{ name:'Pot'});}}
                    />
                    <Button
                    buttonStyle={{backgroundColor: 'tomato', width:120}}
                    raised
                    icon={<MaterialCommunityIcons name="ornament" size={24} color="white" />}
                    title=" विजयदशमी"
                    onPress={()=>{navigate('महत्व',{ name:'R1'});}}
                    />
                    </View>
                    <View style={styles.container}>                 
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:120}}
                    raised
                    icon={<MaterialCommunityIcons name="campfire" size={24} color="white" />}
                    title=" होळी"
                    onPress={()=>{navigate('महत्व',{ name:'HL'});}}
                    />
                    <Button
                    buttonStyle={{backgroundColor: 'tomato', width:120}}
                    raised
                    icon={<FontAwesome5 name="hands-helping" size={24} color="white" />}
                    title=" रक्षाबंधन"
                    onPress={()=>{navigate('महत्व',{ name:'RK'});}}
                    />
                    </View>
                    <View style={styles.container}>              
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:120}}
                    raised
                    icon={ <MaterialCommunityIcons name="star-three-points-outline" size={24} color="white" />}
                    title=" अक्षय तृतीया"
                    onPress={()=>{navigate('महत्व',{ name:'AKT'});}}
                    />
                    <Button
                    buttonStyle={{backgroundColor: 'tomato', width:120}}
                    raised
                    icon={<MaterialCommunityIcons name="flag-triangle" size={24} color="white" />}
                    title=" गुढी पाडवा"
                    onPress={()=>{navigate('महत्व',{ name:'PD'});}}
                    />
                    </View>
                    <View style={styles.container}>              
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:120}}
                    raised
                    icon={ <Entypo name="book" size={24} color="white" /> }
                    title="सरस्वती पूजा"
                    onPress={()=>{navigate('महत्व',{ name:'SRT'});}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:120}}
                    raised
                    icon={ <MaterialCommunityIcons name="transfer-right" size={24} color="white" />}
                    title="मकर संक्रात"
                    onPress={()=>{navigate('महत्व',{ name:'MK'});}}
                    />
                    </View>
            </Card>
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
    txt : {
        textAlign:"justify",
        margin:10
    },
    cardContainer:{
      borderColor:'red',
    },
    instTitle:{
        fontFamily: 'sans-serif-condensed',
        fontSize:20,
        textAlign:"center"
    },
    separator: {
        marginVertical: 5,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }
  });


export default (FastForm);