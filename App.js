import React from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';
import {Input} from './components/Input';

export default function App() {

  const [loginValue, setLoginValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  const onPress = () => {
    console.log('Login ' + loginValue);
    console.log('Password ' + passwordValue);
    setLoginValue('');
    setPasswordValue('');
  }

  return (
    <View style={styles.container}>
      <Text>как дела?
        
      </Text>
      <View style={styles.formLoginWrap}>
        <Input placeholder='Login' value={loginValue} setLoginValue={text => setLoginValue(text)}/>
        <Input placeholder='Password' type='password' value={passwordValue} setPasswordValue={text => setPasswordValue(text)}/>
        <Button
          title="Login"
          color="#4B0082"
          onPress={onPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formLoginWrap: {
    width: '100%',
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
