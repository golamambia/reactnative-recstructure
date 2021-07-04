import React, { useState } from 'react';
import { View,  SafeAreaView, TextInput, StyleSheet,  ScrollView } from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import CommonLayout from "../component/CommonLayout";
import Icon from 'react-native-vector-icons/AntDesign';
import { RadioButton, Switch, Text, TouchableRipple } from "react-native-paper";
const Row = ({ title }) => (
    <View style={styles.row}>
        <View><Text style={styles.textRow}>{title}</Text></View>
        <View><Icon name="pluscircle" color={COLORS.cyan} size={24} /></View>
    </View>
)
const WaterReminder = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [checked, setChecked] = useState('first');
    const [checked2, setChecked2] = useState('four');
    return (
        <CommonLayout>
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.headerCon}>
                        <Text style={styles.headerText}>Get reminded to drink water</Text>
                        <Text style={{fontSize:SIZES.padding2,color:COLORS.cilver}}>This reminder will help you to meet your daily hydration goal</Text>
                        </View>
                   <View style={{marginVertical:10}}>
                   <Text style={{fontSize:SIZES.h4,color:COLORS.gray}}>
  From
  <Text style={{fontWeight: "bold",color:COLORS.cyan}}> 9:00 AM</Text> to
  <Text style={{fontWeight: "bold",color:COLORS.cyan}}> 10:00 PM</Text>
</Text>
                   </View>

                    <View style={styles.box}>
                        <View style={styles.box_inner}>

                    <View style={styles.inner_one}>
                  
        <View style={styles.radio_inline}>
        <RadioButton 
          value="first" color={COLORS.cyan}
          status={ checked === 'first' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('first')}
        />
         <Text style={styles.radio_text}>
                    Remind me every
                    </Text>
                    </View>
                    </View>
                    <View style={styles.inner_two}>
                      <Text style={[styles.radio_right_text,{color:COLORS.cyan}]}> 1 Hour</Text> 
                    </View>

                        </View>

                        <View style={styles.box_inner}>

<View style={styles.inner_one}>

<View style={styles.radio_inline}>
<RadioButton 
value="second" color={COLORS.cyan}
status={ checked === 'second' ? 'checked' : 'unchecked' }
onPress={() => setChecked('second')}
/>
<Text style={styles.radio_text}>
Remind me 
</Text>
</View>
</View>
<View style={styles.inner_two}>
  <Text style={[styles.radio_right_text,{color:COLORS.gray}]}> 3 Times</Text> 
</View>



    </View>



                    </View>

                    <View style={styles.box_two}>
                    <View style={styles.box_inner}>

<View style={styles.inner_one}>

<View style={styles.radio_inline}>
<RadioButton 
value="three" color={COLORS.cyan}
status={ checked2 === 'three' ? 'checked' : 'unchecked' }
onPress={() => setChecked2('three')}
/>
<Text style={styles.radio_text}>
Remind me once every
</Text>
</View>
</View>
<View style={styles.inner_two}>
  <Text style={[styles.radio_right_text,{color:COLORS.gray}]}> 7 AM</Text> 
</View>



    </View>
                        <View style={styles.box_inner}>

                    <View style={styles.inner_one}>
                  
        <View style={styles.radio_inline}>
        <RadioButton 
          value="four" color={COLORS.cyan}
          status={ checked2 === 'four' ? 'checked' : 'unchecked' }
          onPress={() => setChecked2('four')}
        />
         <Text style={styles.radio_text}>
         Remind me once every
                    </Text>
                    </View>
                    </View>
                    <View style={styles.inner_two}>
                      <Text style={[styles.radio_right_text,{color:COLORS.cyan}]}> Saturday</Text> 
                    </View>

                        </View>

                   



                    </View>


                </View>
                <View style={styles.footer}>
                    <BottonCommon handleSubmit={() => navigation.navigate('Overview')} label="Update" />
                </View>
            </SafeAreaView>
        </CommonLayout>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 10.5,
    },
     container:{ 
       marginTop: 90,
        padding: SIZES.padding,
         flex: 1 
        },
    box: {
        height:120,
       backgroundColor: COLORS.white,
        borderRadius:12,
        shadowColor:COLORS.cilver,
        shadowOpacity:0.18,
        shadowRadius:1,
        shadowOffset:{
            height:0,
            width:1
        },
        elevation:4,
        marginTop:15,
        paddingVertical: SIZES.padding

        
        },
        box_two: {
            height:120,
          
            marginTop:15,
            paddingVertical: SIZES.padding
    
            
            },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: SIZES.padding
    },
    headerText: {
        fontSize: SIZES.h4,
        color: COLORS.cyan,
        fontWeight:'700'
    },
    textRow: {
        fontSize: SIZES.h4,
        color: COLORS.gray1
    },
    footer: {
        flex: 1.5,
        justifyContent: "center"
    },
    headerCon: {
        paddingBottom: SIZES.padding
    },
    box_inner:{
        flexDirection:'row',
        flex:1,
        
        marginHorizontal:15,
        justifyContent:'space-between'
    },
    inner_one:{flex:2},
    radio_inline:{flexDirection:'row'},
    radio_text:{
        color:COLORS.gray,
        fontSize:SIZES.h5,
        marginTop:6
    },
    inner_two:{
        flex:1,
        marginRight:15
    },
    radio_right_text:{
        textAlign:'right',
        
        fontSize:SIZES.h5,
        marginTop:6
    },
})

export default WaterReminder;