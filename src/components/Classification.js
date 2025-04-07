// importando tags do react native
import { View, Text, StyleSheet } from 'react-native';

const Classification = ({ imc }) => {
    // função para verificar a classificação do peso
    const verification = ({ imc }) => {
        // estrutura de condição para verificar a classificação do peso
        if (imc < 18.5) {
            return "Abaixo do peso.";
        } else if (imc >= 18.5 && imc <= 24.9) {
            return "Peso normal.";
        } else if (imc >= 25 && imc <= 29.9) {
            return "Sobrepeso.";
        } else if (imc >= 30 && imc <= 34.9) {
            return "Obesidade grau 1.";
        } else if (imc >= 35 && imc <= 39.9) {
            return "Obesidade grau 2.";
        } else if (imc >= 40) {
            return "Obesidade grau 3 (obesidade mórbida).";
        }
    }
    return (
        // retorna a classificação do peso com base no IMC
        <View>
            <Text style={styles.Classification}><Text style={{ fontWeight: 'bold', color: '#424242' }}>Classificação:</Text> {verification({ imc })}</Text>
        </View>
    );
  };
  
  // estilização
  const styles = StyleSheet.create({
    Classification: {
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
        color: '#333',
    },
  });
  
  export default Classification; // exportando esse módulo para que ele possa ser utilizado em outros módulos