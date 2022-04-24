import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popconfirm, Pagination } from "antd";
import {
  AiOutlineDelete,
  FiEdit,
  RiAdminFill,
  IoDocumentsSharp,
} from "react-icons/all";
import { ToastContainer } from "react-toastify";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import HeaderContent from "../../components/HeaderContent/HeaderContent";
import DocumentModal from "../../components/DocumentModal/DocumentModal";
import LoadingPage from "../../components/Loading/LoadingPage";
import * as actions from "./Document.thunks";
import DOCUMNENT from "../../assets/images/docs.jpg";
import "react-toastify/dist/ReactToastify.css";
import "./global.scss";

export default function HomeCms(props) {
  const dispatch = useDispatch();
  const documents = useSelector((state) => ({
    documentList: state.document.documentList,
    loading: state.document.loading,
  }));
  const [page, setPage] = useState(1);
  const [documentPerPage, setDocumentPerPage] = useState(10);
  const [documentsTotal, setDocumentsTotal] = useState(0);
  const [creationModal, setCreationModal] = useState(false);
  const [editionData, setEditionData] = useState(null);
  const [documentId, setDocumentId] = useState(null);

  useEffect(() => {
    dispatch(actions.getDocumentList(page, documentPerPage)).then((res) =>
      setDocumentsTotal(res?.total)
    );
  }, [page, documentPerPage, documentsTotal]);

  const handleDeleteDocument = () => {
    dispatch(actions.deleteDocumentById(documentId));
    setDocumentId(null);
    setDocumentsTotal(documentsTotal - 1);
  };

  const handleCreateDocument = (document) => {
    dispatch(actions.createDocument(document));
    setDocumentsTotal(documentsTotal + 1);
  };

  const handleEditDocument = (document, id) =>
    dispatch(actions.editDocument(document, id));

  const handleCancelModal = () => {
    setCreationModal(false);
    setEditionData(null);
  };

  const onShowSizeChange = (_, pageSize) => {
    setDocumentPerPage(pageSize);
  };

  function itemRender(_, type, originalElement) {
    if (type === "prev") {
      return <Button>Previous</Button>;
    }
    if (type === "next") {
      return <Button>Next</Button>;
    }
    return originalElement;
  }

  return (
    <MainLayout>
      <HeaderContent
        title="Manage documents"
        iconMenu={<RiAdminFill className="icon-menu" />}
        itemMenu="Admin"
        iconSubMenu={<IoDocumentsSharp className="icon-sub-menu" />}
      />
      <div className="box bg-white rounded-3">
        <div className="header-box">
          <Button
            className="button-add text-white"
            type="primary"
            onClick={() => {
              setCreationModal(true);
            }}
            disabled={documents.loading}
          >
            Add document
          </Button>
        </div>
        {documents.loading && <LoadingPage />}
        <div className="box-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="id-col text-center">
                  No
                </th>
                <th scope="col" className="title-col">
                  <div>Image</div>
                </th>
                <th scope="col" className="title-col">
                  <div>Title</div>
                </th>
                <th scope="col" className="title-col">
                  <div>Author</div>
                </th>
                <th scope="col">Option</th>
              </tr>
            </thead>

            <tbody>
              {documents?.documentList?.map((document, index) => {
                return (
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td className="image-column">
                      <img
                        src={DOCUMNENT}
                        alt="document"
                        className="document-image"
                      />
                    </td>
                    <td className="title-column">{document.title}</td>
                    <td>{document.author} </td>
                    <td className="option">
                      <div className="icon-btn d-flex justify-content-between">
                        <Button
                          disabled={documents.loading}
                          className="border-0 btn-option"
                          onClick={() => {
                            setEditionData(document);
                          }}
                        >
                          <FiEdit className="icon-edit" />
                        </Button>
                        <Popconfirm
                          title="Are you sure to delete this document?"
                          onConfirm={handleDeleteDocument}
                          onCancel={() => {
                            setDocumentId(null);
                          }}
                          okText="Yes"
                          cancelText="No"
                          placement="rightTop"
                        >
                          <Button
                            className="border-0 btn-option"
                            onClick={() => {
                              setDocumentId(document.id);
                            }}
                            disabled={documents.loading}
                          >
                            <AiOutlineDelete className="icon-delete" />
                          </Button>
                        </Popconfirm>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="page">
          <div className="data-table-info">
            Showing 1 to {documentPerPage} of {documentsTotal} entries
          </div>
          <Pagination
            current={page}
            pageSize={documentPerPage}
            total={documentsTotal}
            itemRender={itemRender}
            showSizeChanger
            onChange={(value) => {
              setPage(value);
            }}
            onShowSizeChange={onShowSizeChange}
          />
        </div>
      </div>
      <DocumentModal
        creationModal={creationModal}
        handleCreateDocument={handleCreateDocument}
        handleCancelModal={handleCancelModal}
        editionData={editionData}
        handleEditDocument={handleEditDocument}
      />
      <ToastContainer
        position="top-right"
        style={{ fontWeight: "500", marginTop: "50px" }}
        autoClose={1500}
      />
    </MainLayout>
  );
}
