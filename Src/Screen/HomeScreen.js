import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native'
import React from 'react'

const days=[...Array(24)].map((val,index)=> index + 1)

const HomeScreen = () => {
  return (
    <View style={styles.container}>

        <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({item})=>(
            <View style={styles.box}>
               <Text style={styles.text}>{item}</Text>
            </View>
        )}/>


        {/* days.map((day)=>(
                <View style={styles.box} key={day}>
                    <Text style={styles.text}>{day}</Text>
                </View>
        ))*/}


    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({

    container:{
        flex:1,
        //justifyContent:"center",
        //alignItems:"center",
        backgroundColor:"#fff",
        gap:10,
    },
    content:{
        gap:10,
    },
    column:{
        gap:10,
        padding:10,
    },
    box:{
        //width:100,
        //height:100,
        flex:1,
        aspectRatio:1,
        backgroundColor:"yellow",
        justifyContent:"center",
        alignItems:"center",
        borderColor:"#111",
        borderWidth:StyleSheet.hairlineWidth,
        borderRadius:10,
    },
    text:{
        fontSize:40,
        color:"#111"
    }

})