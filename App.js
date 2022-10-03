import { Button, StyleSheet, Text, TextInput,TouchableOpacity, View} from 'react-native'
import Constants from 'expo-constants'
import { useState } from 'react'
//import {Picker} from 'react-native-picker'

export default function App() {

  const [Height, setHeight] = useState(0)
  const [Weight, setWeight] = useState(0)
  const [bmi, setbmi] = useState(" ")
  const [heightUnit, setheightUnit] = useState("Centimeters")
  const [weightUnit, setweightUnit] = useState("Kilogram")
 

  function cal_bmi(lbs, ins)
{
   let h2 = (ins) * (ins)
   let bmi = (lbs)/h2 * 703
   let f_bmi = Math.floor(bmi)
   let diff  = bmi - f_bmi
   diff = diff * 10
   diff = Math.round(diff)
   if (diff == 10)
   {
      f_bmi += 1
      diff   = 0
   }
   bmi = f_bmi + "." + diff
   return bmi
}

function convert(wei, weiType, hei, heiType){
    var weCh = wei
    var heCh = hei
    if(isNaN(weCh) || weCh <=0){
    
  alert("Enter Valid Value For -> Weight") 
  return "Not Valid Input"
    }
    else if(isNaN(heCh) || heCh <=0){
    
  alert("Enter Valid Value For -> Height")
  return "Not Valid Input"
    }
    else{
    if(weiType == "Kilogram"){
        weCh = wei * 2.20462
    }
    if(heiType == "Feet.Inch"){
        heCh = (parseInt(hei)*12)+((hei - parseInt(hei))*10);
    }
    if(heiType == "Centimeters"){
        heCh = hei/2.54
    }
    return cal_bmi(weCh,heCh)}
}


  return (
    <View style={styles.container}>
    <Text style={styles.title}>Body Mass Index Calculator</Text>

    <View style={[{maxHeight: 500, width: "100%"}]}>
    <Text style={styles.text}>Enter Height</Text>

    <View style={[styles.inpV,{flexDirection: "row"}]}>
      <TextInput
        style={[styles.inpo,{flex:1}]}
        placeholder={heightUnit} 
        keyboardType="numeric"
        onChangeText={(text) => {
          setHeight(parseFloat(text))
        }}>
      </TextInput>

      {/* Tried to implement picker unsucessfully for conversion menu
      <Picker style={[styles.selector,{width: 50}]} selectedValue={heightUnit}
        onValueChange={(itemValue, itemIndex) => setheightUnit(itemValue)}>
        <Picker.Index label="cm" value="cm" />
        <Picker.Index label="Feet.Inch" value="Feet.Inch" />
      </Picker>
      */}
      
    </View>
    <Text style={styles.text}>Weight</Text>
    <View style={[styles.inpV,{flexDirection: "row"}]}>
      <TextInput
      keyboardType="numeric"
        style={[styles.inpo,{flex:1}]}
        placeholder={weightUnit}
        onChangeText={(text) => {
          setWeight(parseFloat(text));
        }}
      ></TextInput>
      </View>

    </View>
<View style={[{width: "100%",flexDirection: "row",alignContent:"center", justifyContent:"center"}]}>
<TouchableOpacity
        style={[styles.submi,styles.shadow]}
        onPress={() => {
          setbmi("The BMI is = " + convert(Weight,weightUnit , Height, heightUnit));
        }}
        title="Submit"
      ><Text style={styles.text}>Calculate</Text></TouchableOpacity></View>
    <Text style={styles.text2}>{bmi}</Text>
  </View>  
)}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  shadow:{shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 5.84,

elevation: 10,},
  submi: {
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    padding: 2,
    borderWidth: 2,
    width: 100,
    textAlignment: "center",
    textAlign: "center",
    gravity: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  inpV:{
    borderBottomWidth: 2,
    borderColor:"#999",
    marginHorizontal: 15,
    marginBottom:25,
    paddingHorizontal: 8},
  inpo: {
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    top: 0,
    marginVertical: 20,
    textAlign: "center",
    },
  text: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 35,
  },
  text2: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
    lineHeight: 35,
  },
});
