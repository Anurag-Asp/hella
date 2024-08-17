import React from "react";

import { 
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme
} from "react-native";

function Apppro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={styles.container}>
            <Text style={isDarkMode ? styles.darkText : styles.whiteText}>
                Hello, world!
            </Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    whiteText: {
        color: '#ffffff'
    },
    darkText: {
        color: '#000000'
    }
});

export default Apppro;