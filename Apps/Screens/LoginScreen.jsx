import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from 'expo-web-browser';
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';
WebBrowser.maybeCompleteAuthSession();


export default function LoginScreen() {

  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <Image source={require('./../../assets/images/login.jpg')}
      style={styles.imgone}
      />
    <View className="p-8">
        <Text style={styles.t1}>My Market Place </Text>
        <Text style={styles.t2}>Buy and Sell Marketplace where you can sell old goods and encash some real money</Text>
        <TouchableOpacity onPress={onPress}
         style={{ alignContent:'center', margin:100}}>
            <Text style={{marginTop:20,
            backgroundColor:'orange',marginEnd:'auto',
            marginLeft:40,borderRadius:10,fontSize:20}}>Get Started</Text>
        </TouchableOpacity>
    
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    imgone:{
        height:400,
        width:400
    },
    t1:{
        fontSize:25,
        fontWeight:'bold',
        justifyContent:'center',
        marginLeft:80,
    },t2:{
        fontSize:15,
        fontWeight:'normal',
        justifyContent:'center',
        marginLeft:10,
        marginRight:10,
        marginTop:10
    }
});
  
