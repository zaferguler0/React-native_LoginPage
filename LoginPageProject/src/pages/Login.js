import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import LoginForm from './LoginForm';


export default class Login extends Component {
    render(){
        return (
            <View style={styles.container}>
                
                <View style={styles.headBackground}/>
                <KeyboardAvoidingView behavior={"position"}>
                <View>
                    <Text style={styles.logo}>Karantina</Text>
                    <Text style={styles.logoaciklama}>Zafer Güler</Text>
                </View>
                <ScrollView>
                    <View style={styles.loginalani}>
                        <Text style={styles.loginalaniyazi}>Karantina Giriş Ekranı</Text>
                        <Text style={styles.loginalaniyazi2}>Lütfen Giriş Yapınız</Text>
                        <LoginForm/>
                    </View>
                </ScrollView>
                    <View style={styles.kayitolalani}>
                        <Text style={styles.kayitol1}>Hesabınız Yok Mu?</Text>
                        <TouchableOpacity>
                            <Text style={styles.kayitol2}>Kayıt Ol</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical:80
    },
    headBackground:{
        position:'absolute',
        top:0,
        left:0,
        height:250,
        width:'100%',
        backgroundColor: '#1572de'
    },
    logo:{
        textAlign:'center',
        fontSize:40,
        fontWeight:'bold',
        color:'#f2f2f2'
    },
    logoaciklama:{
        textAlign: 'center',
        color:'#f2f2f2'
    },
    loginalani:{
        marginHorizontal:40,
        marginVertical:40,
        backgroundColor:'#fff',
        padding:20,
        borderRadius:9,
        flexGrow:1,

        shadowColor:'black',
        shadowOpacity: .6,
        shadowRadius:3,
        shadowOffset:{
            width: 0,
            height:4
        }
    },
    loginalaniyazi:{
        fontSize: 20,
        textAlign:'center',
        marginVertical: 10
    },
    loginalaniyazi2:{
        fontSize: 15,
        textAlign:'center',
        marginTop:10
    },
    kayitolalani:{
        alignItems:'center'
    },
    kayitol1:{
        color:'#999'
    },
    kayitol2:{
        color:'#666',
        fontWeight: 'bold'
    }
});
