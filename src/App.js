import React, { useState} from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, ImageBackground, TextInput, 
TouchableOpacity} from 'react-native';

import listaFilmes from './filmes/filmes';
import Icon from 'react-native-vector-icons/MaterialIcons'

// import { Container } from './styles';

const {width: screenWidth, height: screenHeigth } = Dimensions.get('window');
const MeusFilmes = () => {

const [lista, setLista] = useState(listaFilmes)
const [background, setBackground] = useState(lista[0].img)

  return (
    <ScrollView style={styles.container}> 
        <View style={{flex: 1, height: screenHeigth}}> 
            <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
                <ImageBackground
                  source={{ uri:  background }}
                  style={styles.imgBg}
                  blurRadius={8}
                >

                <View style={styles.viewSearch}>
                  <TextInput 
                    style={styles.input}
                    placeholder="Procurar Filme"
                  />

                  <TouchableOpacity>
                    <Icon name="search" color="#fff" size={25}/>
                  </TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
           
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  imgBg:{
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
    backgroundColor: '#000'
  }
})

export default MeusFilmes;