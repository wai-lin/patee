const mmNumRgx = [
  [/0/g, '၀'],
  [/1/g, '၁'],
  [/2/g, '၂'],
  [/3/g, '၃'],
  [/4/g, '၄'],
  [/5/g, '၅'],
  [/6/g, '၆'],
  [/7/g, '၇'],
  [/8/g, '၈'],
  [/9/g, '၉'],
];

/**
 * en2mmNum function
 * convert all the numbers containing in a string to mm numbers
 * @param enNum number, string
 * @returns MM Number String (default return back eng string)
 */
export default function en2mmNum(enNum: number | string): string {
  const enNumStr = enNum.toString();
  let mmNumStr = enNumStr;

  mmNumRgx.forEach(rgxArr => {
    mmNumStr = mmNumStr.replace(new RegExp(rgxArr[0]), rgxArr[1] as string);
  });

  return mmNumStr;
}
