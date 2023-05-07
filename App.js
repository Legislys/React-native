import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Keyboard, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Task from './components/Task.js'

export default function App() {
  const [task, setTask] = useState('')
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask('')
  }
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Tytuł taska</Text>
        {
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <Task text={item} />
              </TouchableOpacity>
            )
          })
        }
      </View>

      <KeyboardAvoidingView style={styles.writeTaskWrapper} >
        <TextInput style={styles.input} placeholder={'Write a task!'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {}
})
