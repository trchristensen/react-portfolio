import { atom, selector } from 'recoil';

const url = '/data.json';


export const resumeState = selector({
  key: "resumeState",
  get: async ({ get }) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
      throw error;
    }
  },
});
