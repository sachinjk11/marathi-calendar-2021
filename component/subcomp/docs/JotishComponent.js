import React from 'react';
import { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, StyleSheet, Alert, PanResponder, Share } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import { BannerAd } from '../../bannerAd';

const Separator = () => (
    <View style={styles.separator} />
  );

class JotishForm extends Component {

    constructor(props){
        super(props);
    }

    render(){
        var flag = this.props.route.params.name;
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
            <BannerAd/>
            {
            (flag == 'MSH') ? 
                <View>
                <Text style={styles.txt}>{'\t\tमेष राशि भविष्य 2021 अनुसार, या वर्षी शनी देव मेष राशीच्या दशम भावात विराजमान राहतील. वर्षाच्या मध्या पासून शेवट पर्यंत गुरु बृहस्पतीचे संक्रमण ही तुमच्या राशीच्या एकादश भावात होईल सोबतच, छाया ग्रह राहू तुमच्या दुसऱ्या भावात तर, केतू राशीच्या अष्टम भावाला प्रभावित करेल. लाल ग्रह मंगळ वर्षाच्या सुरवाती मध्ये तुमच्याच राशीमध्ये प्रवेश करेल यामुळे तुमचा लग्न भाव सक्रिय होईल. भौतिक सुखाची देवता ही दुसऱ्या महिन्यात गुरु बृहस्पती सोबत युती केल्यानंतर, तुमच्या एकादश भावात प्रस्थान करेल.\n\n\t\tयाच्या परिणाम स्वरूप, जिथे तुम्हाला आपल्या करिअर मध्ये चांगल्या फळांची प्राप्ती होईल तेच तुम्हाला आपल्या आर्थिक जीवनात काही आव्हानांचा सामना ही करावा लागू शकतो. कार्य क्षेत्रात तुम्हाला सुरवाती मध्ये प्रतिकूल फळ प्राप्त होतील परंतु, मध्य जानेवारी पासून फेब्रुवारीच्या मध्य वेळेत नोकरी पेशा जातकांसाठी विशेष सावधान राहणारी असेल कारण, या वेळी तुमच्या कर्म भावाचा स्वामी शनिदेव अस्त राहील तथापि, व्यापार करणाऱ्या जातकांसाठी वेळ उत्तम राहील. त्यांना ही तुमच्या कमाई ला वाढवण्यासाठी बऱ्याच संधी प्राप्त होईल सोबतच, परदेशातून धन अर्जित करण्यासाठी हे अपार यश मिळेल.\n\n\t\tया सोबतच, या वर्षी दशम भावात शनिदेव आणि प्रथम मध्ये बसलेल्या मंगळाच्या कारणाने तुमच्या आई-वडिलांच्या आरोग्य संबंधित समस्या त्रास देतील ज्यावर तुमचे बरेच धन खर्च ही होईल. विशेषतः सप्टेंबर पासून नोव्हेंबरच्या मध्ये तुम्हाला आर्थिक तंगीचा सामना करावा लागेल. विद्यार्थ्यांसाठी मिश्रित परिणाम घेऊन येईल कारण, त्यांच्यासाठी जानेवारी, मार्च, मे, जुलै आणि नोव्हेंबरचा वेळ खूप अनुकूल राहील तसेच फेब्रुवारी, एप्रिल, जून, ऑगस्ट, सप्टेंबर आणि डिसेंबरचा वेळ तुमच्यासाठी सतर्कता ठेवणारा सिद्ध होईल.कौटुंबिक जीवनात शनी आणि मंगळ तुम्हाला काही आव्हाने देऊ शकतात यामुळे तुम्हाला पारिवारिक सहयोग मिळण्यात समस्या येतील तथापि, सप्टेंबर पासून नोव्हेंबर पर्यंतचा वेळ कौटुंबिक जीवनासाठी उत्तम राहील. जर तुम्ही विवाहित आहेत तर, तुमच्यासाठी शनीची दृष्टी चिंतेचे कारण बनेल यामुळे तुम्ही आणि तुमच्या जीवनसाथी मध्ये वाद वाढू शकतो.\n\n\t\tसंतान पक्षासाठी वेळ चांगली राहील आणि त्यांना एप्रिल ते सप्टेंबर च्या वेळात भाग्याची साथ प्राप्त होईल यामुळे ते प्रगती करण्यात यशस्वी होतील. जर तुम्ही कुणावर प्रेम करतात तर, तुमच्यासाठी वर्ष 2021 खूप चांगला राहणार आहे शक्यता आहे की, तुम्ही आपल्या प्रेमी सोबत प्रेम विवाह करू शकतात. आरोग्य जीवनाला पाहिल्यास त्यात तुम्हाला सामान्य पेक्षा उत्तम परिणाम मिळतील तथापि, थकवा आणि लहान मोठी समस्या कायम राहील.'}</Text>
                </View>
                : (flag == 'VSB') ? 
                <View>
                <Text style={styles.txt}>{'\t\tवृषभ राशि भविष्य 2021 च्या अनुसार, या पूर्ण वर्षात शनी देव तुमच्या नवम भावात विराजमान राहतील. या सोबतच, राहू-केतू क्रमशः तुमच्या प्रथम आणि सप्तम भावात उपस्थित राहतील तसेच, सुरवाती मध्ये लाल ग्रह मंगळ ही तुमच्या द्वादश भावात होईल जे 2 जून पासून 6 सप्टेंबर च्या मध्य आपले संक्रमण करून तुमच्या तिसऱ्या आणि चौथ्या भावाला प्रभावित करेल.\n\n\t\tएप्रिल च्या आधी सप्ताहाच्या मध्य सप्टेंबर मध्ये गुरु बृहस्पतीचे संक्रमण होण्याने तुमच्या चतुर्थ भावावर गुरुची दृष्टी राहील.या सोबतच, 4 मे ते 28 मे मध्ये शुक्राचे संक्रमण तुमच्याच राशीमध्ये होईल यामुळे तुमचा प्रथम भाव प्रभावित होईल. या सोबतच, सूर्य आणि बुध ही या वर्षी आपल्या संक्रमण करून तुमच्या राशीच्या वेगवेगळ्या भावाला सक्रिय करतील यामुळे तुम्हाला आपल्या करिअर मध्ये भाग्याची साथ मिळेल.\n\n\t\tतुमची पद उन्नती आणि प्रगती होईल. व्यापारी जातकांना ही आपल्या मेहनतीच्या अनुसार चांगल्या फळांची प्राप्ती होईल तथापि, आर्थिक जीवनात परिणाम थोडे कमी चांगले प्राप्त होतील कारण, या वर्षी तुम्हाला काही आर्थिक तंगी होऊ शकते तथापि, अधून-मधून तुमच्या मध्ये धन प्राप्तीचे वेगवेगळे योग निर्धारित होत राहतील ज्याचा लाभ घेऊन तुम्ही आपली आर्थिक तंगी दूर करू शकतात. ग्रहांची स्थिती इशारा करते की, ही वेळ थोडा मेहनतीचा आहे.\n\n\t\tवर्षाच्या सुरवाती मध्ये शिक्षणात चांगले फळ प्राप्त करण्यासाठी खूप मेहनत करावी लागेल परंतु, हळू-हळू स्थिती मध्ये परिवर्तन दिसेल यामुळे विद्यार्थ्यांना परदेशात जाऊन अभ्यास करण्याची संधी प्राप्त होईल. कौटुंबिक सुखात कमतरता येईल परंतु, कुटुंबात काही मंगल कार्यक्रम आयोजन होण्याने वातावरण आनंदी दिसेल. राशि भविष्य 2021 च्या अनुसार या वर्षी वैवाहिक जीवनात साथी सोबत काही समस्या होऊ शकतात यामुळे तुमचा मानसिक तणाव वाढेल.\n\n\t\tजर तुम्ही कुणावर प्रेम करतात तर, तुमच्यासाठी वेळ चांगली आहे. या वेळात तुम्हाला प्रियकराचे भरपूर सहयोग प्राप्त होण्याने कार्य क्षेत्रात उत्तम प्रदर्शन करण्याची संधी मिळेल. आरोग्याच्या दृष्टीने ही वेळ थोडी चिंताजनक आहे कारण, राहू-केतूची उपस्थिती तुम्हाला आरोग्य हानी देऊ शकते.'}</Text>
                </View>
                : (flag == 'MTN') ? 
                <View>
                <Text style={styles.txt}>{'\t\tमिथुन राशि भविष्य 2021 च्या अनुसार, या वर्षाच्या सुरवातीमध्ये तुमच्या राशीच्या दशम भावाचा स्वामी, गुरु बृहस्पती वर्षाच्या पहिल्या महिन्यात तुमच्या अष्टम भावात विराजमान राहतील या नंतर, ते संक्रमण करून एप्रिल च्या महिन्यात तुमच्या नवम भावाला प्रभावित करतील. शनी देव ही उभा पूर्ण वर्षात तुमच्या अष्टम भावात विराजमान राहणार आहे. तसेच छाया ग्रह केतू आणि राहू क्रमशः तुमच्या सहाव्या आणि दुसऱ्या भावात विराजमान राहणार आहे. लाल ग्रह मंगळ ही 6 सप्टेंबर पासून 5 डिसेंबर मध्ये तुमच्या चतुर्थ आणि पंचम भावाला सक्रिय करेल जेव्हा ही वर्षाच्या सुरवाती मध्ये सूर्य आणि बुध तुमच्या सप्तम भावातून जाऊन तुमच्या राशीच्या वेगवेगळ्या भावाला वर्ष भर प्रभावित करेल.\n\n\t\tअश्यात या ग्रहांच्या या स्थितींमुळे तुम्हाला आपल्या करिअर मध्ये खूप चढ-उताराचा सामना करावा लागू शकतो. या काळात नोकरी पेशा जातकांना आपल्या सहकर्मींची मदत न मिळाल्याने चिंता होईल यामुळे त्यांची पद उन्नती होईल परंतु, यासाठी थोडी वाट पहावी लागेल. व्यापारी जातकांसाठी वेळ चांगली राहील परंतु, काही मोठी देवाण घेवाण करत्या वेळी विशेष सावधान राहा.\n\n\t\tआर्थिक जीवनात वर्षाची सुरवात खूप चांगली राहील अधून-मधून तुम्हाला काही निराशा येऊ शकते कारण, तुम्हाला धन हानी होण्याचे योग बनतांना दिसेल. विद्यार्थ्यांना या वर्षी मेहनत आणि प्रयत्ना नंतर यश मिळेल. अश्यात तुम्ही आपल्या धैर्यावर केंद्रित करून फक्त मेहनत करा. राशि भविष्य 2021 च्या अनुसार पारिवारिक जीवनात घरातील सर्व सदस्यांचे सहयोग मिळेल. जर तुम्ही विवाहित आहेत तर, जीवनसाथी आणि तुमच्या मध्ये आप-आपल्या गोष्टींना घेऊन अहंकाराचा टकराव होईल.\n\n\t\tसंतानला मिळते-जुळते परिणाम मिळतील परंतु, प्रेमी जातकांच्या जीवनात या वर्षी काही महत्वाचे बदल दिसतील. आरोग्यासाठी हे वर्ष चिंताजनक आहे अश्यात तुम्हाला आपल्या आरोग्याच्या प्रति विशेष सावधानी ठेवली पाहिजे.'}</Text>
                </View>
                : (flag == 'KRK') ? 
                <View>
                <Text style={styles.txt}>{'\t\tकर्क राशि भविष्य 2021 च्या अनुसार, वर्षाच्या सुरवाती मध्ये लाल ग्रह मंगळ तुमच्या दशम भावात असेल. या नंतर ते आपले संक्रमण करून तुमच्या एकादश आणि द्वादश मधून जाऊन तुमच्याच राशीमध्ये विराजमान होईल या सोबतच, कर्मफळ दाता शनी तुमच्या सप्तम भावात वर्षभर विराजमान राहून तुमच्या चौथ्या भावावर दृष्टी टाकतील. तसेच राहू-केतू ही या पूर्ण वर्षात क्रमशः तुमच्या पाचव्या आणि अकराव्या भावाला सक्रिय करतील. या सोबतच, वर्षाच्या सुरवाती मध्ये सूर्य आणि बुध तुमच्या षष्ठ भावात आपले संक्रमण करून आपल्या वेगवेगळ्या भावांना प्रभावित करतील.\n\n\t\tया मध्येच शुक्राची संक्रमण स्थिती ही तुमच्या राशीला या पूर्ण वर्षात प्रभावित करणारी आहे. अश्यात तुम्हाला आपल्या करिअर मध्ये पुढे जाण्याची संधी मिळेल यामुळे तुमची प्रगती होईल आणि तुमची पद उन्नती शक्य आहे. राशि भविष्य 2021 हे संकेत देते की, व्यापारी जातकांसाठी हे वर्ष गुंतवणुकी साठी यशस्वी राहणार आहे. आर्थिक जीवनात काही समस्या असेल परंतु, तुम्ही आपल्या मेहनतीच्या बळावर प्रत्येक समस्यांचे निराकरण कराल.\n\n\t\tविद्यार्थ्यांसाठी वर्ष चांगले आहे. या वर्षी त्यांना आपल्या प्रत्येक विषयात समजण्यात यश मिळेल. कौटुंबिक जीवनात मिळते-जुळते परिणाम मिळतील. यामुळे जिथे तुम्हाला कुटुंबाचे सहयोग मिळेल तेच तुमच्या काही निर्णयामुळे कुटुंबातील लोक तुमच्या विरुद्ध उभे असलेले दिसतील.\n\n\t\tवैवाहिक जातकाचे आपल्या जीवनसाथी सोबत काही कारणास्तव वाद होऊ शकतो. या काळात तुमचा जीवन साथी धर्म-कर्माच्या कार्यात अधिक वेळ घालवतांना दिसेल. दांपत्य जीवनात स्थिती चांगली पाहिली जाऊ शकत नाही तसेच जर तुम्ही कुणावर प्रेम करतात तर, तुमच्यासाठी हे वर्ष खूप चांगला राहणारा आहे. आरोग्याच्या बाबतीत तुम्हाला काही सावधान राहण्याचा सल्ला जातो.'}</Text>
                </View>
                :  (flag == 'SNH') ? 
                <View>
                <Text style={styles.txt}>{'\t\tसिंह राशि भविष्य 2021 च्या अनुसार, या पूर्ण वर्षात छाया ग्रह राहू-केतू क्रमशः तुमच्या दहाव्या आणि चौथ्या भावाला प्रभावित करतील. या सोबतच शनी देव देखील तुमच्या सहाव्या भावात विराजमान राहतील. सुरवाती मध्ये शनी देव गुरु बृहस्पती सोबत तुमच्या सहाव्या भावात असण्याने एक वेगळ्या युतीचे निर्माण करतील. या काळात मंगळ तुमच्या नवम भावातून जाऊन तुम्हाला भाग्याची साथ देतील आणि नंतर एप्रिल पासून जुलै पर्यंत तुमच्या एकादश आणि द्वादश भावात प्रवेश करतील.\n\n\t\tया काळात तुम्ही आपल्या करिअर मध्ये शत्रूंपासून सावध राहण्याची आवश्यकता असेल तथापि, तुम्ही त्यांच्यावर हावी राहाल ज्यामुळे सर्व कार्य वेळेवर पूर्ण करण्यात यश मिळेल. आर्थिक जीवनात खर्च वाढतील ज्याचा प्रभाव तुमच्या आर्थिक जीवनात पडतांना दिसेल. राशि भविष्य 2021 संकेत देतो की, विद्यार्थ्यांना परीक्षेत यश मिळवण्यासाठी आधीपेक्षा जास्त मेहनत करावी लागेल. परदेशात जाण्याची इच्छा ठेवणाऱ्या विद्यार्थ्यांना या वर्षी खूप प्रयत्न केल्यानंतरच यश मिळण्याची शक्यता राहील.\n\n\t\tपारिवारिक जीवन प्रतिकूल राहील यामुळे तुमच्या कुटुंबातील तणावात वृद्धी होईल. वैवाहिक जातकांना आपल्या जीवनसाथीची साथ मिळेल आणि ते आपल्या पेशावर जीवनाला उत्तम बनवण्यासाठी यशस्वी होतील. दांपत्य जातकांसाठी संतानचे आरोग्य समस्या उत्पन्न करू शकते. प्रेमी जातकांना प्रियतमच्या नाराजगीचा सामना करावा लागू शकतो.\n\n\t\tआपण अद्याप अविवाहित असल्यास, आपण कदाचित एखाद्या खास व्यक्तीस भेटू शकता. यावर्षी आपल्या आरोग्याबद्दल आपण सावधगिरी बाळगणे आवश्यक आहे, अन्यथा मूत्रपिंडाशी संबंधित कोणताही रोगाची समस्या उद्भवू शकते .'}</Text>
                </View>
                :  (flag == 'KAN') ? 
                <View>
                <Text style={styles.txt}>{'\t\tकन्या राशि भविष्य 2021 च्या अनुसार, संपूर्ण वर्ष शनि आपल्या राशीच्या पाचव्या घरात विराजमान असेल. यासह, मंगल देव आपल्या आठव्या घराच्या माध्यमातून आपल्या नवव्या आणि दहाव्या घरात प्रभाव पाडेल. तसेच राहू आणि केतु अनुक्रमे नवव्या आणि तिसर्‍या घरात उपस्थित असतील. गुरु बृहस्पति आपल्या पाचव्या घराच्या माध्यमातून सहाव्या घरात संक्रमण करेल आणि त्याचा तुम्हाला सर्वात जास्त परिणाम दिसेल.\n\n\t\tअशा परिस्थितीत आपणास आपल्या कारकीर्दीत बर्‍याच चढउतारांचा सामना करावा लागू शकतो. राशि भविष्य 2021 च्या अनुसार या कालावधीत नोकरीपेशा जातकांचे स्थान परिवर्तन होण्याची संभवना आहे. जे जातक व्यवसाय करतात त्यांच्यासाठी ही वेळ चांगली असेल. तथापि, व्यवसाय भागीदारांना प्रत्येक करार काळजीपूर्वक करण्याची आवश्यकता असेल. ग्रह आणि नक्षत्रांच्या संयोगामुळे आर्थिक जीवन अडचणीचे ठरू शकते, परंतु राहूची शुभ दृष्टि आपल्याला शुभ फल देईल आणि धन मिळवण्याच्या बर्‍याच संधी देईल.\n\n\t\tविद्यार्थ्यांना शिक्षणामध्ये अधिक परिश्रम करावे लागतील, तरच तुम्हाला कठोर परिश्रमानुसार यश मिळेल. कौटुंबिक जीवनात कुटुंबातील सदस्यांचा सहयोग न मिळाल्यामुळे तणाव वाढेल. विवाहित व्यक्तींना जोडीदाराच्या मदतीने कार्यक्षेत्रात फायदा मिळेल, परंतु मुलाचे आरोग्य समस्या देऊ शकतो. जर तुम्ही आतापर्यंत अविवाहित असाल तर तुमच्यासाठी ही चांगली वेळ आहे, परंतु यावर्षी प्रेमात पडलेल्या लोकांच्या जीवनात बरेच विशेष बदल घडतील. आरोग्याच्या बाबतीत हे वर्ष चांगले राहील. धैर्य आणि सामर्थ्य वाढल्यामुळे आरोग्याशी संबंधित कोणतीही मोठी समस्या तुम्हाला मिळणार नाही.'}</Text>
                </View>
                : (flag == 'TL') ? 
                <View>
                <Text style={styles.txt}>{'\t\tतुळ राशि भविष्य 2021 अनुसार राहु आणि केतु यावर्षी तुमच्या राशीच्या अनुक्रमे आठव्या आणि दुसर्‍या घरात उपस्थिति असतील. यासह, शनिदेव वर्षभर आपल्या चौथ्या घरात विराजमान असून ते आपल्या दहाव्या घराला देखील दृष्टि करेल. सुरुवातीला मंगळ तुमच्या सातव्या घरात असेल, जो तुमच्या आठव्या, नवव्या आणि दहाव्या घरात सर्वात जास्त परिणाम करेल.\n\n\t\tयासह शुक्र, गुरु देव, सूर्य आणि बुध यांचे संक्रमण यावर्षी तुमच्या राशीच्या वेगवेगळ्या घरात होणार आहे, यामुळे तुम्हाला तुमच्या करिअरमध्ये अनुकूल परिणाम मिळेल. आपली उन्नती होईल, तसेच व्यवसाय करणार्‍यांनाही काही गुप्त स्त्रोतामुळे फायदा होईल. आर्थिक जीवनात धन संपत्ती मिळेल, ज्यामुळे आपण आपले पैसे धार्मिक कार्यात खर्च करताना दिसाल. राशि भविष्य 2021 च्या अनुसार, या वर्षाचा मध्य विद्यार्थ्यांसाठी सर्वोत्तम असेल. यावेळी विद्यार्थी उत्कृष्ट कामगिरी देण्यात यशस्वी होतील. कौटुंबिक जीवनात तुम्हाला काही कारणास्तव घराबाहेर पडावे लागू शकते.\n\n\t\tअशा परिस्थितीत तुम्हाला कुटुंबातील सदस्यांची कमतरता जाणवेल. आपण विवाहित असल्यास, आपल्या जीवनसाथीच्या प्रेमाची कमतरता आपल्याला सतत त्रास देईल. मुलांसाठी वेळ चांगला असेल. मुलाच्या चांगल्या भविष्यासाठी आपण आणि आपला जीवनसाथी एक मोठा निर्णय घेऊ शकतात.\n\n\t\tजर आपण खरोखर एखाद्यावर प्रेम करत असाल तर हे वर्ष आपल्यासाठी चांगले असेल. तुमचे प्रेम होण्याचे योग तयार होताना दिसत आहे. तथापि, आपल्याला आरोग्याच्या बाबतीत विशेष काळजी घ्यावी लागेल, अन्यथा राहू-केतू आपल्याला काही मोठे आजार देऊ शकतात.'}</Text>
                </View>
                : (flag == 'VC') ? 
                <View>
                <Text style={styles.txt}>{'\t\tवृश्चिक राशि भविष्य 2021 अनुसार शनिदेव वर्षभर आपल्या तिसर्‍या घरात विराजमान राहतील. तसेच राहू-केतु वर्षभर आपल्या अनुक्रमे सातव्या आणि पहिल्या घराला प्रभावित करेल. यासह, वर्ष 2021 मध्ये मंगळ, शुक्र, बुध, गुरु बृहस्पति आणि सूर्य देव देखील तुम्हाला वेगवेगळ्या प्रकारे प्रभावित करताना दिसतील.\n\n\t\tयामुळे करिअरमध्ये तुम्हाला बरीच आव्हानांना सामोरे जावे लागू शकते. यावेळी तुम्हाला कार्यक्षेत्रातअधिक कष्ट करावे लागतील. तसेच व्यवसाय करणार्‍यांना यात्रेचा फायदा होईल. आर्थिक परिस्थिती चांगली असेल, परंतु अचानक झालेल्या खर्चामुळे तुम्हाला त्रास होऊ शकतो. परीक्षेची तयारी करणाऱ्या विद्यार्थ्यांना चांगला निकाल मिळेल. या प्रकरणात, आपले कठोर परिश्रम सुरू ठेवा.\n\n\t\tराशि भविष्य 2021 चे चिन्ह असे आहे की यावर्षी आपल्याला कौटुंबिक आनंद मिळेल. विवाहित लोकांना त्यांच्या जोडीदाराच्या विरोधाचा सामना करावा लागू शकतो. आपल्या मुलाची बाजू चांगली असेल आणि त्यांच्याशी संबंध सुधारतील. प्रेमा असणाऱ्या व्यक्तींनी एकमेकांवर अधिक विश्वास दर्शविला पाहिजे, अन्यथा संबंध खंडित होऊ शकतात. आपल्या आरोग्यावर नजर टाकल्यास, यावर्षी अचानक होणारा आजार आपल्याला काही विशेष समस्या देऊ शकतो.'}</Text>
                </View>
                : (flag == 'DN') ? 
                <View>
                <Text style={styles.txt}>{'\t\tधनु राशि भविष्य 2021 अनुसार, यावर्षी शनि आपल्या चतुर्थ भावला दृष्टी करत शनि आपल्या दुसर्‍या द्वितीय भावमध्ये विराजमान असेल. याव्यतिरिक्त, छाया ग्रह केतू आपल्या द्वादश घराला आणि राहू आपल्या सहाव्या घराला प्रभावित करेल. सुरुवातीला, गुरु बृहस्पती आपल्या राशीच्या दुसर्‍या घरात असून तो शनीबरोबर युती बनवेल. मंगळ ग्रह एप्रिलच्या मध्यला आपल्या पाचव्या , सहाव्या आणि सातव्या घरात संक्रमण करेल.\n\n\t\tअशा परिस्थितीत, या सर्व मुख्य ग्रहांच्या स्थितिमुळे आपल्या सहकाऱ्यांच्या मदतीने आपल्याला करियरमध्ये चांगले परिणाम मिळतील. हे वर्ष व्यावसायिकांसाठीही चांगले ठरणार आहे. व्यावसायिकांना व्यवसायात अफाट यश मिळेल, ज्यामुळे त्याची आर्थिक स्थिती मजबूत होईल. यावर्षी विद्यार्थ्यांना शिक्षणामध्ये यश मिळेल.\n\n\t\tतसेच, आपल्याला परदेशात अभ्यास करण्याची संधी देखील मिळेल. राशि भविष्य 2021 कौटुंबिक आनंदात वाढ दाखवत आहे. लहान भावंडे तुम्हाला आधार देताना दिसतील. विवाहिक जीवनात जीवनसाथीचे आरोग्याच्या अयोग्यतेमुळे त्यांच्या जीवनात तणाव वाढेल, परंतु यावर्षी आपण आपल्या मुलांबद्दल अधिक सतर्क असल्याचे दिसाल.\n\n\t\tप्रेमी जातकांसाठी वर्ष खूप भावनिक असेल, परंतु आपल्या प्रिय व्यक्तीबरोबर तुम्हाला रोमँटिक यात्रा करण्याची संधी मिळेल. तथापि, आरोग्यामध्ये आपल्याला नेहमीपेक्षा कमी चांगले फळ मिळतील, म्हणून तापासारख्या किरकोळ समस्यांपासून स्वत: ला वाचवा.'}</Text>
                </View>
                : (flag == 'MKR') ? 
                <View>
                <Text style={styles.txt}>{'\t\tमकर राशि भविष्य 2021 अनुसार, आपल्या राशीचे स्वामी शनि या वर्षी पूर्ण वर्षभर आपल्याच राशीमध्ये विराजमान राहतील. तसेच, गुरु सुरुवातीस आपल्या स्वतःच्या राशीमध्ये विराजमान असून, शनीशी युती करेल आणि नंतर आपल्या दुसर्‍या घरात प्रस्थान करेल. राहू आपल्या पाचव्या घरात आणि केतू आपल्या अकराव्या घरात संक्रमण करेल. यावर्षी मंगळ आपल्या चौथ्या घरामधून जात असताना आपल्या भिन्न भावांवर प्रभाव पाडेल. जानेवारीच्या शेवटी, शुक्र संक्रमण करताना आपल्या स्वत: च्या राशीमध्ये विराजमान असेल.\n\n\t\tअशा परिस्थितीत या ग्रहांच्या स्थानामुळे यावर्षी केलेल्या परिश्रमानुसार तुम्हाला तुमच्या कारकीर्दीत चांगले परिणाम मिळतील. हे वर्ष व्यापाऱ्यांसाठीसुद्धा शुभ असेल. आर्थिक जीवनात सुरुवातीच्या काही महिन्यांमध्ये समस्या असतील, परंतु नंतर पैशांची देवाण-घेवाण आपले आर्थिक संकट दूर करेल. विद्यार्थ्यांना चांगले निकाल मिळतील, जे त्यांना त्यांचे सर्व विषय समजून घेण्यात मदत करेल.\n\n\t\tराशि भविष्य 2021 कौटुंबिक जीवनात आईला आरोग्याच्या समस्या दर्शवित आहे. या काळात घरात आनंदाचा अभाव राहील. आपण विवाहित लोकांबद्दल बोलल्यास, आपल्याला आपले विवाहिक जीवन कंटाळवाणे वाटेल. तथापि, आपल्याला नंतर आपल्या जीवन साथीदारासह बाहेर जाण्याची संधी मिळेल. प्रेमींना त्यांच्या आयुष्यात चांगले परिणाम मिळण्याची शक्यता आहे. तसेच आरोग्याच्या बाबतीतही हे वर्ष तुमच्यासाठी चांगले ठरेल.'}</Text>
                </View>
                : (flag == 'KM') ? 
                <View>
                <Text style={styles.txt}>{'\t\tकुंभ राशि भविष्य 2021 च्या अनुसार, वर्षभर शनि आपल्या राशीच्या द्वादश घरात विराजमान असणार आहे. यासह, गुरु बृहस्पति देखील एप्रिल पर्यंत आपल्या राशीत राहील आणि त्यानंतर, आपल्या द्वादश घरात स्थानांतर करत शनीसोबत युती करेल. राहू तुमच्या चौथ्या घरावर आणि केतू दहाव्या घरावर प्रभाव पाडेल. महिन्याच्या सुरूवातीस शुक्र आपल्या अकराव्या घरात असेल आणि आपल्या इच्छा पूर्ण करेल.\n\n\t\tअशा परिस्थितीत या मुख्य ग्रहांच्या प्रभावानुसार आपल्याला वर्षभर फळ मिळेल. करियरसाठी हे वर्ष फार चांगले ठरणार नाही. विशेषतः मध्यंतरानंतरचा काळ आपल्यासाठी प्रतिकूल असेल. व्यावसायिकांना कार्यक्षेत्राच्या संबंधात प्रवासाला जाण्याची संधी मिळेल. राशि भविष्य 2021 च्या अनुसार, आर्थिक जीवनामध्ये खर्चात अचानक वाढ होईल आणि यामुळे काही काळ आर्थिक संकट ओढवेल.\n\n\t\tविद्यार्थ्यांसाठी वेळ चांगला आहे, त्यांना त्यांच्या परिश्रमानुसार फळ मिळेल. ग्रहांच्या संक्रमणामुळे कौटुंबिक जीवनात कामाच्या व्यस्ततेमुळे घरातील सदस्यांच्या प्रेमाची भावना कमी होईल. आपण विवाहित असल्यास, आपल्याला आपल्या जीवन साथीदाराच्या मदतीने लाभ मिळेल. मुलासाठीही हे वर्ष चांगले ठरणार आहे. जर आपणास एखाद्यावर प्रेम करत असाल तर या वर्षी आपली प्रिय व्यक्ती खूप रोमँटिक असेल. तथापि, यावर्षी आरोग्य कमकुवत होऊ शकते. अशा परिस्थितीत गॅस, एसिडिटी, सांधेदुखी, थंडी, सर्दी यासारख्या समस्यांपासून स्वत: चे रक्षण करा.'}</Text>
                </View>
                :(flag == 'MN') ? 
                <View>
                <Text style={styles.txt}>{'\t\tमीन राशि भविष्य 2021 अनुसार यावर्षी शनि आपल्या अकराव्या घरात विराजमान असून ते आपल्या पाचव्या घराला दृष्टी करेल. यासह, वर्षाच्या सुरूवातीस मंगळ देव आपल्या दुसर्‍या घरात असतील आणि नंतर आपल्या तिसर्‍या आणि चौथ्या घरात संक्रमण करतील. त्याचवेळी, गुरु बृहस्पति आपल्या राशीच्या अकराव्या घरात विराजमान असेल आणि आपल्या पाचव्या घराला दृष्टी करेल. छाया ग्रह राहू आपल्या तिसर्‍या घराला तर, केतु आपले नववे घर सक्रिय करेल. अशा परिस्थितीत तुम्हाला तुमच्या करिअरमध्ये चांगले फळ मिळेल.\n\n\t\tयावेळी तुमचे करिअर वेगवान होताना दिसेल. तसेच व्यापाऱ्यांनाही त्यांचा व्यवसाय वाढविण्याची संधी मिळेल. आर्थिक जीवनात उत्पन्नाच्या बर्‍याच संधी असतील परंतु त्याबरोबर तुमचा खर्चही वाढेल. यावर्षी विद्यार्थ्यांना त्यांचे विषय समजण्यात अडचणी येऊ शकतात.\n\n\t\tकौटुंबिक जीवन चांगले राहील. राशि भविष्य 2021 च्या अनुसार तुम्हाला तुमच्या वडिलोपार्जित मालमत्तेचा लाभ मिळेल. विवाहिक जातकांचा आपल्या जोडीदाराशी संबंध चांगले होतील आणि प्रेम आणि आपुलकी वाढेल. मुलाच्या बाजूने त्यांच्या अभ्यासामध्ये अधिक चांगले करण्याची संधी देखील मिळेल.\n\n\t\tजर आपणास एखाद्यावर प्रेम करत असाल तर आपण यावर्षी आपल्या प्रेमीबरोबर एक मोठा निर्णय घेऊ शकता. प्रेमीबरोबर तुमचे प्रेम विवाह असल्याची शक्यता आहे. हे वर्ष आरोग्यासाठी विशेष चांगले राहील.'}</Text>
                </View>
                : <Text></Text>
            }
            <BannerAd/>
            </ScrollView>);
    }
}

const styles = StyleSheet.create({
    separator: {
        marginVertical: 5,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      txt : {
        textAlign:"justify",
        margin:5
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


export default (JotishForm);