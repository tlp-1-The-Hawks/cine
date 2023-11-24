import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { StarIconProps } from './StarIcon';
type AnimationConfig = {
    easing?: (value: number) => number;
    duration?: number;
    delay?: number;
    scale?: number;
};
type StarRatingProps = {
    rating: number;
    onChange: (rating: number) => void;
    color?: string;
    emptyColor?: string;
    maxStars?: number;
    starSize?: number;
    enableHalfStar?: boolean;
    enableSwiping?: boolean;
    onRatingStart?: () => void;
    onRatingEnd?: () => void;
    style?: StyleProp<ViewStyle>;
    starStyle?: StyleProp<ViewStyle>;
    animationConfig?: AnimationConfig;
    StarIconComponent?: (props: StarIconProps) => JSX.Element;
    testID?: string;
};
declare const StarRating: React.FC<StarRatingProps>;
export default StarRating;
//# sourceMappingURL=StarRating.d.ts.map