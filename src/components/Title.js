import { Text, StyleSheet } from 'react-native'; // importando tags do react native

// função que retorna o título que aparecerá no aplicativo
const Title = () => {
  return (

    <Text style={styles.title}>Calculadora de IMC</Text>
  );
};

// estilização do título, que foi atibuído ao Text na função acima
const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: 'white'
  },
});

export default Title; // exportando esse módulo para que ele possa ser utilizado em outros módulos