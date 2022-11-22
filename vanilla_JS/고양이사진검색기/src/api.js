const API_END_POINT = "https://kdt-frontend.cat-search-api.programmers.co.kr/api/cats";

export const request = async (keyword) => {
  try {
    const res = await fetch(`${API_END_POINT}${keyword}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("서버의 상태가 이상합니다!");
    }
    return await res.json();
  } catch (e) {
    throw new Error(`${e.message}`);
  }
};
