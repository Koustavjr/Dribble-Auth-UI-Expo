import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
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
        <SafeAreaView style={{ flex: 1 }}>
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
        </SafeAreaView>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
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
    }

})
