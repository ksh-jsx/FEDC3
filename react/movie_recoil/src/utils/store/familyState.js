import { atomFamily } from "recoil";

export const familyState = atomFamily({
  key: "familyState",
  default: (id) => {
    return {
      id,
      name: "",
    };
  },
});
