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
import { BannerAd } from './bannerAd';

const Separator = () => (
    <View style={styles.separator} />
  );

class TimeForm extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
            <Text style={styles.txt}>{'\n \t मुहूर्ता हे काळाच्या ज्ञानाचे एकक आहे. हे मुख्यतः शुभ कार्ये करण्यासाठी वापरले जाते. हिंदू वैदिक ज्योतिषानुसार प्रत्येक शुभ व शुभ कार्याची सुरूवात करण्यासाठी निश्चित वेळ आहे. कारण त्या विशिष्ट वेळी ग्रह आणि नक्षत्रांच्या प्रभावाद्वारे सकारात्मक उर्जा संक्रमित होते आणि शुभ परिणाम प्राप्त होतात.'}</Text>
            <Card containerStyle={styles.cardContainer}>
            <Text style={styles.instTitle}>शुभ मुहूर्त</Text>
            <Separator/>
            <View style={styles.container}>              
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:140}}
                    raised
                    icon={<MaterialCommunityIcons name="timer-sand" size={24} color="white" />}
                    title=" अभिजीत मुहूर्त"
                    onPress={()=>{navigate('अभिजीत मुहूर्त');}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:140}}
                    raised
                    icon={ <FontAwesome5 name="star-of-david" size={24} color="white" />}
                    title=" गुरुपुष्य योग"
                    onPress={()=>{navigate('गुरुपुष्य योग');}}
                    />
            </View>

            <View style={styles.container}>              
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:140}}
                    raised
                    icon={<Fontisto name="sun" size={24} color="white" />}
                    title=" रविपुष्य योग"
                    onPress={()=>{navigate('रविपुष्य योग');}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:140}}
                    raised
                    icon={<Ionicons name="ios-star-outline" size={24} color="white" />}
                    title=" अमृतसिद्धी योग"
                    onPress={()=>{navigate('अमृतसिद्धी योग');}}
                    />
            </View>

            <View style={styles.container}>              
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:140}}
                    raised
                    icon={<Octicons name="home" size={24} color="white" />}
                    title=" घरखरेदी मुहूर्त"
                    onPress={()=>{navigate('घर खरेदी मुहूर्त');}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:140}}
                    raised
                    icon={ <MaterialCommunityIcons name="car-side" size={24} color="white" />}
                    title=" वाहनखरेदी मुहूर्त"
                    onPress={()=>{navigate('वाहन खरेदी मुहूर्त');}}
                    />
            </View>

            <View style={styles.container}>              
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:140}}
                    raised
                    icon={ <MaterialCommunityIcons name="ornament" size={24} color="white" />}
                    title=" नामकरण संस्कार"
                    onPress={()=>{navigate('नामकरण संस्कार');}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:140}}
                    raised
                    icon={<FontAwesome name="cut" size={24} color="white" />}
                    title=" मुंडन संस्कार"
                    onPress={()=>{navigate('मुंडन संस्कार');}}
                    />
            </View>

            <View style={styles.container}>
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:140}}
                    raised
                    title=" "
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:140}}
                    raised
                    icon={ <FontAwesome5 name="praying-hands" size={24} color="white" />}
                    title=" सर्वार्थसिद्धी योग"
                    onPress={()=>{navigate('सर्वार्थसिद्धी योग');}}
                    />
            </View>
            </Card>
            <Text style={styles.txt}>{'\n \n \t\t मुहूर्तशास्त्र हा ज्योतिष शास्त्राचा एक भाग आहे. या मदतीने एखाद्या व्यक्तीच्या जीवनात गर्भधारणा, पुसावन, सीमंतोनयन, जातकर्मा, नामकरण, अन्नप्रशन, मुंडन किंवा चुडाकरण, उपनयन, समवर्तन, विवाह इत्यादी सोहळ्या संस्कारांसाठी शुभ मुहूर्त ज्ञान प्राप्त केले जाऊ शकते.\n\n\t\t त्याशिवाय प्रवास करणे, नवीन घर बांधणे व त्यासाठी पाया घालणे, घरात प्रवेश करणे, नवीन वाहन किंवा मालमत्ता खरेदी करणे, नवीन व्यवसाय सुरू करणे यासारख्या इतर कोणत्याही शुभ कार्यासाठी.'}</Text>
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


export default (TimeForm);