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

const Todaycaleat =({navigation})=>{
    return(
        < CommonLayout>
        <SafeAreaView style={styles.container}>
       
        <View style={styles.header}>
        <Header navigation={() => navigation.navigate('Todayburn')} />
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
        <Icon name="dots-vertical" size={30} color={COLORS.cyan}/>
                </Pressable>
        </View>
        </View>
            
        </View>
        
          
                
        <View style={styles.main_body}>
              <View style={styles.body_top}>
                <View style={styles.body_top_inner}>
                    <View style={styles.body_top_img}>
                       <Text style={{color:COLORS.white,fontSize:SIZES.h2,fontWeight:'700',textAlign:'center'}}>2000 </Text>
                       <Text style={{color:COLORS.cilver,fontSize:SIZES.front,textAlign:'center'}}>cal left</Text>
                    </View>
                </View>
                </View>
                <View style={{paddingVertical:20}}>
                    <Text style={styles.burn_title}>600 of 2600 cal eaten</Text>
                </View>
<View>
                <View style={styles.body_content}>
                    <View style={styles.content_inner}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/camera2.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Breakfast</Text>
                    </View>
                    </View>
                    <View style={styles.inner_right}>
                    <View>
                        <Text style={styles.inner_right_title}>0 of 600 cal</Text>
                    </View>
                    <View style={styles.inner_right_img}>
                        <Image source={require("../assets/images/plus.png")} />
                    </View>
                    </View>
                   
                </View>
                <View style={styles.body_content}>
                    <View style={styles.content_inner}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/camera2.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Morning snack</Text>
                    </View>
                    </View>
                    <View style={styles.inner_right}>
                    <View>
                        <Text style={styles.inner_right_title}>70 of 261 cal</Text>
                    </View>
                    <View style={styles.inner_right_img}>
                        <Image source={require("../assets/images/plus.png")} />
                    </View>
                    </View>
                   
                </View>
                <View style={styles.body_content}>
                    <View style={styles.content_inner}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/camera2.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Lunch</Text>
                    </View>
                    </View>
                    <View style={styles.inner_right}>
                    <View>
                        <Text style={styles.inner_right_title}>500 of 697 cal</Text>
                    </View>
                    <View style={styles.inner_right_img}>
                        <Image source={require("../assets/images/plus.png")} />
                    </View>
                    </View>
                   
                </View>
                <View style={styles.body_content}>
                    <View style={styles.content_inner}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/camera2.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Evening snack</Text>
                    </View>
                    </View>
                    <View style={styles.inner_right}>
                    <View>
                        <Text style={styles.inner_right_title}>30 of 261 cal</Text>
                    </View>
                    <View style={styles.inner_right_img}>
                        <Image source={require("../assets/images/plus.png")} />
                    </View>
                    </View>
                   
                </View>
                <View style={styles.body_content}>
                    <View style={styles.content_inner}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/camera2.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Dinner</Text>
                    </View>
                    </View>
                    <View style={styles.inner_right}>
                    <View>
                        <Text style={styles.inner_right_title}>0 of 697 cal</Text>
                    </View>
                    <View style={styles.inner_right_img}>
                        <Image source={require("../assets/images/plus.png")} />
                    </View>
                    </View>
                   
                </View>
               
              
            

</View>


        </View>
        
        <View style={{
           marginLeft:15,
           marginRight:15,
            flexDirection:'row',
            marginVertical:20,
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
      flex:0.5,height:'auto'}}>
            <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:2,flexDirection:'row'}}>
                        <View >
                        <Image source={require("../assets/images/man.png")} />
                        </View>
                        <View>
                        <Text style={{color:COLORS.cyan}}>Add Your Ratings</Text>
                        <Text style={{color:COLORS.cilver,fontSize:10}}>Share your feedback & help us improve</Text>
                    </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row',marginRight:5}}>
                    
                    <View style={{flexDirection:'row',justifyContent:'center',paddingVertical:10}}>
                    <Text style={{color:COLORS.gray1,fontSize:20}}><Icon name="minus" size={20} color={COLORS.gray1}/></Text>
                    <Icon name="star" size={20} color={COLORS.cyan}/>
                    <Icon name="star" size={20} color={COLORS.cyan}/>
                    <Icon name="star" size={20} color={COLORS.cyan}/>
                    <Icon name="star" size={20} color={COLORS.cyan}/>
                    <Icon name="star-outline" size={20} />
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
        backgroundColor: COLORS.cyan,}} onPress={() => navigation.navigate('TodayMeditation')}>
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
    flex:1.5
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
      marginTop:-90
  },
  body_top_inner:{
      borderRadius:130/2,
      borderColor:COLORS.cyan,
      width:130,height:130,
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
      borderRadius:110/2,
      borderColor:COLORS.cyan,
      width:110,height:110,
      backgroundColor:COLORS.cyan,
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
    flex:1
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

export default Todaycaleat;