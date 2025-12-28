import { Stack, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { isTablet } from "~/components/constants";
import ChevronLeft from "../assets/icons/chevron-left.svg";

export const StackScreen = ({
  title,
  showBackBtn = true,
}: {
  title: string;
  showBackBtn?: boolean;
}) => {
  const router = useRouter();
  return (
    <Stack.Screen
      options={{
        headerTitleAlign: "center",
        headerTitle: () => (
          <Text style={{ fontSize: isTablet ? 24 : 18 }} numberOfLines={1}>
            {title}
          </Text>
        ),
        headerLeft: showBackBtn
          ? () => (
              <TouchableOpacity
                hitSlop={20}
                style={{
                  alignItems: "center",
                  paddingHorizontal: 4,
                  justifyContent: "center",
                  marginTop: 4,
                }}
                onPress={() => router.back()}
              >
                <ChevronLeft width={24} height={24} />
              </TouchableOpacity>
            )
          : undefined,
        headerBackVisible: false,
      }}
    />
  );
};
