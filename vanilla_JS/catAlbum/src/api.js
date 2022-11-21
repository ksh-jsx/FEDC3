const API_END_POINT = "https://kdt-frontend.cat-api.programmers.co.kr";

export const request = async (nodeId) => {
  try {
    const res = await fetch(`${API_END_POINT}${nodeId}`, {
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
