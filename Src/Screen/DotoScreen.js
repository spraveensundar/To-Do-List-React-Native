import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

const DotoScreen = () => {

    const[task,setTask]=useState("");

    const[tasks,setTasks]=useState([]);

    const[editTaks,setEditTaks]=useState(-1);

    const handleTaks = ()=>{

        if(task){
            if(editTaks !== -1){
                const updateTaks=[...tasks]
                updateTaks[editTaks]=task;
                setTasks(updateTaks);
                setEditTaks(-1)
            }else{
                setTasks([...tasks,task])
            }
        }  
        setTask("")
    }

    const handleRenderItem =({item, index})=>{

        return <View className="flex-row justify-between items-center mx-10 mt-4">
                <Text className="text-xl text-neutral-950">{item}</Text>
            <View className="flex-row">
                <TouchableOpacity className="p-3 rounded-md" onPress={()=> handleEditTask(index)}>
                    <Text className="text-blue-400 text-xl font-bold">Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity className="p-3 rounded-md" onPress={()=> handleDeleteTask(index)}>
                    <Text className="text-red-500 text-xl font-bold">Delete</Text>
                </TouchableOpacity>
            </View>
            </View>
        
    }

    const handleEditTask=(index)=>{
        const taskToEdit =tasks[index]
        setTask(taskToEdit)
        setEditTaks(index)
    }


    const handleDeleteTask = (index) => {

        const updatedTask = [...tasks];
        updatedTask.splice(index,1);
        setTasks(updatedTask)
    }

  return (

    <>

    <View>
        <Text className="text-3xl text-center mt-10 text-neutral-900 font-bold">DoTo List</Text>
    </View>

    <View className="flex-col justify-between items-center mx-10 mt-4 mb-8">

        <TextInput 
         placeholder='Enter task...' 
         value={task}
         onChangeText={(text)=>setTask(text)}
         className="border-2 w-full rounded-md border-gray-600 text-black text-xl"/>
        
        <TouchableOpacity  className=" bg-blue-400 p-3 rounded-md w-full mt-4" onPress={handleTaks}>
            <Text className="text-xl text-white text-center">{editTaks !== -1 ? "Update Taks":"Add Taks"}</Text>
        </TouchableOpacity>

    </View>


     <FlatList
      data={tasks}
      renderItem={handleRenderItem}
      keyExtractor={(item,index)=> index.toString()}/>

    </>
  )
}

export default DotoScreen;