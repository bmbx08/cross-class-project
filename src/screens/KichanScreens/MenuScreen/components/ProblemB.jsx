import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProbInfo from './common/ProbInfo'
import bill from "../../../../assets/images/probB/bill.png"
import coin from "../../../../assets/images/probB/coin.png"
import ProbButton from './common/ProbButton'
import ResetButton from './common/ResetButton'
import SubmitButton from './common/SubmitButton'
import ProbResult from './common/ProbResult'

const ProblemB = ({menuData,setProbComplete}) => {
  const [totalMoney,setTotalMoney]=useState(0);
  const [userResultMsg,setUserResultMsg]=useState("");

  moneyArray=[{name:"1000원",img:bill},{name:"100원",img:coin}]

  const handleTotalMoney=(name)=>{
    if(name==="1000원"){
      setTotalMoney(totalMoney+1000);
    }
    if(name==="100원"){
      setTotalMoney(totalMoney+100);
    }
  }

  const handleSubmit= ()=> {
    if(totalMoney===1300){
      setUserResultMsg("정답");
      setProbComplete(true);
    } else{
      setUserResultMsg("오답");
    }
  }

  return (
    <View>
      <ProbInfo problem="B"/>

      <View style={styles.buttonSection}>
        {moneyArray.map((item,index)=>(
          <ProbButton prob="B" item={item} handleAnswer={handleTotalMoney} key={index}/>
        ))}
      </View>

      <View style={styles.moneySection}>
        <Text style={styles.totalMoney}>{totalMoney}</Text>
        <Text style={styles.moneyWon}>원</Text>
      </View>

      <View style={styles.smallButtonSection}>
        <ResetButton handleReset={setTotalMoney}/>
        <SubmitButton handleSubmit={handleSubmit}/>
      </View>

      {userResultMsg==="정답"&&<ProbResult result="정답"/>}
      {userResultMsg==="오답"&&<ProbResult result="오답"/>}

    </View>
  )
}

const styles=StyleSheet.create({
  buttonSection:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginBottom: "3%",
  },
  moneySection:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginBottom: 15,
  },
  totalMoney:{
    textAlign:"center",
    minWidth:"17%",
    paddingLeft:"7%",
    fontSize: 20,
    color:"green",
    fontWeight:700,
  },
  moneyWon:{
    fontSize: 20,
    width:"7%",
    textAlign:"center",
  },
  smallButtonSection:{
    flexDirection:"row",
    justifyContent:"flex-end",
    marginBottom:"5%",
  }
})

export default ProblemB
