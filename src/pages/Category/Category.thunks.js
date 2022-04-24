import * as actions from "./Category.actions";
import * as Toast from "../../components/Notification/Toast";
import {
  getAllCategories,
  postCategory,
  putCategory,
  deleteCategory,
} from "../../apis/category.api";

export const getCategoryList = (pageNo, pageSize) => (dispatch) => {
  dispatch(actions.getCategoryListRequested());
  return getAllCategories(pageNo, pageSize)
    .then((res) => {
      dispatch(actions.getCategoryListSuccess(res));
      return res;
    })
    .catch((err) =>
      Promise.reject(dispatch(actions.getCategoryListFailed(err)))
    );
};

export const createCategory = (category) => (dispatch) => {
  dispatch(actions.getCategoryRequested());
  return postCategory(category)
    .then((res) => {
      dispatch(actions.addCategory(res));
      Toast.ToastSuccess("Category have been created successfully!!");
    })
    .catch((err) => {
      Promise.reject(dispatch(actions.getCategoryFailed));
      Toast.ToastError(`${err}`);
    });
};

export const editCategory = (category, id) => (dispatch) => {
  dispatch(actions.getCategoryRequested());
  return putCategory(category, id)
    .then((res) => {
      dispatch(actions.editCategory(res));
      Toast.ToastSuccess("Category have been edited successful!!");
    })
    .catch((err) => {
      Promise.reject(dispatch(actions.getCategoryFailed(err)));
      Toast.ToastError(`${err}`);
    });
};

export const deleteCategoryById = (id) => (dispatch) => {
  dispatch(actions.getCategoryRequested());
  return deleteCategory(id)
    .then((res) => {
      dispatch(actions.deleteCategory(id));
      Toast.ToastSuccess("Category have been deleted successfully!!");
    })
    .catch((err) => {
      Promise.reject(dispatch(actions.getCategoryFailed(err)));
      Toast.ToastError(`${err}`);
    });
};
