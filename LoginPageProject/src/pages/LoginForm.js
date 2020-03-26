import React, { Component } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/MyButton';

export default class LoginForm extends Component {
  render() {
    return (
      <View>
          <Text style={styles.kayitolyazi}>Kayıt Ol</Text>
          <Input
              returnKeyType={"next"}
              autoCapitalize="none"
              placeholder="Kullanıcı Adınız"
              onSubmitEditing = {() => this.Parolabilgisi.focus()}
          />

          <Input
              returnKeyType={"go"}
              secureTextEntry={true}
              placeholder="Parola"
              inputRef={input=>this.Parolabilgisi = input}
          />
          <MyButton
            color={"#f1f1f1"}
            backgroundColor={"#0065e0"}
            text = {"Giriş Yap"}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    kayitolyazi:{
        fontSize:15,
        color:'#333',
        marginVertical:10
    }


});
