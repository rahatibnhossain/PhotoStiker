import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const Button = ({ label, theme }) => {

    if (theme == 'primary') {
        return (
            <View
                style={[styles.buttonContainer, { borderWidth: 4, borderColor: '#ffd439', borderRadius: 17 }]}
            >
                <Pressable style={[styles.button, { backgroundColor: "#fff" }]} onPress={() => { alert("Button Pressed") }}>
                    <FontAwesome name='picture-o' size={18} color="#25393e" style={styles.buttonIcon} />

                    <Text style={[styles.buttonLabel ,{color:"#25393e"}]}>{label}</Text>

                </Pressable>

            </View>
        )
    }



    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => { alert('Pressed') }}  >
                <Text style={styles.buttonLabel}>{label}</Text>


            </Pressable>



        </View>
    )
}

export default Button

const styles = StyleSheet.create({

    buttonContainer: {
        width: 322,
        height: 67,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3

    },
    button: {
        borderRadius: 10,
        width: "100%",
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    buttonIcon: {
        paddingRight: 8
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16

    },
})