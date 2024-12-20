import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import babyPlant from "../../../../../assets/images/babyplant.png"
import babyPlant2 from "../../../../../assets/images/babyplant2.png"

const ProbInfo = ({problem}) => {
  return (
    <View style={styles.infoContainer}>
      <Image source={babyPlant2} style={styles.babyPlant}/>
      <Text style={styles.infoText}>
        {problem==="A"&&"다음 중 스트레스 해소 효과가 있는 차가 아닌 것은?"}
        {problem==="B"&&"복순씨가 만원을 들고 가장 비싼 차를 주문했을 때, 받아야 할 거스름 돈은?"}
      </Text>
    </View>
  )
}

const styles= StyleSheet.create({
  infoContainer:{
    flexDirection:"row",
    marginBottom: "4%",
  },
  babyPlant:{
    width:20,
    height: 20,
    marginRight:"2%",
  },
  infoText:{
    width:"92%",
    flexWrap:"wrap",
  },
})

export default ProbInfo