import * as types from "./Category.constants";

export const getCategoryListRequested = () => ({
  type: types.GET_CATEGORY_LIST_REQUESTED,
});

export const getCategoryListSuccess = (payload) => {
  return {
    type: types.GET_CATEGORY_LIST_SUCCESS,
    payload,
  };
};

export const getCategoryListFailed = (payload) => ({
  type: types.GET_CATEGORY_LIST_FAILED,
  payload,
});

export const getCategoryRequested = () => ({
  type: types.CATEGORY_REQUESTED,
});

export const getCategoryFailed = (payload) => ({
  type: types.CATEGORY_FAILED,
  payload,
});

export const addCategory = (payload) => {
  return {
    type: types.ADD_CATEGORY_SUCCESS,
    payload,
  };
};

export const editCategory = (payload) => ({
  type: types.EDIT_CATEGORY_SUCCESS,
  payload,
});

export const deleteCategory = (payload) => ({
  type: types.DELETE_CATEGORY_SUCCESS,
  payload,
});
