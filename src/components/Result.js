// importando tags do react native e o React
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// função que exibe o IMC da pessoa, com o parâmetro IMC
const Result = ({ imc }) => {
  return (
    <Text style={styles.result}>Seu IMC é: {imc}</Text>
  );
};

// estilização do Text result
const styles = StyleSheet.create({
  result: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
    color: '#333',
  },
});

export default Result; // exportando esse módulo para que ele possa ser utilizado em outros módulos