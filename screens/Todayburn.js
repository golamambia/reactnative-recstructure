import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet,ScrollView,TouchableOpacity,
    Image,Pressable
} from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import CommonLayout from "../component/CommonLayout";
import Header from "../component/Header";
import OptionInactive from "../component/OptionInactive";
import OptionActive from "../component/OptionActive";
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Todayburn =({navigation})=>{
    return(
        < CommonLayout>
        <SafeAreaView style={styles.container}>
       
        <View style={styles.header}>
        <Header navigation={() => navigation.navigate('BasicDetails')} />
        <View style={styles.header_today}>
            <Text style={styles.header_today_title}>Today</Text>
        </View>
        <View style={styles.header_right}>
        <View style={{marginRight:25}}>
        <Pressable >
                    <Image source={require("../assets/images/share2.png")} />
                </Pressable>
        </View>
        <View style={{marginRight:10}}>
        <Pressable >
        <Icon name="bell" size={25} color={COLORS.cyan}/>
                </Pressable>
        </View>
        </View>
            
        </View>
        
          
                
        <View style={styles.main_body}>
              <View style={styles.body_top}>
                <View style={styles.body_top_inner}>
                    <View style={styles.body_top_img}>
                        <Image source={require("../assets/images/run1.png")} />
                    </View>
                </View>
                </View>
                <View style={{paddingVertical:20}}>
                    <Text style={styles.burn_title}>500 of 600 cal burnt</Text>
                </View>
<View>
                <View style={styles.body_content}>
                    <View style={styles.content_inner}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/bike.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Bicycling</Text>
                    </View>
                    </View>
                    <View style={styles.inner_right}>
                    <View>
                        <Text style={styles.inner_right_title}>200 cal</Text>
                    </View>
                    <View style={styles.inner_right_img}>
                        <Image source={require("../assets/images/plus.png")} />
                    </View>
                    </View>
                   
                </View>
                <View style={styles.body_content}>
                    <View style={styles.content_inner}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/swimming.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Swimming</Text>
                    </View>
                    </View>
                    <View style={styles.inner_right}>
                    <View>
                        <Text style={styles.inner_right_title}>44 cal</Text>
                    </View>
                    <View style={styles.inner_right_img}>
                        <Image source={require("../assets/images/plus.png")} />
                    </View>
                    </View>
                   
                </View>
                <View style={styles.body_content}>
                    <View style={styles.content_inner}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/hit.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>HIIT</Text>
                    </View>
                    </View>
                    <View style={styles.inner_right}>
                    <View>
                        <Text style={styles.inner_right_title}>100 cal</Text>
                    </View>
                    <View style={styles.inner_right_img}>
                        <Image source={require("../assets/images/plus.png")} />
                    </View>
                    </View>
                   
                </View>
                <View style={styles.body_content}>
                    <View style={styles.content_inner}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/weightlifting.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Weightlifting</Text>
                    </View>
                    </View>
                    <View style={styles.inner_right}>
                    <View>
                        <Text style={styles.inner_right_title}>36 cal</Text>
                    </View>
                    <View style={styles.inner_right_img}>
                        <Image source={require("../assets/images/plus.png")} />
                    </View>
                    </View>
                   
                </View>
                <View style={styles.body_content}>
                    <View style={styles.content_inner}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/cardiovascular.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Cardiovascular exercise</Text>
                    </View>
                    </View>
                    <View style={styles.inner_right}>
                    <View>
                        <Text style={styles.inner_right_title}>100 cal</Text>
                    </View>
                    <View style={styles.inner_right_img}>
                        <Image source={require("../assets/images/plus.png")} />
                    </View>
                    </View>
                   
                </View>
                <View style={styles.body_content}>
                    <View style={styles.content_inner}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/trx.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>TRX</Text>
                    </View>
                    </View>
                    <View style={styles.inner_right}>
                    <View>
                        <Text style={styles.inner_right_title}>01 cal</Text>
                    </View>
                    <View style={styles.inner_right_img}>
                        <Image source={require("../assets/images/plus.png")} />
                    </View>
                    </View>
                   
                </View>
                <View style={styles.body_content}>
                    <View style={styles.content_inner}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/yoga.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Yoga</Text>
                    </View>
                    </View>
                    <View style={styles.inner_right}>
                    <View>
                        <Text style={styles.inner_right_title}>20 cal</Text>
                    </View>
                    <View style={styles.inner_right_img}>
                        <Image source={require("../assets/images/plus.png")} />
                    </View>
                    </View>
                   
                </View>
            

</View>


        </View>
        
    
        
        </SafeAreaView> 
        
       <View style={{flexDirection:'row',paddingTop:5}}>
       <View style={{flex:1,backgroundColor:COLORS.white,alignItems:'center',borderTopWidth:1,
       borderTopColor:COLORS.cilver}}>
           <TouchableOpacity style={{paddingVertical: SIZES.margin2,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,}}>
               <Text style={{color:COLORS.cyan,fontSize: SIZES.h4,}} >Insight </Text>
           </TouchableOpacity>
       </View>
       <View style={{flex:1,backgroundColor:COLORS.cyan,alignItems:'center'}}>
           <TouchableOpacity style={{paddingVertical: SIZES.margin2,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.cyan,}} onPress={() => navigation.navigate('Todaycaleat')}>
               <Text style={{color:COLORS.white,fontSize: SIZES.h4,}} >Home </Text>
           </TouchableOpacity>
       </View>
       </View>
        </CommonLayout>
        );
    };

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:SIZES.padding,
        },
   
  
 header: {
    flexDirection:'row',
    flex:1
 },
  header_today: {
   flexDirection:'row',
   marginTop:45,
   marginLeft:15
 },
 header_today_title: {
 textAlign:'center',
 fontSize:20,
 color:COLORS.cyan,
 fontWeight:'700'
 },
 header_right: {
   marginTop:52,
   flexDirection:'row',
   justifyContent:'flex-end',
   flex:1
 },
 
 main_body: {
    padding:30,
    borderRadius:10,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.cilver,
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
      elevation: 3,
      flex:3,
      

  },
  body_top:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:-85
  },
  body_top_inner:{
      borderRadius:120/2,
      borderColor:COLORS.cyan,
      width:120,height:120,
      backgroundColor:Colors.white,
      justifyContent:'center',
      alignItems:'center',
      shadowColor:COLORS.white,
      shadowOffset: {
                  width: 0,
                  height: 2,
              },
      shadowOpacity:0.2,
      shadowRadius:3.5,
      elevation:8
  },
   body_top_img:{
      borderRadius:100/2,
      borderColor:COLORS.cyan,
      width:100,height:100,
      backgroundColor:'aliceblue',
      justifyContent:'center',
      alignItems:'center',
      padding:10
  },
  burn_title:{
      color:COLORS.cilver,
      textAlign:'center',
      fontSize:SIZES.h3
  },
 

  body_content:{
    flexDirection:'row',
    marginBottom:20
    },
content_inner:{
    flexDirection:'row',
    flex:2
    },
inner_left:{
    marginRight:15,
    marginTop:3
    },
inner_left_img:{
    width:19,
    resizeMode:'cover'
    },
left_title:{
    color:COLORS.cyan,
    fontSize:SIZES.h5
    },
inner_right:{
    flexDirection:'row',
    justifyContent:'flex-end',
   flex:1
},
inner_right_title:{
    color:COLORS.gray1,
    fontSize:SIZES.h5
    },
inner_right_img:{
    marginLeft:20,
    marginTop:5
    }   

   
})

export default Todayburn;