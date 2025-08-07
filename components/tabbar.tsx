import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Link, LinkProps, usePathname } from "expo-router";
import { ReactNode, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
const AnimatedHomeIconPath = Animated.createAnimatedComponent(Path)
const HomeIcon = () => {
    const progress = useSharedValue(0)
    useEffect(() => {
        progress.value = withTiming(1, { duration: 2000, easing: Easing.linear })
    }, [])
    const [length, setLength] = useState(0)
    const ref = useRef<Path>(null)
    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: length - length * progress.value
    }))
    const path = 'm2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
    return <Svg width={24} height={24} viewBox={[0, 0, 24, 24].join(" ")}>
        <AnimatedHomeIconPath animatedProps={animatedProps} ref={ref} onLayout={() => setLength(ref.current!.getTotalLength() ?? 0)} d={path} stroke={'black'} strokeWidth={2} strokeDasharray={length || undefined} />
    </Svg>
}
const tabs: { label: string, href: LinkProps['href'], icon: ReactNode }[] = [
    {
        label: "Home",
        href: "/",
        icon: <HomeIcon />
    },
    {


        label: "Explore",

        href: "/explore",

        icon: <HomeIcon />
    },
    {

        label: "Settings",

        href: "/settings",

        icon: <HomeIcon />
    }



];
function isRouteActive(path: string, target: string) {
    return path === target || path.startsWith(`${target}/`);
}
interface TabbarProps extends BottomTabBarProps { }
export const Tabbar = ({ ...props }: TabbarProps) => {
    const { insets } = props
    console.log(insets)

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            <HomeIcon />

            {tabs.map(t => <Tablink t={t} key={t.href.toString()} />)}
        </View>

    );
}
interface TablinkProps {
    t: typeof tabs[0]
}
const Tablink = ({ t }: TablinkProps) => {
    const pathname = usePathname()
    const progress = useSharedValue(0)
    return <Link style={[styles.link, isRouteActive(pathname, t.href.toString()) && { backgroundColor: 'red' }]} href={t.href} key={t.label}>
        <Text>{t.label}</Text>
    </Link>
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    link: {


    }



})


