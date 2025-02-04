import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Datos',
          tabBarIcon: ({ color }) => <Ionicons  size={28} name="folder" color={color} />,
        }}
      />
      <Tabs.Screen
        name="signOut/index"
        options={{
          title:'Desconectar',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="exit" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
