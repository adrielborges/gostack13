import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([
    {
      "id": "d2987d4d-f8fc-4d02-81e8-02e3e4f2f14b",
      "title": "Desafio NodeJS",
      "owner": "https://github.com/adrielborges"
    },
    {
      "id": "3d1b65ee-ae3d-468a-a774-2eb814fbee48",
      "title": "Desafio NodeJS REACT-NATIVE",
      "owner": "https://github.com/adrielborges"
    }

  ]);

  useEffect(() => {
    // api.get('projects').then(response => {
    //   console.log(response.data);
    //   setProjects(response.data);
    // })
  }, [])

  // async
  function handleAddProject() {
    // const response = await api.post('projects', {
    //   title: `Novo Projeto ${Date.now()}`,
    //   owner: 'Adriel Borges'
    // });

    // const project = response.data;

    const project = {
      title: `Novo Projeto ${Date.now()}`,
      owner: 'Adriel Borges'
    }

    setProjects([...projects, project])

  }


  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='#7159C1' />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.container}
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text
              style={styles.project}
            >
              {project.title}
            </Text>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText} >Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
      {/* <View style={styles.container} >
        {
          projects.map(project => (
            <Text
              key={project.id}
              style={styles.project}
            >
              {project.title}
            </Text>
          ))}
      </View> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',

  },

  title: {
    color: '#fff',
    fontSize: 32,
    fontFamily: "bold",
  },

  project: {
    color: '#FFF',
    fontSize: 20,
  },

  button: {
    backgroundColor: "#FFF",
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});
