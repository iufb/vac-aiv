import { ReactNode } from 'react';
import { Text, TextProps, View } from 'react-native';
import { rMS, rS } from '~/components/utils';
interface BaseProps extends TextProps {
    children?: ReactNode;
}
const P = ({ children }: BaseProps) => {
    return (
        <View style={{ paddingHorizontal: rS(8) }}>
            <UIText
                style={{
                    paddingHorizontal: rS(10),
                }}>
                {children}
            </UIText>
        </View>
    );
};
const UIText = ({ children, style }: BaseProps) => {
    return (
        <Text
            style={[
                {
                    fontFamily: 'Rubik_400Regular',
                    fontSize: rMS(15),
                    color: '#111827',
                    lineHeight: rMS(22),
                },
                ...(Array.isArray(style) ? style : [style]),
            ]}>
            {children}
        </Text>
    );
};
const Container = ({ children }: BaseProps) => (
    <View style={{ paddingHorizontal: rS(10) }}>{children}</View>
);
const Zero = ({ children, style }: BaseProps) => <UIText style={[style]}>{children}</UIText>;
const One = ({ children, style }: BaseProps) => (
    <UIText
        style={[
            {
                paddingLeft: rS(15),
                fontWeight: 600,
                fontFamily: 'Rubik_600SemiBold',
                color: '#ef4444',
            },
            style,
        ]}>
        {children}
    </UIText>
);
const Two = ({ children }: BaseProps) => (
    <UIText
        style={{
            paddingLeft: rS(25),
            fontStyle: 'italic',
            color: 'black',
        }}>
        {children}
    </UIText>
);
export { Container, One, P, Two, UIText, Zero };
