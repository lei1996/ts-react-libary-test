import React from "react";
import { useSpring, animated } from "react-spring";
export interface ADSDDInterface {
  /** 这里面的注释会一起带到 .d.ts 声明文件中 */
  asd?: string;
  aaa?: string;
}

export const Button = (data: ADSDDInterface) => {
  const props: any = useSpring({ opacity: 1, from: { opacity: 0 } });

  return <animated.div style={props}>I will fade in</animated.div>;
};
