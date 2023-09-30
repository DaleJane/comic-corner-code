import { createSlice } from "@reduxjs/toolkit";
import { allComics } from "../../../app/data/dataAll";

export const comicsSlice = createSlice({
  name: "comics",
  initialState: {
    filteredComics:
      JSON.parse(sessionStorage.getItem("lastFilter")) || allComics,
    singleComic: JSON.parse(sessionStorage.getItem("lastSingle")) || "",
  },
  reducers: {
    filterComics(state, action) {
      try {
        const filter = allComics.filter(
          (comic) => comic.sector === action.payload
        );
        const aaa = JSON.stringify((state.filteredComics = filter));
        sessionStorage.setItem("lastFilter", aaa);
        sessionStorage.setItem("lastPage", "0");
        sessionStorage.setItem("EdPageNumber", "0");
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      } catch (err) {
        return err;
      }
    },
    resetAllComics(state) {
      state.filteredComics = allComics;
      sessionStorage.removeItem("lastFilter");
      sessionStorage.setItem("lastPage", "0");
      sessionStorage.setItem("EdPageNumber", "0");
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
    filterHero(state, action) {
      try {
        const filter = allComics.filter(
          (comic) => comic.hero === action.payload
        );
        const ccc = JSON.stringify((state.filteredComics = filter));
        sessionStorage.setItem("lastFilter", ccc);
        sessionStorage.setItem("lastPage", "0");
        sessionStorage.setItem("EdPageNumber", "0");
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      } catch (err) {
        return err;
      }
    },

    singleComic(state, action) {
      const singl = action.payload;
      const bbb = JSON.stringify((state.singleComic = singl));

      sessionStorage.setItem("lastSingle", bbb);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
  },
});

export const {
  filterComics,
  resetAllComics,
  filterHero,
  singleComic,
  shuffle,
} = comicsSlice.actions;
export default comicsSlice.reducer;
