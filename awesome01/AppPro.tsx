import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'light'
    
    return(
        <View style = {styles.container}>
            <View style={isDarkMode ? styles.darkBg : styles.whiteBg}>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                 Hello World !
             </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteBg:{
        backgroundColor: '#FFFFFF'
    },
    darkBg: {
        backgroundColor: '#000000'
    },
    
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro