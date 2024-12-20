import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

const MenuBox = ({menuData}) => {

  return (
    <View style={styles.menuBox}>
      {menuData?.map((item,index)=>(
        <View key={index} style={
            [styles.itemBox,
            index<3&&styles.itemBoxFirstRow,
            index%3===2&&styles.itemBoxLastColumn
            ]}>
            <Image source={item.img} style={styles.itemImage}/>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.effectContainer}>
                {item.effects.map((effect)=>(
                    <Text style={styles.effectText}>☉{effect}</Text>
                ))}
            </View>
            <Text style={styles.itemPrice}>₩{item.price}원</Text>
        </View>
      ))}
    </View>
  )
}

const styles=StyleSheet.create({
    menuBox:{
        width: "100%",
        minHeight: "10%",
        borderWidth:1,
        borderRadius:12,
        borderColor:"gray",
        flexDirection:"row",
        flexWrap: "wrap",
    },
    itemBox:{
        width:"33.33%",
        paddingVertical:"1.5%",
        borderColor:"gray",
        
        borderRightWidth: 1,
        
        alignItems:"center"
    },
    itemBoxFirstRow:{
        borderBottomWidth:1,
    },
    itemBoxLastColumn:{
        borderRightWidth:0,
    },
    itemImage:{
        width: 40,
        height: 40,
    },
    itemName:{
        fontWeight: 800,
        fontSize:16,
        paddingBottom:"3%",
    },
    effectContainer:{
        paddingRight:"8%",
        marginBottom:"3%",
        minHeight:"13%",
    },
    effectText:{
        fontSize: 12,
    },
    itemPrice:{
        color:"red",
        fontSize: 12,
        fontStyle:"italic",
        paddingHorizontal: "5%",
    },
})

export default MenuBox
