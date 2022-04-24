import * as types from "./Document.constants";

export const getDocumentListRequested = () => ({
  type: types.GET_DOCUMENT_LIST_REQUESTED,
});

export const getDocumentListSuccess = (payload) => {
  return {
    type: types.GET_DOCUMENT_LIST_SUCCESS,
    payload,
  };
};

export const getDocumentListFailed = (payload) => ({
  type: types.GET_DOCUMENT_LIST_FAILED,
  payload,
});

export const getDocumentRequested = () => ({
  type: types.DOCUMENT_REQUESTED,
});

export const getDocumentFailed = (payload) => ({
  type: types.DOCUMENT_FAILED,
  payload,
});

export const addDocument = (payload) => ({
  type: types.ADD_DOCUMENT_SUCCESS,
  payload,
});

export const editDocument = (payload) => ({
  type: types.EDIT_DOCUMENT_SUCCESS,
  payload,
});

export const deleteDocument = (payload) => ({
  type: types.DELETE_DOCUMENT_SUCCESS,
  payload,
});
