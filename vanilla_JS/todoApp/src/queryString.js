export const parse = (querystring) => {
  // "?name=roto&position=bassist"
  // &로 쪼갠다.
  // key=value의 조합을 object 형태로 만든다.
  // 만들어진것을 리턴한다.
  // const querystrings = {}

  // 루프를 돌면서 querystirngs에 키와 값 추가
  return querystring.split("&").reduce((acc, keyandValue) => {
    const [key, value] = keyandValue.split("=");
    if (key && value) {
      acc[key] = value;
    }
    return acc;
  }, {});
};
