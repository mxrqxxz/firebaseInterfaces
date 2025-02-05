import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { router } from 'expo-router'
import { auth } from '@/Firebaseconfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth'

const Index = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const logIn = async () => {
    try {
      const user = await(signInWithEmailAndPassword(auth, email, password));
      if (user) goTabs();
    } catch (error: any) {
      console.log(error.message);
      Alert.alert("Inicio de sesión incorrecto", error.message);
    }
  }

  const register = async () => {
    try {
      const user = await(createUserWithEmailAndPassword(auth, email, password));
      if (user) goTabs();
    } catch (error: any) {
      console.log(error.message);
      Alert.alert("Registro incorrecto", error.message);
    }
  }

  const goTabs = () => {
    router.replace('/tabs')
  }

  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style= {GlobalStyles.titulo}>Inicio de sesión</Text>
      <TextInput value={email} onChangeText={setEmail} style={GlobalStyles.input} placeholder="Usuario" />
      <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} style={GlobalStyles.input} placeholder="Contraseña" />
      <View style={GlobalStyles.line}>
        <Pressable onPress={logIn} style={GlobalStyles.boton}>
          <Text>Login</Text>
        </Pressable>
        <Pressable onPress={register} style={GlobalStyles.boton}>
          <Text>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Index