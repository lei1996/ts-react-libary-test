console.log(1);
export interface ADSDDInterface {
  /** 这里面的注释会一起带到 .d.ts 声明文件中 */
  asd?: string;
  aaa?: string;
}

const Absdd = (data: ADSDDInterface) => {};

export { Absdd };

// Absdd({aaa:1, })
