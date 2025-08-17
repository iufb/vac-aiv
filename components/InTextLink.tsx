import { FontAwesome } from '@expo/vector-icons';
import { Href, useRouter } from 'expo-router';
import { ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
interface InTextLinkProps {
  href: Href<string>;
  children?: ReactNode;
}
export const InTextLink = ({ children, href }: InTextLinkProps) => {
  const router = useRouter();
  return (
    <View>
      <TouchableOpacity
        style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}
        onPress={() => router.push(href)}>
        <Text style={{ flex: 1 }}>{children}</Text>
        <FontAwesome name="chevron-right" size={20} />
      </TouchableOpacity>
    </View>
  );
};
