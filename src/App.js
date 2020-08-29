import React, { useState, useRef } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, ImageBackground, TextInput, TouchableOpacity, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel'

import listaFilmes from './filmes/filmes';
import Icon from 'react-native-vector-icons/MaterialIcons'

// import { Container } from './styles';

const {width: screenWidth, height: screenHeigth } = Dimensions.get('window');
const MeusFilmes = () => {

const carouselRef = useRef(null);
const [lista, setLista] = useState(listaFilmes);
const [background, setBackground] = useState(lista[0].img);
const [activeIndex, setActiveIndex] = useState(0)
const _renderItem = ({item, index}) => {
  return (
    <View>
      <TouchableOpacity>
        <Image 
            source={{uri: item.img}}
            style={styles.carouselImg} 
        />
      <Text style={styles.carouselText}>
        {item.title}
      </Text>
      <Icon 
        name="play-circle-outline" 
        size={30} 
        color="#fff"
        style={styles.carouselIcon}
      />
      </TouchableOpacity>
    </View>
  )
};

  return (
    <ScrollView style={styles.container}> 
        <View style={{flex: 1, height: screenHeigth}}> 
            <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
                <ImageBackground
                  source={{ uri:  background }}
                  style={styles.imgBg}
                  blurRadius={2}
                >

                <View style={styles.viewSearch}>
                    <TextInput 
                      style={styles.input}
                      placeholder="Procurar Filme"
                    />
                    <TouchableOpacity style={styles.icon}>
                      <Icon name="search" color="#000" size={25}/>
                    </TouchableOpacity>
                </View>
                
                <Text style={styles.acabouDeChegar}>
                  Acabou de chegar
                </Text>

                <View style={styles.slideView}>
                  <Carousel 
                      style={styles.carousel}
                      ref={carouselRef}
                      data={lista}
                      renderItem={_renderItem}
                      sliderWidth={screenWidth}
                      itemWidth={200}
                      inactiveSlideOpacity={0.5}
                      onSnapToItem={(index) => {
                        setBackground(lista[index].img)
                        setActiveIndex(index);
                      }}
                  />
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
  },
  viewSearch: {
    marginTop: 20,
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: "95%",
    flexDirection: "row",
    alignSelf: "center"
  },
  input: {
    width: "90%",
    padding: 13,
    paddingLeft: 20,
    paddingRight: 13,
    fontSize: 17,
  },
  icon: {
    position: "absolute",
    right: 20,
    top: 15
  },
  acabouDeChegar: {
    color: "#fff",
    fontSize: 25,
    marginLeft: 10,
    marginVertical: 10,
  },
  slideView: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center"
  },
  carousel: {
    flex: 1,
    overflow: "visible"
  },
  carouselImg: {
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  carouselText:{
    padding: 15,
    color: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon:{
    position:'absolute',
    top: 15,
    right: 15,
  }
})

export default MeusFilmes;