import React from "react";
import { useSpring, animated } from "react-spring";
export const Button = (data) => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    return React.createElement(animated.div, { style: props }, "I will fade in");
};
//# sourceMappingURL=index.js.map