import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
interface Props {
    title: string,
    description: string,
    icon: React.ComponentProps<typeof MaterialIcons>['name'],
    isSelected: boolean,
    onPress: () => void
}

const Card = ({ title, description, icon, isSelected, onPress }: Props) => {



    return (
        <Pressable onPress={onPress} style={[styles.container, isSelected ? { borderColor: '#66c432', borderWidth: 2, shadowColor: 'green' } : {}]}>
            <View style={isSelected ? styles.iconSelected : styles.icon}><MaterialIcons name={icon} size={24} color={isSelected ? 'green' : 'black'} />
            </View>
            <View>
                <Text>{title}</Text>
                <Text>{description}</Text>
            </View>
        </Pressable>
    )
}

export default Card

const styles = StyleSheet.create({

    container: {
        width: 350,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    description: {
        fontSize: 16,
        color: 'gray',
    },
    icon: {
        fontSize: 24,
        color: 'black',
        backgroundColor: 'gray',
        padding: 15,
        opacity: 0.3,
        borderRadius: 15,

    },
    iconSelected: {
        fontSize: 24,
        // color: 'green',
        backgroundColor: '#99b789ff',
        padding: 15,
        opacity: 1,
        borderRadius: 15,
    }
})