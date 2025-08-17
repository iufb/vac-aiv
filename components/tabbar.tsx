import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Link, LinkProps, usePathname } from "expo-router";
import { ReactElement, ReactNode, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { tabColors } from "~/components/consts/colors";
import { BookIcon, HomeIcon, SettingsIcon } from "~/components/icons";


const tabs: { label: string, href: LinkProps['href'], icon: (color: string) => ReactElement }[] = [
    {
        label: "Home",
        href: "/",
        icon: (color) => <HomeIcon color={color} width={24} height={24} />
    },
    {
        label: "Explore",

        href: "/explore",

        icon: (color) => <BookIcon color={color} width={24} height={24} />

    },
    {

        label: "Settings",

        href: "/settings",

        icon: (color) => <SettingsIcon color={color} width={24} height={24} />
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


            {tabs.map(t => <Tablink t={t} key={t.href.toString()} />)}
        </View>

    );
}
interface TablinkProps {
    t: typeof tabs[0]
}

interface TabIconProps {
    icon: ReactNode,
    isActive: boolean
}


const Tablink = ({ t }: TablinkProps) => {
    const progress = useSharedValue(0)
    const pathname = usePathname();
    const isActive = isRouteActive(pathname, t.href.toString());
    useEffect(() => {
        progress.value = withTiming(isActive ? 1 : 0, { duration: 250 });
    }, [isActive]);
    const st = useAnimatedStyle(() => ({
        transform: [
            {
                scale: withTiming(isActive ? 1.1 : 1, { duration: 300 })

            }
        ],
        backgroundColor: interpolateColor(progress.value, [1, 0], [tabColors.active.bg, tabColors.inactive.bg]),
    }))


    return (
        <Link href={t.href} key={t.label}>
            <Animated.View style={[styles.link, st]}>
                {t.icon(isActive ? tabColors.active.fg : tabColors.inactive.fg)}
            </Animated.View>
        </Link>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    link: {
        paddingVertical: 3,
        paddingHorizontal: 6,
        borderRadius: 10
    }



})


