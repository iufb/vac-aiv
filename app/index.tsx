
import { Link, LinkProps, Stack } from "expo-router";
import React, { PropsWithChildren, ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { appColors } from "~/components/consts/colors";

import MainIcon from '../assets/images/main.svg';
import IntroIcon from '../assets/main/1.svg';
import StatementsIcon from '../assets/main/2.svg';
import ShortsIcon from '../assets/main/3.svg';

import { rMS, rS, rV } from "~/components/utils";

const AnimatedMainIcon = Animated.createAnimatedComponent(MainIcon);

export default function Index() {
    const { t } = useTranslation();
    const { top } = useSafeAreaInsets();

    const opacity = useSharedValue(0);
    const tY = useSharedValue(100);

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 1000 });
        tY.value = withDelay(1000, withTiming(20, { duration: 500 }));
    }, []);

    const animatedTopStyle = useAnimatedStyle(() => ({
        opacity: opacity.value
    }));

    const animatedBottomStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: tY.value }]
    }));

    return (
        <View style={[styles.container, { paddingTop: top }]}>
            <Stack.Screen options={{ headerShown: false }} />

            {/* Top Section */}
            <Animated.View style={[styles.top]}>
                <AnimatedMainIcon animatedProps={animatedTopStyle} style={[styles.img]} />
            </Animated.View>

            {/* Bottom Section */}
            <Animated.View style={[styles.bottom, animatedBottomStyle]}>
                {
                    ['home.title', 'home.subtitle'].map((text, idx) =>
                        <FadeUp key={idx} delay={1500 + idx * 500}>
                            <Text style={[idx === 0 ? styles.title : styles.subtitle]}>{t(text)}</Text>
                        </FadeUp>
                    )
                }
                <View style={[styles.cardContainer]}>
                    {links.map((i, idx) => (
                        <FadeUp delay={2500 + idx * 400} key={idx}>
                            <Link href={i.link}>
                                <View style={[
                                    styles.card,
                                    idx % 2 !== 0
                                        ? { flexDirection: 'row-reverse' }
                                        : { flexDirection: 'row' }
                                ]}>
                                    <Text style={[styles.cardText]}>{t(i.text)}</Text>
                                    {i.icon}
                                </View>
                            </Link>
                        </FadeUp>
                    ))}
                </View>
            </Animated.View>
        </View>
    );
}

const FadeUp = ({ delay, children }: PropsWithChildren<{ delay: number }>) => {
    const opacity = useSharedValue(0);
    const tY = useSharedValue(60);

    useEffect(() => {
        opacity.value = withDelay(delay, withTiming(1, { duration: 1000 }));
        tY.value = withDelay(delay, withTiming(0, { duration: 1000 }));
    }, []);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: tY.value }],
        opacity: opacity.value
    }));

    return <Animated.View style={[animatedStyles]}>{children}</Animated.View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    top: {
        height: rV(280),
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom: {
        flex: 1,
        backgroundColor: 'white',
        borderTopEndRadius: rS(20),
        borderTopStartRadius: rS(20),
        marginTop: rV(-180),
        padding: rS(20),
        shadowColor: '#223C50',
        shadowOpacity: 0.2,
        shadowOffset: { width: rS(-1), height: rV(-5) },
        shadowRadius: rS(8),
        elevation: 4, // Android shadow
    },
    img: {
        width: '100%',
        height: rV(220)
    },
    title: {
        fontSize: rMS(24),
        fontWeight: '500',
        color: appColors.textMain,
        marginBottom: rV(8),
    },
    subtitle: {
        fontSize: rMS(16),
        fontWeight: '400',
        color: appColors.textSubmain,
        marginBottom: rV(16),
    },
    cardContainer: {
        flex: 1,
        marginVertical: rV(10),
        justifyContent: 'space-evenly',
    },
    card: {
        backgroundColor: appColors.cardBg,
        width: '100%',
        height: rV(80),
        borderRadius: rS(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: rS(15),
    },
    cardText: {
        fontSize: rMS(16),
        fontWeight: "500",
        color: appColors.textMain
    },
    icon: {
        marginTop: rV(-30),
        width: rS(120),
        height: rS(120)
    }
});

const links: { text: string, icon: ReactNode, link: LinkProps['href'] }[] = [
    {
        text: "home.links.1",
        icon: <IntroIcon style={[styles.icon]} />,
        link: '/introdution'
    },
    {
        text: "home.links.2",
        icon: <StatementsIcon style={[styles.icon]} />,
        link: '/definitions'
    },
    {
        text: "home.links.3",
        icon: <ShortsIcon style={[styles.icon]} />,
        link: '/abbr'
    },
];

