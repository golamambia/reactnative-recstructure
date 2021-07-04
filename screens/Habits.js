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

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        padding:SIZES.padding,
        position:'relative',
        },
   
  
 header: {
    flexDirection:'row',
    
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

inner_right_title:{
    color:COLORS.gray1,
    fontSize:SIZES.h5
    },
inner_right_img:{
    marginLeft:20,
    marginTop:5
    },   
daily_remind:{
    marginTop:10,marginLeft:25
},
daily_remind_title:{
    color:COLORS.cyan,fontSize:SIZES.h2,fontWeight:'700',paddingVertical:15
},
   box:{
    // height:'auto',
          
    padding: SIZES.body2,
    borderRadius:SIZES.radius,
backgroundColor: COLORS.white,
shadowColor: COLORS.cilver,
shadowOffset: {
   width: 0,
   height: 1,
},
shadowOpacity: 0.18,
shadowRadius: 1.00,
elevation: 4,
   },
   box_inner_row:{
    flex:4,flexDirection:'row'
   },
   box_inner:{
    flex:1,flexDirection:'row',
   },
   add_new_main:{
    borderTopWidth:0.8,
    borderTopColor:COLORS.cilver
   },
   add_new_inner:{
    flexDirection:'row',
   marginTop:15
    },
    add_new_title:{
    marginLeft:5,
    color:COLORS.gray,
    fontSize:SIZES.margin2
    }

})
const TodayMeditation =({navigation})=>{
    return(
        <CommonLayout>
        <SafeAreaView style={styles.container}>
       
        <View style={[styles.header,{position:'relative'}]}>
        <Header navigation={() => navigation.navigate('TodayMeditation')} />
        <View style={{position:'absolute',marginLeft:40,top:45}}>
            <Text style={styles.header_today_title}>Habits</Text>
        </View>
       
            
        </View>
        <ScrollView>
          <View style={styles.daily_remind}>
              <Text style={styles.daily_remind_title}>Daily reminders</Text>
          </View>
        <View style={[styles.box,
           {flex:5,height:235}]}>
           <ScrollView >
            <View style={[styles.box_inner,{marginBottom:10}]}>
            <View style={styles.box_inner_row}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/glass.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Drink Water</Text>
                    </View>
                    </View>
                    <View >
                    
                        <Text style={styles.inner_right_title}>EDIT</Text>
                   
                   
                    </View>
                   
                </View>
                <View style={[styles.box_inner,{marginBottom:10}]}>
            <View style={styles.box_inner_row}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/track_meal.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Track meal</Text>
                    </View>
                    </View>
                    <View >
                    
                        <Text style={styles.inner_right_title}>EDIT</Text>
                   
                   
                    </View>
                   
                </View>
                <View style={[styles.box_inner,{marginBottom:10}]}>
            <View style={styles.box_inner_row}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/gratitude.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Practice Gratitude</Text>
                    </View>
                    </View>
                    <View >
                    
                        <Text style={styles.inner_right_title}>EDIT</Text>
                   
                   
                    </View>
                   
                </View>
                <View style={[styles.box_inner,{marginBottom:10}]}>
            <View style={styles.box_inner_row}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/mouth.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Deep Breath</Text>
                    </View>
                    </View>
                    <View >
                    
                        <Text style={styles.inner_right_title}>EDIT</Text>
                   
                   
                    </View>
                   
                </View>
                <View style={[styles.box_inner,{marginBottom:10}]}>
            <View style={styles.box_inner_row}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/time_move.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Time to Move</Text>
                    </View>
                    </View>
                    <View >
                    
                        <Text style={styles.inner_right_title}>EDIT</Text>
                   
                   
                    </View>
                   
                </View>
                      

           
                </ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('Strength')}>
            <View style={styles.add_new_main}>
                <View style={styles.add_new_inner}>
                <Icon name="plus-circle" size={18} color={COLORS.green}/>
                    <Text style={styles.add_new_title}>Add New</Text>
                </View>
            </View>
            </TouchableOpacity>

        </View>


        <View style={{marginLeft:25}}>
              <Text style={styles.daily_remind_title}>Weekly reminders</Text>
          </View>
          <View style={[styles.box,
           {flex:2}]}>
           
           <ScrollView>
            <View style={[styles.box_inner,{marginBottom:10}]}>
            <View style={styles.box_inner_row}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/weight_machine.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Weight Measurements</Text>
                    </View>
                    </View>
                    <View >
                    
                        <Text style={styles.inner_right_title}>EDIT</Text>
                   
                   
                    </View>
                   
                </View>
                <View style={[styles.box_inner,{marginBottom:10}]}>
            <View style={styles.box_inner_row}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/camera.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Transformation snaps</Text>
                    </View>
                    </View>
                    <View >
                    
                        <Text style={styles.inner_right_title}>EDIT</Text>
                   
                   
                    </View>
                   
                </View>
           
                </ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('WaterReminder')}>
            <View style={styles.add_new_main}>
                <View style={styles.add_new_inner}>
                <Icon name="plus-circle" size={18} color={COLORS.green}/>
                    <Text style={styles.add_new_title}>Add New</Text>
                </View>
            </View>
                
            </TouchableOpacity>     

        </View>    
       
        <View style={{marginLeft:25}}>
              <Text style={styles.daily_remind_title}>Monthly Reminders</Text>
          </View>
          <View style={[styles.box,
           {flex:2}]}>
           
           <ScrollView>
            <View style={[styles.box_inner,{marginBottom:10}]}>
            <View style={styles.box_inner_row}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/inbody.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Session With Inbody 570</Text>
                    </View>
                    </View>
                    <View >
                    
                        <Text style={styles.inner_right_title}>SET</Text>
                   
                   
                    </View>
                   
                </View>
                <View style={[styles.box_inner,{marginBottom:10}]}>
            <View style={styles.box_inner_row}>
                        <View style={styles.inner_left}>
                        <Image style={styles.inner_left_img} source={require("../assets/images/gift.png")} />
                        </View>
                        <View>
                        <Text style={styles.left_title}>Check Rewards Collected</Text>
                    </View>
                    </View>
                    <View >
                    
                        <Text style={styles.inner_right_title}>SET</Text>
                   
                   
                    </View>
                   
                </View>
           
                </ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('Fitness')}>
            <View style={styles.add_new_main}>
                <View style={styles.add_new_inner}>
                <Icon name="plus-circle" size={18} color={COLORS.green}/>
                    <Text style={styles.add_new_title}>Add New</Text>
                </View>
            </View>
                
                </TouchableOpacity>   

        </View> 
      
<View style={{flex:1,paddingVertical:10,flexDirection:'row',marginLeft:25}}>
        <View style={{flexDirection:'row'}}>
            <View>
           
              <Text style={{color:COLORS.cyan,fontSize:SIZES.h2,fontWeight:'700',}}>Personalize your reminders</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Trending')}>
              <View style={{marginLeft:50,marginTop:8}} >
                        <Image source={require("../assets/images/plus.png")} />
                    </View>
              </TouchableOpacity>
       
          </View>
          </View>
          </ScrollView>
        </SafeAreaView> 
        
       
        </CommonLayout>
        );
    };


export default TodayMeditation;