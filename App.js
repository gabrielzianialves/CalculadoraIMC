// importando tags do react native e os módulos Title e FormIMC
import { StyleSheet, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/FormIMC';

export default function App() {
  return (
    // usando a tag TouchableWithoutFeedback para que o teclado possa sumir quando o usuário clicar na tela
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require('./assets/backgroundIMG.png')} // imagem de fundo
        style={styles.background}
        resizeMode="cover"
      >
      {/* retorna o título e tudo que estiver dentro do FormIMC */}
        <View style={styles.container}>
          <Title />
          <FormIMC />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

// estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  background: {
    flex: 1,
    width: '100%',
    heigth: '100%',
  },
});
