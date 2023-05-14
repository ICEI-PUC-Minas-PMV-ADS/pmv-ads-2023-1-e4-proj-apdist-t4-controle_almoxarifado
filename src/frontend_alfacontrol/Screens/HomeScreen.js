import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const goToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        />
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => goToScreen('Opcao1')}>
            <Image source={require('../assets/fornecedores.png')} style={styles.menuIcon} />
            <Text style={styles.menuItem}>Fornecedores</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToScreen('Opcao2')}>
            <Image source={require('../assets/estoque.png')} style={styles.menuIcon} />
            <Text style={styles.menuItem}>Estoque</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToScreen('Opcao3')}>
            <Image source={require('../assets/relatorios.png')} style={styles.menuIcon} />
            <Text style={styles.menuItem}>Relatorios</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Tela Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0077be',
    padding: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  menuItem: {
    marginHorizontal: 25,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;