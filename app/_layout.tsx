import { Tabs } from "expo-router";
import { Tabbar } from "~/components/tabbar";
import "~/i18n";
export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        animation: "none",
      }}
      backBehavior="history"
      tabBar={(props) => <Tabbar {...props} />}
    >
      <Tabs.Screen name="home.Abbr" />
    </Tabs>
  );
}
