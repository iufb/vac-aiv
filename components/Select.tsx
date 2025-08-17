import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { UIText } from '~/components/P';
import { isTablet } from '~/components/constants';
import { rS, rV } from '~/components/utils';
export const Select = ({
    label,
    values,
    onSelect,
}: {
    label: string;
    onSelect: (lang: string) => void;
    values: { lang: string; label: string }[];
}) => {
    const [show, setShow] = useState(false);
    const height = useSharedValue(0);
    const opacity = useSharedValue(0);
    const onPress = () => {
        setShow(!show);
        opacity.value = withTiming(show ? 0 : 1, { duration: 400 });
    };
    const derivedHeight = useDerivedValue(() =>
        withTiming((isTablet ? 150 : 140) * Number(show), {
            duration: 400,
        })
    );
    const valuesContainer = useAnimatedStyle(() => ({
        height: derivedHeight.value,
        opacity: opacity.value,
        overflow: 'hidden',
    }));

    return (
        <View style={{ gap: 20, position: 'relative' }}>
            <TouchableOpacity onPress={onPress}>
                <UIText style={{ textAlign: 'center' }}>{label}</UIText>
            </TouchableOpacity>
            <Animated.View
                style={[
                    valuesContainer,
                    {
                        position: 'absolute',
                        top: rV(40),
                        right: 0,
                        width: rS(150),
                        bottom: 0,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: '#c2c2c2',
                        borderRadius: 10,
                    },
                    show && {
                        borderWidth: 1,
                    },
                ]}>
                <View
                    style={{
                        gap: 5,
                        paddingHorizontal: rS(15),
                        borderRadius: 10,
                    }}
                    onLayout={(e) => {
                        height.value == e.nativeEvent.layout.height;
                    }}>
                    {values.map((val, idx) => (
                        <TouchableOpacity
                            key={val.lang}
                            onPress={() => {
                                onSelect(val.lang);
                                setShow(false);
                            }}>
                            <UIText
                                style={[
                                    {
                                        textAlign: 'center',
                                    },
                                    label == val.label && {
                                        fontFamily: 'Rubik_600SemiBold',
                                    },
                                ]}>
                                {val.label}
                            </UIText>
                        </TouchableOpacity>
                    ))}
                </View>
            </Animated.View>
        </View>
    );
};
