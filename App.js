import { StatusBar } from 'expo-status-bar';
import Filme from './components/Filme'
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';

export default function App() {

  const [ filmes, setFilmes ] = useState(null);

  useEffect(() => {
    const headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5MTAyZTAxNzQzMWJhZGZiNDBkMDA4ZjY1NDEzNSIsInN1YiI6IjYzZWY4ZDQ2ZWE4NGM3MDA5NmVmYTE0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pX14UtP6uIfifrvNvEO0kia6o_gC5N_iydUf9sII1Fk',
      'accept': 'application/json'
    };
    axios.get('https://api.themoviedb.org/3//movie/popular?language=pt-BR', { headers })
      .then(response => setFilmes(response.data.results))
  }, [])

  return (
    <ScrollView style={styles.container}> 
      <View style={styles.a1}>
        <Text style={styles.titulo}>Filmes</Text>
        <ScrollView horizontal={true} style={styles.fundoViewHorizontal}>
          {
            filmes ? filmes.map((e) => <Filme key={e.id} url={e.backdrop_path}  titulo={e.title}/>) : <View></View>
          }
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  a1:{
    width: '100%',
    alignItems: 'center'
  },
  titulo:{
    fontSize: 30,
    fontWeight: '600',
    color: '#e33',
    marginTop: 20,
    marginBottom:5,
    textAlign: 'center'
  },
  
  
  img_geral_h:{
    width: 350,
    height: 400,
    borderRightColor: '#DDD',
    borderRightWidth: 10,
    borderStyle: 'solid'
  },
  fundoViewHorizontal:{
    width: '100%',
    height: 250,
    flexDirection: 'row',
    padding: 5
  }
});