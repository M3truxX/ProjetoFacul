//Import...
import React from 'react';
import { Text, AppRegistry, View }  from 'react-native';

//fomatações
const Estilos = {
    principal: {
      height: 568,
      width: 360,
  },

    atualizar: {
      flex: 9,
  },

    Topo: {
      flex: 1,
      backgroundColor: 'brown'
  },
    conteudo: {
      flex: 8,
      backgroundColor: 'yellowgreen'
  },
    Rodape: {
      flex: 1,
      backgroundColor: 'orangered'
  }
};

//Criar componente.
const App = () => {
  const { principal, Topo, conteudo, Rodape, atualizar } = Estilos;
  return (
    <View style={ principal }>
      <AreaDinamica></AreaDinamica>
      <View style={ Rodape }></View>
    </View>
  );
};

class AreaDinamica extends Component{
  render(){
    return(
      <View style={ atualizar }>
        <View style={ Topo }></View>
        <View style={ conteudo }></View>
      </View>
      );
  }
}

//renderizar para o dispositivo...
AppRegistry.registerComponent('App1', () => App);