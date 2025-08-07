import { Tabbar } from "@/components/tabbar";
import { Tabs } from "expo-router";

export default function RootLayout() {
    return <Tabs
        tabBar={(props) => <Tabbar {...props} />}
    />
}
