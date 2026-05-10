import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from "../../components/Card";


const ForgotPassword = () => {


    const Cards: { title: string; description: string; icon: React.ComponentProps<typeof MaterialIcons>['name'] }[] = [
        {
            title: "Email Address",
            description: "Send via email address securely.",
            icon: "email"
        },
        {
            title: "2 Factor Authentication",
            description: "Send via 2FA securely.",
            icon: "book"
        },
        {
            title: "Google Authenticator",
            description: "Send via Authenticator securely.",
            icon: "lock"
        },
    ]

    const [selected, setSelected] = React.useState<number | null>(null);

    return (
        <SafeAreaView style={{ flex: 1, width: '100%', height: '100%' }}>
            <View style={styles.back}>
                <Link href="/SignIn">
                    <Ionicons name="chevron-back" size={24} color="black" />
                </Link>
            </View>

            <View style={{ justifyContent: 'center', gap: 10, paddingHorizontal: 20, marginTop: 30 }}>
                <Text style={styles.heading}>Forgot Password</Text>
                <Text style={styles.subHeading}>Select a method to reset your password</Text>
            </View>
            <FlatList
                data={Cards}
                contentContainerStyle={styles.container}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <Card title={item.title} description={item.description} icon={item.icon}
                        isSelected={selected === index}
                        onPress={() => setSelected(index)}

                    />
                )}
                style={{ marginTop: 30, borderRadius: 20 }}
            />

            <Pressable style={styles.button}>
                <Text style={styles.text}>Sign In</Text>
                <MaterialIcons name='arrow-forward' size={24} color='white' style={{ marginLeft: 10 }} />
            </Pressable>
            <AntDesign name="lock" size={140} style={{ position: 'absolute', bottom: -20, left: -40, color: 'gray', opacity: 0.2 }} />
        </SafeAreaView>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subHeading: {
        fontSize: 16,
        color: '#666',

    },
    back: {
        backgroundColor: "gray",
        padding: 10,
        borderRadius: 10,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.2,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
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
        marginBottom: 100,
    }

})
