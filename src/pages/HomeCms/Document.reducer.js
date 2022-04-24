import produce from "immer";
import * as types from "./Document.constants";

const initialState = {
  loading: false,
  documentList: [],
};

export const documentReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_DOCUMENT_LIST_REQUESTED:
        draft.loading = true;
        break;
      case types.GET_DOCUMENT_LIST_SUCCESS:
        draft.loading = false;
        draft.documentList = action.payload.pageData;
        break;
      case types.GET_DOCUMENT_LIST_FAILED:
        draft.loading = false;
        break;
      case types.DOCUMENT_REQUESTED:
        draft.loading = true;
        break;
      case types.DOCUMENT_FAILED:
        draft.loading = false;
        break;
      case types.ADD_DOCUMENT_SUCCESS:
        draft.loading = false;
        draft.documentList.push(action.payload);
        break;
      case types.EDIT_DOCUMENT_SUCCESS:
        draft.loading = false;
        const index = draft.documentList.findIndex(
          (item) => item.id === action.payload.id
        );
        draft.documentList[index] = action.payload;
        break;
      case types.DELETE_DOCUMENT_SUCCESS:
        draft.loading = false;
        const newListDoc = draft.documentList.filter(
          (item) => item.id !== action.payload.id
        );
        draft.documentList = newListDoc;
        break;
      default:
        return state;
    }
  });
