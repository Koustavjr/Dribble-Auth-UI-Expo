import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function SignIn() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = React.useState(false);
    const [isEmailFocused, setIsEmailFocused] = React.useState(false);

    return (
        <SafeAreaView style={{ flex: 1, width: '100%', height: '100%' }}>
            <KeyboardAwareScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                enableOnAndroid={true}          // ← critical for Android
                extraScrollHeight={20}          // ← extra space above keyboard
                showsVerticalScrollIndicator={false}
            >



                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../../assets/logo-bg-removed.png')} style={styles.logo} />

                        <Text style={styles.heading}>Sign In</Text>
                        <Text style={styles.subHeading}>Let's experience the joy of telecare AI.</Text>
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10, width: '90%', alignSelf: 'center' }}>Email Address</Text>
                    <View style={[styles.inputContainer, isEmailFocused ? {
                        borderColor: '#66c432',
                        borderWidth: 2,
                        shadowOpacity: 0.2
                    } : {
                        borderColor: '#e0e0e0',
                        shadowOpacity: 0
                    }]}>

                        <MaterialIcons name='email' size={24} color='black' />
                        <TextInput placeholder='Enter your email' value={email} onChangeText={setEmail}
                            onFocus={() => setIsEmailFocused(true)}
                            onBlur={() => setIsEmailFocused(false)}
                            style={{ width: '60%', marginLeft: 10, marginRight: 10 }}
                        />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10, width: '90%', alignSelf: 'center' }}>Password</Text>
                        <View style={[styles.inputContainer, isPasswordFocused ? {
                            borderColor: '#66c432',
                            borderWidth: 2,
                            shadowOpacity: 0.2
                        } : {
                            borderColor: '#e0e0e0',
                            shadowOpacity: 0
                        }]}>
                            <MaterialIcons name='lock' size={24} color='black' />
                            <TextInput placeholder='Enter your password'
                                value={password}
                                onChangeText={setPassword}
                                onFocus={() => setIsPasswordFocused(true)}
                                onBlur={() => setIsPasswordFocused(false)}
                                secureTextEntry={!showPassword}
                                style={{ width: '60%' }}
                            />

                            <Pressable onPress={() => setShowPassword(!showPassword)}>
                                <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} style={{ paddingLeft: 30, marginLeft: 30 }} size={24} color='black' />
                            </Pressable>
                        </View>
                    </View>


                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Sign In</Text>
                        <MaterialIcons name='arrow-forward' size={24} color='white' style={{ marginLeft: 10 }} />
                    </Pressable>


                    <View style={styles.socialIcon}>
                        <View style={[styles.icon, styles.facebook]}>
                            <EvilIcons name="sc-facebook" size={30} color="black" />
                        </View>
                        <View style={styles.icon}>
                            <AntDesign name="google" size={24} color="black" />
                        </View>
                        <View style={styles.icon}>
                            <Entypo name="instagram" size={24} color="black" />
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <Text>Don't have an account?</Text>
                        <Link href="/SignUp"><Text style={{ color: '#66c432', }}>Sign Up</Text></Link>
                    </View>
                    <View style={styles.footer}>
                        <Link href="/ForgotPassword"><Text style={{ color: '#66c432', textDecorationLine: 'underline' }}>Forgot your password?</Text></Link>
                    </View>
                </View>

            </KeyboardAwareScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
        // paddingBottom: 30
        //backgroundColor: 'black',


    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    socialIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    button: {
        backgroundColor: '#66c432',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
        width: '90%',
        alignSelf: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    subHeading: {
        color: 'gray',
        fontSize: 16,
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 50,
        gap: 10,

    },
    logoContainer: {
        alignItems: 'center',       // Centers horizontally
        justifyContent: 'center',    // Centers vertically (if the View has a height)
        marginVertical: 10,          // Adds some space around the logo
    },
    facebook: {
        padding: 18
    },
    icon: {
        padding: 20,
        borderRadius: 15,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',

    }

})