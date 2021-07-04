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

const TodayMeditation =({navigation})=>{
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
                        <Image source={require("../assets/images/meditation.png")} />
                    </View>
                </View>
                </View>
                <View style={{paddingVertical:30}}>
                    <Text style={styles.burn_title}>Meditation/yoga(30mins)</Text>
                </View>


        </View>
        <View style={{
           height:'auto',
            marginTop:60,
    borderRadius:10,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.cilver,
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
      elevation: 3,flex:0.4}}>
           
            <View style={{flex:1,flexDirection:'row',marginTop:15}}>
            <View style={{flex:2,flexDirection:'row',marginLeft:20}}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/mouth.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Breath</Text>
                    </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                    <View>
                        <Text style={styles.inner_right_title}>20 mins</Text>
                    </View>
                    <View style={styles.inner_right_img}>
                        <Image source={require("../assets/images/plus.png")} />
                    </View>
                    </View>
                   
                </View>
                <View style={{flex:1,flexDirection:'row',marginTop:15}}>
            <View style={{flex:2,flexDirection:'row',marginLeft:20}}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/yoga.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Yoga</Text>
                    </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                    <View>
                        <Text style={styles.inner_right_title}>10 mins</Text>
                    </View>
                    <View style={styles.inner_right_img}>
                        <Image source={require("../assets/images/plus.png")} />
                    </View>
                    </View>
                   
                </View>
                
                   

        </View>
      <View style={{flex:0.4}}>

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
        backgroundColor: COLORS.cyan,}} onPress={() => navigation.navigate('Habits')}>
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
        position:'relative',
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
     top:200,
    width:'100%',
     position:'absolute',
    alignSelf:'center',
    padding:10,
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
      flex:2,
      

  },
  body_top:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:-70
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

export default TodayMeditation;