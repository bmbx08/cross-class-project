import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProbButton from './common/ProbButton'
import ProbInfo from './common/ProbInfo';
import ProbResult from './common/ProbResult';

const ProblemA = ({menuData,setProbComplete}) => {
  const [userResultMsg,setUserResultMsg]=useState("");

  const handleAnswer=(item)=>{
    if(item==="오미자차"){
      setUserResultMsg("정답");
      setProbComplete(true);
    } else{
      setUserResultMsg("오답");
    }
  }

  return (
    <View style={styles.problemBox}>
      <ProbInfo problem="A"/>

      <View style={styles.buttonSection}>
        <ProbButton prob="A" item={menuData[3]} handleAnswer={handleAnswer}/>
        <ProbButton prob="A" item={menuData[1]} handleAnswer={handleAnswer}/>
        <ProbButton prob="A" item={menuData[5]} handleAnswer={handleAnswer}/>
      </View>

      
      
      {userResultMsg==="정답"&&<ProbResult result="정답"/>}
      {userResultMsg==="오답"&&<ProbResult result="오답"/>}
    </View>
  )
}

const styles=StyleSheet.create({
  problemBox:{
    marginBottom:20,
  },
  buttonSection:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    // marginBottom: "3%",
    minHeight: "25%",
  },
})

export default ProblemA
