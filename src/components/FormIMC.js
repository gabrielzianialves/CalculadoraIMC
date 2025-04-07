// importando tags do react native, o useState e os módulos Result, Classification e IdealWeight
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import Result from './Result';
import Classification from './Classification';
import IdealWeight from './IdealWeight';

const FormIMC = () => {
  // desestruturação de array do useState para criar estados separados, em que peso, altura e imc armazenam 
  // os valores atuais do peso, altura e imc e setPeso, setAltura e setImc são as funções para atualizar esses valores
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  // função para calcular o IMC com base nos parâmetros peso e altura
  const calcularIMC = () => {
    
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    // verificações de entrada do peso e altura
    if (isNaN(pesoNum) || isNaN(alturaNum)) {
      alert('Insira valores válidos.');
      return;
    }

    if (pesoNum < 10 || pesoNum > 300) {
      alert('Peso inválido.');
      return;
    }

    if (alturaNum < 50 || alturaNum > 250) {
      alert('Altura inválida.');
      return;
    }
      // fórmulas para calcular o IMC
      const alturaMetros = parseFloat(altura) / 100;
      const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
      setImc(imcCalculado);
    
  };

  // retorna os inputs para o usuário informar o peso e a altura e o imc poder ser calculado, junto com os pesos ideais e a classificação
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      {/* criação do botão para calcular o IMC com TouchableOpacity */}
      <TouchableOpacity style={styles.button} onPress={calcularIMC}> 
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

      {/* só mostra os componentes (Result, Classification e IdealWeight) se o imc tiver algum valor válido */}
      {imc && <Result imc={imc} />}
      {imc && <Classification imc={imc} />}
      {imc && <IdealWeight altura={parseFloat(altura) / 100} />} {/* altura convertida de centímetros para metros */}

    </View>
  );
};

 // estilização
const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#424242',
    padding: 15,
    borderRadius: 15,
    color: 'FFF5EE'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default FormIMC; // exportando esse módulo para que ele possa ser utilizado em outros módulos