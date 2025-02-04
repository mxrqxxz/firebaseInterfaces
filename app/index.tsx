import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { router } from 'expo-router'

const Index = () => {

  const goTabs = () => {
    router.push('/tabs')
  }

  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style= {GlobalStyles.titulo}>Inicio de sesión</Text>
      <TextInput style={GlobalStyles.input} placeholder="Usuario" />
      <TextInput secureTextEntry={true} style={GlobalStyles.input} placeholder="Contraseña" />
      <View style={GlobalStyles.line}>
        <Pressable onPress={goTabs} style={GlobalStyles.boton}>
          <Text>Login</Text>
        </Pressable>
        <Pressable style={GlobalStyles.boton}>
          <Text>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Index