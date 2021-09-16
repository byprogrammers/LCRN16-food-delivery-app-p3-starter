import React from 'react';
import {
    View,
    Text
} from 'react-native';

const Map = ({ navigation }) => {

    React.useEffect(() => {
        let initialRegion = {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
        }

        let destination = {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922,
        }
    }, [])

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <Text>Map</Text>
        </View>
    )
}

export default Map;