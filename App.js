import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BACKGROUND_CLOUDY_COLOR, STATUS_BAR_COLOR} from "./src/helpers/colors";
import CustomAppStatusBar from './src/helpers/AppBar';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <CustomAppStatusBar
                    backgroundColor={STATUS_BAR_COLOR}
                    barStyle="dark-content"
                />

                <View style={styles.textContainer}>
                    <Text style={styles.appName}>React Native Fun</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_CLOUDY_COLOR,
    },
    textContainer: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    appName: {
        fontSize: 40,
    }
});
