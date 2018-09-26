//Import...
import React from 'react';
import { Text, AppRegistry, View, TouchableOpacity, Image, TextInput }  from 'react-native';

//fomatações
const Estilos = {
    principal: {
      height: 568,
      width: 360,
    },
    areaDinamica: {
      flex: 9,
    },
    menu: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#4286f4',
    },
    topo: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#4286f4',
    },
    conteudo: {
      flex: 8,
    },

    perfil: {
      marginVertical: 10,
      marginLeft: 20,
      height: 35,
      width: 30,
      borderRadius: 50,
      borderColor: 'white'
    },

    pesquisa: {
      color: 'white',
      backgroundColor: '#89b6ff',
      height: 45,
      width: 280,
      marginVertical: 5,
      marginHorizontal: 2,
      borderRadius: 50,
      fontWeight: 'bold',
      marginLeft: 20,
    },

    textoBotao: {
      color: '#48BBEC',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center'
    },

    botao: {
      height: 65,
      width: 72,
    },
};

//Criar componente.
const App = () => {
  const { principal,
          areaDinamica,
          menu,
          topo,
          conteudo,
          textoBotao,
          botao,
          perfil,
          pesquisa,
         } = Estilos;
         
  return (
    <View style={ principal }>
      <View style={ areaDinamica }>
        <View style={ topo }>
          <Image source={ require ('./imgs/perfil.png')}
                  style={ perfil } />
          <TextInput underlineColorAndroid="transparent" style={ pesquisa }> Pesquisar </TextInput>
        </View>
        <View style={ conteudo }></View>
      </View>
      <View style={ menu }>
         <TouchableOpacity style={botao}>
          <Text style={textoBotao}>1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//renderizar para o dispositivo...
AppRegistry.registerComponent('App1', () => App);