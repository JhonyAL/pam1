import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App(props) {
  const url = `https://www.themoviedb.org/t/p/original/${props.url}`

  return (
    
    <View style={styles.card_filme}>
      <Image 
          source={
            {
              uri: url
            }
          } 
          style={styles.img_geral} 
        />
      {/* <Image 
          source={{uri: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
          style={{width: '100%', height: '50%'}} 
        /> */}
        <Text style={{ color: 'red' }}>{props.titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card_filme: {
    padding: 5
  },
  img_geral:{
    width: 380,
    height: 400,
  },
});
