import * as actions from "./Document.actions";
import * as Toast from "../../components/Notification/Toast";
import {
  getAllDocuments,
  postDocument,
  putDocument,
  deleteDocument,
} from "../../apis/document.api";

export const getDocumentList = (pageNum, pageSize) => (dispatch) => {
  dispatch(actions.getDocumentListRequested());
  return getAllDocuments(pageNum, pageSize)
    .then((res) => {
      dispatch(actions.getDocumentListSuccess(res));
      return res;
    })
    .catch((err) =>
      Promise.reject(dispatch(actions.getDocumentListFailed(err)))
    );
};

export const createDocument = (document) => (dispatch) => {
  dispatch(actions.getDocumentRequested());
  return postDocument(document)
    .then((res) => {
      dispatch(actions.addDocument(res));
      Toast.ToastSuccess("Document have been created successfully!!");
    })
    .catch((err) => {
      Promise.reject(dispatch(actions.getDocumentFailed));
      Toast.ToastError(`${err}`);
    });
};

export const editDocument = (document, id) => (dispatch) => {
  dispatch(actions.getDocumentRequested());
  return putDocument(document, id)
    .then((res) => {
      dispatch(actions.editDocument(res));
      Toast.ToastSuccess("Document have been edited successful!!");
    })
    .catch((err) => {
      Promise.reject(dispatch(actions.getDocumentFailed(err)));
      Toast.ToastError(`${err}`);
    });
};

export const deleteDocumentById = (id) => (dispatch) => {
  dispatch(actions.getDocumentRequested());
  return deleteDocument(id)
    .then((res) => {
      dispatch(actions.deleteDocument(res));
      Toast.ToastSuccess("Document have been deleted successfully!!");
    })
    .catch((err) => {
      Promise.reject(dispatch(actions.getDocumentFailed(err)));
      Toast.ToastError(`${err}`);
    });
};
