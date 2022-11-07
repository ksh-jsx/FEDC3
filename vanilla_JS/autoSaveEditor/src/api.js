export const API_END_POINT = "https://kdt.roto.codes";

export const request = async (url, options = {}) => {
  try {
    //fetch로 서버에서 GET 해주기
    const res = await fetch(`${API_END_POINT}${url}`, {
      //빈객체로 되어 있을 options 풀어주고
      ...options,
      //header를 통해 데이터타입을 json으로 명명해주기
      headers: {
        "Content-Type": "application/json",
      },
    });
    //fetch는 reject되어도 오류가 발생하지 않으므로, ok되었는지 확인해주기
    if (res.ok) {
      //await는 꼭 넣어주자...!!(왜...? 로토님 말로는 Promise로 반환된다는데..) 일단 await을 빼 놓아도 작동은 잘된다... 단순히 비동기를 위한 것인가.
      return await res.json();
    }
    //reject되었을 경우 error를 던지도록 방어코드.
    throw new Error("서버에서 응답이 정상적으로 완료되지 않았습니다.");
    //api통신 자체에서 문제가 생겼을 경우 (인터넷 문제 등) 방어코드
  } catch (e) {
    alert(e.message);
  }
};
