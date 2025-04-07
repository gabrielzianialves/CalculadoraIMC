// importando algumas tags do react native e o useState e useEffect do react
import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

// função que calcula o peso mínimo ideal e o peso máximo ideal com base na altura informada (parâmetro)
const IdealWeight = ({ altura }) => {

    // desestruturação de array do useState para criar estados separados, em que minIdealWeight e maxIdealWeight armazenam 
    // o valor atual do peso e setMinIdealWeight e setMaxIdealWeight são as funções para atualizar esses valores
    const [minIdealWeight, setMinIdealWeight] = useState(null);
    const [maxIdealWeight, setMaxIdealWeight] = useState(null);

    // utilizando o useEffect para alterar o valor dos pesos ideais sempre que a altura mudar
    useEffect(() => {
        // se o valor da altura for válido
        if (altura) {
            // fórmulas para calcular os pesos ideais
            setMinIdealWeight((18.5*altura*altura).toFixed(2));
            setMaxIdealWeight((24.9*altura*altura).toFixed(2));
        }
    }, [altura]); // dependência que faz o useEffect ser executado de novo sempre que for passado um novo valor para a altura

    // retorna os pesos ideais
    return (
        <View>
            <Text style={styles.text}><Text style={{ fontWeight: 'bold', color: '#3C3D37' }}>Peso mínimo ideal:</Text> {minIdealWeight} kg{'\n'}
            <Text style={{ fontWeight: 'bold', color: '#3C3D37' }}>Peso máximo ideal:</Text> {maxIdealWeight} kg</Text>
        </View>
    );
};
  
  // estilização do Text
  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
  });
  
  export default IdealWeight; // exportando esse módulo para que ele possa ser utilizado em outros módulos