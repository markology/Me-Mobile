import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';

export default function AuthLoading(props) {
    useEffect(() => { onLoad() }, []);


    async function onLoad() {
        try {
            await Auth.currentSession();
            props.navigation.navigate('App');
        }
        catch (e) {
            props.navigation.navigate('Auth');
            console.warn(e);
            if (e !== 'No current user') {
                console.warn(e);
            }
        }
    }

    return (
        <View>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
        </View>
    );
}

