import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task.js'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Tytuł taska</Text>
        <Task text='Mleko 1'/>
        <Task text='Mleko 2'/>
        <Task text='Milka 1'/>
        <Task text='Milka4' />
      </View>
    </View>
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
    flexWeight: 'boldd',
  },
  items: {
    marginTop: 30,
  },
});
