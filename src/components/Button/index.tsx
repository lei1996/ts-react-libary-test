import React from "react";

export interface ADSDDInterface {
  /** 这里面的注释会一起带到 .d.ts 声明文件中 */
  asd?: string;
  aaa?: string;
}

export const Button = (data: ADSDDInterface) => {
  return <div>{data.asd}这里是自定义button{data.aaa}</div>;
};