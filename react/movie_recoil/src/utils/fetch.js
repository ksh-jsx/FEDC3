import { API_END_POINT } from "./key";
import { ERROR_SERVER } from "./const";

export const request = async (parameters) => {
  try {
    const res = await fetch(`${API_END_POINT}&${parameters}`);

    if (!res.ok) {
      throw new Error(ERROR_SERVER);
    }
    return await res.json();
  } catch (e) {
    throw new Error(`${e.message}`);
  }
};
