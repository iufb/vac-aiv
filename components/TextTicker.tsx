
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';

const { width: screenWidth } = Dimensions.get('window');

const Ticker = () => {
    const translateX = useSharedValue(0);

    const textWidth = screenWidth * 2; // Adjust this based on your actual text width

    useEffect(() => {
        translateX.value = withRepeat(
            withTiming(-textWidth, {
                duration: 10000,
                easing: Easing.linear,
            }),
            -1, // infinite
            false, // don't reverse
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.text, animatedStyle]}>
                🔔 This is a text ticker scrolling continuously across the screen!
            </Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        overflow: 'hidden',

        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        color: 'white',
        whiteSpace: 'nowrap',
        paddingHorizontal: screenWidth,
    },
});

export default Ticker;
