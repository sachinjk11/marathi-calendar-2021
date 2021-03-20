import React from 'react';
import { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, StyleSheet, Alert, TouchableOpacity, Share } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Rate, { AndroidMarket } from 'react-native-rate';

const Separator = () => (
    <View style={styles.separator} />
  );

class DocsForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            rated: false
        }
    }

    onShare = async () => {
        try {
          const result = await Share.share({
            title:'Dixit Diet Plan',
            message: 'https://play.google.com/store/apps/details?id=healthy.brain.india.ddp',
            url : 'https://play.google.com/store/apps/details?id=healthy.brain.india.ddp'

          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
            } else {
            }
          } else if (result.action === Share.dismissedAction) {
          }
        } catch (error) {
          alert(error.message);
        }
      };

    render(){
        const { navigate } = this.props.navigation;
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
             <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>राशि भविष्य</Text>
                    <Separator/>
                    <View style={styles.buttonContainer}>              
                    <Button
                    buttonStyle={{backgroundColor: 'tomato', width:70}}
                    raised
                    icon={
                        <FontAwesome5 name="wolf-pack-battalion" size={24} color="white" />
                        }
                    title=" मेष"
                    onPress={()=>{navigate('राशि भविष्य',{ name:'MSH'});}}
                    />
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:70}}
                    raised
                    icon={
                        <MaterialCommunityIcons name="zodiac-aries" size={24} color="white" />
                        }
                    title=" वृषभ"
                    onPress={()=>{navigate('राशि भविष्य',{ name:'VSB'});}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:70}}
                    raised
                    icon={
                        <MaterialCommunityIcons name="format-pilcrow" size={24} color="white" />
                        }
                    title=" मिथुन"
                    onPress={()=>{navigate('राशि भविष्य',{ name:'MTN'});}}
                    />
                     <Button
                     buttonStyle={{backgroundColor: 'lightseagreen', width:70}}
                    raised
                    icon={
                        <MaterialCommunityIcons name="zodiac-cancer" size={24} color="white" />
                        }
                    title=" कर्क"
                    onPress={()=>{navigate('राशि भविष्य',{ name:'KRK'});}}
                    />
                    </View>

                    <View style={styles.buttonContainer}>              
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:70}}
                    raised
                    icon={
                        <FontAwesome5 name="crown" size={24} color="white" />
                        }
                    title=" सिंह"
                    onPress={()=>{navigate('राशि भविष्य',{ name:'SNH'});}}
                    />
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:70}}
                    raised
                    icon={
                        <MaterialIcons name="account-balance" size={24} color="white" />
                        }
                    title=" कन्या"
                    onPress={()=>{navigate('राशि भविष्य',{ name:'KAN'});}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:70}}
                    raised
                    icon={
                        <FontAwesome5 name="balance-scale" size={24} color="white" />
                        }
                    title=" तुळ"
                    onPress={()=>{navigate('राशि भविष्य',{ name:'TL'});}}
                    />
                     <Button
                     buttonStyle={{backgroundColor: 'lightseagreen', width:70}}
                    raised
                    icon={
                        <MaterialCommunityIcons name="jellyfish-outline" size={24} color="white" />
                        }
                    title=" वृश्चिक"
                    onPress={()=>{navigate('राशि भविष्य',{ name:'VC'});}}
                    />
                    </View>

                    <View style={styles.buttonContainer}>              
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:70}}
                    raised
                    icon={
                        <FontAwesome5 name="location-arrow" size={24} color="white" />
                        }
                    title=" धनु"
                    onPress={()=>{navigate('राशि भविष्य',{ name:'DN'});}}
                    />
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:70}}
                    raised
                    icon={
                        <MaterialCommunityIcons name="celtic-cross" size={24} color="white" />
                        }
                    title=" मकर"
                    onPress={()=>{navigate('राशि भविष्य',{ name:'MKR'});}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:70}}
                    raised
                    icon={
                        <MaterialCommunityIcons name="ornament" size={24} color="white" />
                        }
                    title=" कुंभ"
                    onPress={()=>{navigate('राशि भविष्य',{ name:'KM'});}}
                    />
                     <Button
                     buttonStyle={{backgroundColor: 'lightseagreen', width:70}}
                    raised
                    icon={
                        <FontAwesome5 name="fish" size={24} color="white" />
                        }
                    title=" मीन"
                    onPress={()=>{navigate('राशि भविष्य',{ name:'MN'});}}
                    />
                    </View>
            </Card>
            
            <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>आरती</Text>
                    <Separator/>
                    <View style={styles.buttonContainer}>              
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:90}}
                    raised
                    title="गणपतीची"
                    onPress={()=>{navigate('आरती/स्तोत्रे',{ name:'G'});}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:90}}
                    raised
                    title="दत्ताची"
                    onPress={()=>{navigate('आरती/स्तोत्रे',{ name:'D'});}}
                    />
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:90}}
                    raised
                    title="शंकराची"
                    onPress={()=>{navigate('आरती/स्तोत्रे',{ name:'S'});}}
                    />
                    </View>

                     <View style={styles.buttonContainer}>              
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:90}}
                    raised
                    title="विठोबा"
                    onPress={()=>{navigate('आरती/स्तोत्रे',{ name:'V'});}}
                    />
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:90}}
                    raised
                    title="दुर्गा देवी"
                    onPress={()=>{navigate('आरती/स्तोत्रे',{ name:'DD'});}}
                    />
                    <Button
                    buttonStyle={{backgroundColor: 'tomato', width:90}}
                    raised
                    title="गजानन महा."
                    onPress={()=>{navigate('आरती/स्तोत्रे',{ name:'GM'});}}
                    />
                 </View>
                    <View style={styles.buttonContainer}>              
                    <Button
                     buttonStyle={{backgroundColor: 'lightseagreen', width:90}}
                    raised
                    title="महालक्ष्मी"
                    onPress={()=>{navigate('आरती/स्तोत्रे',{ name:'ML'});}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:90}}
                    raised
                    title="ज्ञानराजा"
                    onPress={()=>{navigate('आरती/स्तोत्रे',{ name:'DN'});}}
                    />
                     <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:90}}
                    raised
                    title="गौरीशंकर"
                    onPress={()=>{navigate('आरती/स्तोत्रे',{ name:'GS'});}}
                    />
                    </View>
                    <View style={styles.buttonContainer}>              
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:90}}
                    raised
                    title="साईबाबा"
                    onPress={()=>{navigate('आरती/स्तोत्रे',{ name:'SB'});}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'lightseagreen', width:90}}
                    raised
                    title=" "
                    />
                     <Button
                    buttonStyle={{backgroundColor: 'tomato', width:90}}
                    raised
                    title=" "
                    />
                    </View>
            </Card>
            
            <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>स्तोत्रे</Text>
                    <Separator/>
                    <View style={styles.buttonContainer}>              
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:120}}
                    raised
                    title=" महालक्ष्म्यष्टक"
                    onPress={()=>{navigate('आरती/स्तोत्रे',{ name:'M8'});}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:120}}
                    raised
                    title="मंत्रपुष्पांजली"
                    onPress={()=>{navigate('आरती/स्तोत्रे',{ name:'MP'});}}
                    />
                    </View>

                    <View style={styles.buttonContainer}>              
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:120}}
                    raised
                    title=" घालिन लोटांगण"
                    onPress={()=>{navigate('आरती/स्तोत्रे',{ name:'GL'});}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:120}}
                    raised
                    title="संस्कार"
                    onPress={()=>{navigate('आरती/स्तोत्रे',{ name:'SS'});}}
                    />
                    </View>

                    <View style={styles.buttonContainer}>              
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', width:120}}
                    raised
                    title="गणपती स्तोत्रे"
                    onPress={()=>{navigate('आरती/स्तोत्रे',{ name:'GNS'});}}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', width:120}}
                    raised
                    title="मारुती स्तोत्रे"
                    onPress={()=>{navigate('आरती/स्तोत्रे',{ name:'MRS'});}}
                    />
                    </View>
            </Card>

            
            <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>इतर माहिती</Text>
                    <Separator/>
                    <Button
                     buttonStyle={{backgroundColor: 'lightseagreen', marginTop : 10}}
                    raised
                    title="आपल्या मित्रांना आणि कुटूंबियांना सांगा"
                    onPress={this.onShare}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato', marginTop : 10}}
                    raised
                    title="आजुन काय हवे आहे ते कमेंट्स मध्ये कळवा"
                    onPress={()=>{
                        const options = {
                          GooglePackageName:"healthybrain.marathi.calendar.2021",
                          OtherAndroidURL:"https://play.google.com/store/apps/details?id=healthybrain.marathi.calendar.2021",
                          preferredAndroidMarket: AndroidMarket.Google,
                          preferInApp:false,
                          openAppStoreIfInAppFails:true,
                          fallbackPlatformURL:"https://play.google.com/store/apps/details?id=healthybrain.marathi.calendar.2021",
                        }
                        Rate.rate(options, success=>{
                          if (success) {
                            this.setState({rated:true})
                          }
                        })
                      }}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'lightseagreen', marginTop : 10}}
                    raised
                    title="मला तुमचा अभिप्राय कळवा"
                    onPress={()=>{
                        const options = {
                          GooglePackageName:"com.healthybrain.marathi.calendar2021",
                          OtherAndroidURL:"https://play.google.com/store/apps/details?id=com.healthybrain.marathi.calendar2021",
                          preferredAndroidMarket: AndroidMarket.Google,
                          preferInApp:false,
                          openAppStoreIfInAppFails:true,
                          fallbackPlatformURL:"https://play.google.com/store/apps/details?id=com.healthybrain.marathi.calendar2021",
                        }
                        Rate.rate(options, success=>{
                          if (success) {
                            this.setState({rated:true})
                          }
                        })
                      }}
                    />
            </Card>
            </ScrollView>);
    }
}

const styles = StyleSheet.create({
    separator: {
        marginVertical: 5,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
    title:{
        fontFamily: 'monospace',
        fontSize:20,
        textAlign:"center"
    },
    text:{
        fontFamily: 'sans-serif-condensed',
        margin:10,
        textAlign:"center"
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop : 15,
        marginHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-evenly'
      },
      cardContainer:{
        borderColor:'red',
      },
      instTitle:{
          fontFamily: 'sans-serif-condensed',
          fontSize:20,
          textAlign:"center"
      }
    });

export default (DocsForm);