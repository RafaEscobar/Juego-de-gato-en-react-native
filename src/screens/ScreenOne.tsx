import React from 'react'
import { Text, View } from 'react-native'

export const ScreenOne = () => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
        <Text style={{fontSize: 20, color: 'black'}}>Mi primer app...</Text>
    </View>
  )
}
