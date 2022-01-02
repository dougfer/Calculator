import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

interface ButtonProps {
  onClick: () => void | ((arg: string) => void)
  label: string
  double?: boolean
  triple?: boolean
  operation?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, label, double, triple, operation } = props
  const styleButton: any[] = [style.button]

  
    if(double) styleButton.push(style.buttonDouble)
    if(triple) styleButton.push(style.buttonTriple)
    if(operation)styleButton.push(style.operationButton)
  
  return (
    <TouchableHighlight onPress={onClick}>
      <Text style={styleButton}>{label}</Text>
    </TouchableHighlight>
  )
}

const style = StyleSheet.create({
  button: {
    fontSize: 35,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888'
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3
  }
})
