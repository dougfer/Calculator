import React, { useState, useMemo } from 'react'
import { Button, Display } from './components'
import { SafeAreaView, View, StyleSheet } from 'react-native'

interface InitialState {
  displayValue: string,
  usingOperation: boolean,
  values: string[],
}

const initialState: InitialState = {
  displayValue: '0',
  usingOperation: false,
  values: [],
}

const App = () => {
  
  const [objectState, setObjectState] = useState<InitialState>(initialState)

  const calculate = () => {
    if(!objectState.usingOperation) {
      return
    }
    const newArray = objectState.values
    newArray[2] = objectState.displayValue

    const result = eval(objectState.values[0] + objectState.values[1] + objectState.values[2])
    setObjectState({ displayValue: `${result}`, usingOperation: false, values: newArray})
  }
  
  const addDigit = (value: string) => {
    if(value === '.' && objectState.displayValue.includes('.')) {
      return
    }
    const number = objectState.displayValue[0] === '0' ? value : objectState.displayValue + value
    setObjectState({...objectState, displayValue: number})
  }

  const clearMemory = () => {
    setObjectState({ displayValue : '0', usingOperation: false, values: [] })
  }

  const setOperation = (value: string) => {
    if(!objectState.usingOperation) {
      const newArray = objectState.values
      newArray[0] = objectState.displayValue
      newArray[1] = value
      newArray[2] = ''
      setObjectState({...objectState, values: newArray, usingOperation: true, displayValue: '0' })
    }
  }

  return (
    <SafeAreaView style={style.container} >
      <Display miniValues={objectState.values} value={objectState.displayValue} />
      <View style={style.buttons}>
        <Button onClick={clearMemory} triple label='AC' />
        <Button onClick={() => setOperation('/')} operation label='/' />
        <Button onClick={() => addDigit('7')} label='7' />
        <Button onClick={() => addDigit('8')} label='8' />
        <Button onClick={() => addDigit('9')} label='9' />
        <Button onClick={() => setOperation('*')} operation label='*' />
        <Button onClick={() => addDigit('4')} label='4' />
        <Button onClick={() => addDigit('5')} label='5' />
        <Button onClick={() => addDigit('6')} label='6' />
        <Button onClick={() => setOperation('-')} operation label='-' />
        <Button onClick={() => addDigit('1')} label='1' />
        <Button onClick={() => addDigit('2')} label='2' />
        <Button onClick={() => addDigit('3')} label='3' />
        <Button onClick={() => setOperation('+')} operation label='+' />
        <Button onClick={() => addDigit('0')} double label='0' />
        <Button onClick={() => addDigit('.')} label='.' />
        <Button onClick={calculate} label='=' operation />
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default App
