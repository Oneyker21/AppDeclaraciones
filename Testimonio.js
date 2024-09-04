// Testimonio.js
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Testimonio = ({ nombre, ubicacion, posicion, empresa, cita, imagen }) => {
  return (
    <View style={styles.testimonial}>
      <Image style={styles.image} source={imagen} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          {nombre} en {ubicacion}
        </Text>
        <Text style={styles.position}>
          {posicion} en {empresa}
        </Text>
        <Text style={styles.quote}>{cita}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  testimonial: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden', // Esto asegura que la imagen no se salga del borde
  },
  image: {
    width: 100, 
    height: '100%', 
  },
  textContainer: {
    flex: 1,
    padding: 16, 
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  position: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  quote: {
    fontSize: 14,
    color: '#333',
  },
});

export default Testimonio;
