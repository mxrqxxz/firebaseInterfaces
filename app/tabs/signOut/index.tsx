import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'

const SignOut = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style={GlobalStyles.titulo}>Desconexión</Text>
      <Pressable style={[GlobalStyles.danger, GlobalStyles.boton]}>
        <Text style={GlobalStyles.negrita}>Sign Out</Text>
      </Pressable>
    </View>
  )
}

export default SignOut