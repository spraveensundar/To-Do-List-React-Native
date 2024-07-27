import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ListingItems = () => {

    const[text,setText]=useState("");
    const[txt,setTxt]=useState([]);

    function textInputHandler(text){
        setText(text)
        
    }

    function addTextInput(){
        setTxt((currentText)=>[...currentText,text])     
        setText('');   
    }

  return (

    <>

    <View>
        <Text className="text-3xl text-center mt-10 text-neutral-900 font-semibold">Listing Items</Text>
    </View>
    <View className="flex-row justify-between items-center mx-10 mt-4 mb-8">

        <TextInput 
         value={text}
         onChangeText={textInputHandler}
         placeholder='Enter the text...' 
         className="border-2 flex-1 rounded-l-md border-red-400 text-black text-xl"/>
        
        <TouchableOpacity onPress={addTextInput} className="bg-red-500 p-3 rounded-r-md">
            <Text className="text-xl text-white">Add</Text>
        </TouchableOpacity>

    </View>

       {
        txt.map((list,index)=> <View className="mt-4 mx-10 bg-red-400 p-4 rounded-md" key={index}><Text className="text-xl text-white">{list}</Text></View>)
       }
    </>
  )
}

export default ListingItems;