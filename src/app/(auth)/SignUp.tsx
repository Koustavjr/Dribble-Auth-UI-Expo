import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link, router } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default function SignIn() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = React.useState(false);
    const [isEmailFocused, setIsEmailFocused] = React.useState(false);
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const [passwordMatch, setPasswordMatch] = React.useState(true);

    return (
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

                    <Text style={styles.heading}>Sign Up For Free</Text>
                    <Text style={styles.subHeading}>Sign up in 1 minute for free!</Text>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10, marginLeft: 10 }}>Email Address</Text>
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
                        style={{
                            width: '60%'
                        }}
                    />
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10, marginLeft: 10 }}>Password</Text>
                    <View style={[styles.inputContainer, isPasswordFocused ? {
                        borderColor: '#66c432',
                        borderWidth: 2,
                        shadowOpacity: 0.2
                    } : {
                        borderColor: '#e0e0e0',
                        shadowOpacity: 0
                    }, !passwordMatch && { borderColor: 'red', borderWidth: 2 }]}>
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


                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10, marginLeft: 10 }}>Confirm Password</Text>
                    <View style={[styles.inputContainer, isConfirmPasswordFocused ? {
                        borderColor: '#66c432',
                        borderWidth: 2,
                        shadowOpacity: 0.2
                    } : {
                        borderColor: '#e0e0e0',
                        shadowOpacity: 0
                    }]}>
                        <MaterialIcons name='lock' size={24} color='black' />
                        <TextInput placeholder='Confirm password'
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            onFocus={() => setIsConfirmPasswordFocused(true)}
                            onBlur={() => setIsConfirmPasswordFocused(false)}
                            secureTextEntry={!showConfirmPassword}
                            style={{ width: '60%' }}
                        />

                        <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                            <MaterialIcons name={showConfirmPassword ? 'visibility' : 'visibility-off'} style={{ paddingLeft: 30, marginLeft: 30 }} size={24} color='black' />
                        </Pressable>
                    </View>
                </View>
                {

                    !passwordMatch && (
                        <View style={styles.passwordMatchError}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Error:Passwords do not match!</Text>
                        </View>
                    )
                }

                <Pressable style={styles.button}
                    onPress={() => {
                        if (password !== confirmPassword) {
                            setPasswordMatch(false);
                        } else {
                            setPasswordMatch(true);
                            router.push('/SignIn');
                        }
                    }}
                >
                    <Text style={styles.text}>Sign Up</Text>
                    <MaterialIcons name='arrow-forward' size={24} color='white' style={{ marginLeft: 10 }} />
                </Pressable>


                <View style={styles.footer}>
                    <Text>Already have an account?</Text>
                    <Link href="/SignIn"><Text style={{ color: '#66c432' }}>Sign In</Text></Link>
                </View>

            </View>

        </KeyboardAwareScrollView>

    )
}

const styles = StyleSheet.create({

    passwordMatchError: {
        color: 'red',
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#ffcccc',
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'red',
        marginBottom: 10,
    },
    container: {
        flex: 1,
        // padding: 20,
        // paddingBottom: 30


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