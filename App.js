// App.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Testimonio from './Testimonio.js';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Contenedor del título con imagen */}
      <View style={styles.headerContainer}>
        <Image 
          style={styles.headerImage} 
          source={require('./imagenes/FreeCodeCamp_logo.png')} // Reemplaza con la ruta correcta de tu imagen
        />
      </View>

      <Text style={styles.title}>
        Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:
      </Text>

      {/* ScrollView solo para los testimonios */}
      <ScrollView style={styles.scrollContainer}>
        <Testimonio
          nombre="Shawn Wang"
          ubicacion="Singapur"
          posicion="Ingeniero de Software"
          empresa="Amazon"
          cita="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software."
          imagen={require('./imagenes/randomgirl.jpg')} 
        />

        <Testimonio
          nombre="Sarah Chima"
          ubicacion="Nigeria"
          posicion="Ingeniera de Software"
          empresa="ChatDesk"
          cita="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro."
          imagen={require('./imagenes/randomgirl2.jpg')} 
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    // Eliminamos el paddingHorizontal aquí
    paddingTop: 50,
  },
  headerContainer: {
    width: '100%', // Cambiado de 120% a 100%
    marginBottom: 30,
    backgroundColor: "#03031B",
  },
  headerImage: {
    width: '100%', 
    height: 100, 
    resizeMode: 'cover', // Cambiado de 'contain' a 'cover'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
