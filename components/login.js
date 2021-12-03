import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import logout from '../components/logout'
import logo from '../assets/images/KISLAlogo.jpg';

//luodaan loginin muuttujia
const login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    //tällä siirrytään loginista toiselle jos on oikein tunnus ja salasana 
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.navigate("logout")
          }
        })
    
        return unsubscribe
      }, [])

      //tällä luodaan rekisteröinti
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }
  //tällä luodaan kirjautuminen
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
            <View style={styles.inputContainer}>
            <View style={styles.inputlogo}>

            <Image source={logo} style={styles.logoImage} />
            </View>
            <TextInput
            placeholder="Email"
             value={email}
             onChangeText={text => setEmail(text)}
            style={styles.input}
            />
            <TextInput
            placeholder="Password"
             value={password}
             onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
            />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                    >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        flexDirection: "column",
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
      },
      inputContainer: {
        width: '80%'
      },
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      button: {
        backgroundColor: `#87ceeb`,
        width: 200,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 5,
      },
      buttonText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 14,
      },
      logoImage: {
        width: 150,
        height: 150,
        borderRadius: 20,
        marginBottom: 10,
      },
      inputlogo: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    
})