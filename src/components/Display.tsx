import React from "react"
import { StyleSheet, Text, View } from 'react-native'

interface DisplayProps {
  value: string
  miniValues: string[]
}

export const Display: React.FC<DisplayProps> = (props) => {
  const { value, miniValues } = props
  return (
    <View style={style.display} >
      <Text style={style.miniValue} >
        {miniValues.join(' ')}
      </Text>
      <Text style={style.displayValue} numberOfLines={1} >
        {value}
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  displayValue: {
    fontSize: 60,
    color: '#fff',
    alignSelf: 'flex-end'
  },
  miniValue: {
    color: '#fff',
    fontSize: 20
  }
})
