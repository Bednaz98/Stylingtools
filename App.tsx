import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import BasicButton from './SafariSolaceStyleTools/basicbutton';
import BasicDropdown from './SafariSolaceStyleTools/basicdropdown';
import BasicInputText from './SafariSolaceStyleTools/basicinputtext';
import BasicModal from './SafariSolaceStyleTools/basicmodal';
import BasicText, { TextType } from './SafariSolaceStyleTools/basictext';
import GetColor, { Color, Theme } from './SafariSolaceStyleTools/styleconfig';
import FlexSpacer from './SafariSolaceStyleTools/flex-spacer';
import PixelSpacer from './SafariSolaceStyleTools/pixel-spacer';
import { themeContext, ThemeContextInterface } from './SafariSolaceStyleTools/themecontext';


export default function App() {
  function GetText(){
    return (<BasicText text={'Inner Text'}/>)
  }
  const [first, setfirst] = useState();
  // how to set up a context with a provider
  const themeContextObject:ThemeContextInterface = {theme:Theme.default,setTheme:()=>{}}

  function input(){
    const [first, setfirst] = useState("");
    return(<View>
      <BasicInputText value = {first} onChangeText={setfirst}  placeholder={"example"}/>
    </View>)
  }

  function modalChild(){
    return (
    <View>
        <BasicText text={"Modal Text here"}/>
        <BasicButton title={"Modal Button Title"} onPress={()=>{}}/>
    </View>)
  }

  // function Modal(){
  //   const [first, setfirst] = useState(false);
  //   return (<View> 
  //     {BasicModal(first,setfirst,(<></>))}
  //   </View>)
  // }


  return (
    <View style={styles.container}>

      <themeContext.Provider value = { themeContextObject }>
        <View style={{flexDirection:"column", backgroundColor:GetColor(Color.SecondaryColor), alignItems:"center", justifyContent:"center"}}>
          <PixelSpacer height={10} width={10}/>
          <View style={{ backgroundColor:GetColor(Color.primaryColor) }}>
            <PixelSpacer width={300} />
            < BasicDropdown title={"GGGG"} children={modalChild()}/>
            <BasicText text={"Title"} type={TextType.Title}/>
            <BasicText text={"Header"} type={TextType.Header}/>
            <BasicText text={"General"} />
            <View style={{flexDirection:"row"}}>
                <View style={{flex:1}}>
                <PixelSpacer height={0}/>
            </View>
            <View style={{flex:5}}>
              <BasicButton onPress={()=>console.log('pressing')} title={'Button 1'}/> 
            </View>
          <FlexSpacer space={0}/>
          <View  style={{flex:5}}>
            <BasicButton onPress={()=>console.log('pressing')} title={'Button 2'}/>
          </View>
          </View>
          {input()}
          <View><BasicModal openTitle={"User Name stuff"} child = {modalChild()}/></View>
        </View>
        <PixelSpacer height={10} width={10}/>
        </View>
      </themeContext.Provider>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10
  },
});
