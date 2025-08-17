import React, { ReactNode } from 'react';
import {
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewStyle
} from 'react-native';
import Animated, {
    interpolateColor,
    SharedValue,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';
import { UIText } from '~/components/P';
import ChevronDown from '../assets/icons/chevron-down.svg';

export const Accordion = ({ title, children }: { title: string; children: ReactNode }) => {
    const open = useSharedValue(false);
    const progress = useSharedValue(0)
    const onPress = () => {
        open.value = !open.value;
        rotation.value = withTiming(open.value ? 0 : 180, { duration: 200 });
        progress.value = withTiming(open.value ? 0 : 1, { duration: 300 });

    };
    const rotation = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation.value}deg` }],
        };
    });
    const aContainerStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            progress.value,
            [0, 1],
            ['#ffffff', '#f0f9ff']  // from white → light blue
        ),
    }))
    return (
        <Animated.View style={[styles.container, aContainerStyle]}>
            <View>
                <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
                    <UIText style={styles.btnText}>{title}</UIText>
                    <Animated.View style={[animatedStyle]}>
                        <ChevronDown width={24} height={24} />
                    </Animated.View>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <AccordionItem isExpanded={open} viewKey="Accordion">
                    {children}
                </AccordionItem>
            </View>
        </Animated.View>
    );
};
function AccordionItem({
    isExpanded,
    children,
    viewKey,
    style,
    duration = 200,
}: {
    isExpanded: SharedValue<boolean>;
    children: ReactNode;
    viewKey: string;
    style?: StyleProp<ViewStyle>;
    duration?: number;
}) {
    const height = useSharedValue(0);

    const opacity = useSharedValue(0)
    const derivedHeight = useDerivedValue(() =>
        withTiming((height.value + 20) * Number(isExpanded.value), {
            duration,
        })
    );
    const derivedOpacity = useDerivedValue(() => withTiming(Number(isExpanded.value), { duration: 200 }))
    const bodyStyle = useAnimatedStyle(() => ({
        height: derivedHeight.value,
        opacity: derivedOpacity.value,
        overflow: 'hidden',
    }));

    return (

        <Animated.View key={`accordionItem_${viewKey}`} style={[styles.animatedView, bodyStyle, style]}>
            <View style={[{ height: 1, width: '100%', backgroundColor: '#9ca3af', position: 'absolute', top: 0 }]}></View>
            <View
                onLayout={(e) => {
                    height.value = Math.ceil(e.nativeEvent.layout.height);
                }}
                style={styles.wrapper}>
                {children}
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        borderColor: '#9ca3af',
        borderWidth: 1,
        borderRadius: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    btnText: {
        textAlign: 'left',
        fontWeight: '500',
        fontFamily: 'Rubik_400Regular',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    parent: {
        width: 200,
    },
    wrapper: {
        position: 'absolute',
        display: 'flex',
        borderRadius: 10,
        left: 10,
        right: 10,
        alignItems: 'center',
    },
    animatedView: {
        width: '100%',
        justifyContent: 'center',
        overflow: 'hidden',
    },
});
