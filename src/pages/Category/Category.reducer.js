import produce from "immer";
import * as types from "./Category.constants";

const initialState = {
  loading: false,
  categoryList: [],
  total: 0,
};

export const categoryReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_CATEGORY_LIST_REQUESTED:
        draft.loading = true;
        break;
      case types.GET_CATEGORY_LIST_SUCCESS:
        draft.loading = false;
        draft.categoryList = action.payload.pageData;
        draft.total = action.payload.total;
        break;
      case types.GET_CATEGORY_LIST_FAILED:
        draft.loading = false;
        break;
      case types.CATEGORY_REQUESTED:
        draft.loading = true;
        break;
      case types.CATEGORY_FAILED:
        draft.loading = false;
        break;
      case types.ADD_CATEGORY_SUCCESS:
        draft.loading = false;
        draft.categoryList.push(action.payload);
        break;
      case types.EDIT_CATEGORY_SUCCESS:
        draft.loading = false;
        const index = draft.categoryList.findIndex(
          (item) => item.id === action.payload.id
        );
        draft.categoryList[index] = action.payload;
        break;
      case types.DELETE_CATEGORY_SUCCESS:
        draft.loading = false;
        const newCategoryList = draft.categoryList.filter(
          (item) => item.id !== action.payload
        );
        draft.categoryList = newCategoryList;
        break;
      default:
        return state;
    }
  });
