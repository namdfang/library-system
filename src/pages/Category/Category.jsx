import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiAdminFill, FiEdit, AiOutlineDelete } from "react-icons/all";
import { Button, Pagination, Popconfirm } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import HeaderContent from "../../components/HeaderContent/HeaderContent";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import * as actions from "./Category.thunks";
import "../HomeCms/global.scss";

export default function Category() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => ({
    categoryList: state.category.categoryList,
    loading: state.category.loading,
  }));
  const [page, setPage] = useState(1);
  const [categoriesTotal, setCategoriesTotal] = useState(0);
  const [categoryPerPage, setCategoryPerPage] = useState(10);
  const [creationModal, setCreationModal] = useState(false);
  const [editionData, setEditionData] = useState(null);
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    dispatch(actions.getCategoryList(page, categoryPerPage)).then((res) => {
      setCategoriesTotal(res?.total);
    });
  }, [page, categoryPerPage, categoriesTotal]);

  const onShowSizeChange = (_, pageSize) => {
    setCategoryPerPage(pageSize);
  };

  const handleCancelModal = () => {
    setCreationModal(false);
    setEditionData(null);
  };

  const handleCreateCategory = (category) => {
    dispatch(actions.createCategory(category));
    setCategoriesTotal(categoriesTotal + 1);
  };

  const handleEditCategory = (category, id) => {
    dispatch(actions.editCategory(category, id));
  };

  const handleDeleteCategory = () => {
    dispatch(actions.deleteCategoryById(categoryId));
    setCategoriesTotal(categoriesTotal - 1);
    setCategoryId(null);
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
        title="Manage categories"
        iconMenu={<RiAdminFill className="icon-menu" />}
        itemMenu="Admin"
      />
      <div className="box bg-white rounded-3">
        <div className="header-box">
          <Button
            className="button-add text-white"
            type="primary"
            onClick={() => {
              setCreationModal(true);
            }}
          >
            Add category
          </Button>
        </div>
        <div className="box-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="id-col text-center">
                  No
                </th>
                <th scope="col" className="title-col">
                  <div>Category name</div>
                </th>
                <th scope="col">Option</th>
              </tr>
            </thead>

            <tbody>
              {categories?.categoryList?.map((category, index) => {
                return (
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td className="title-column">{category.name}</td>
                    <td className="option">
                      <div className="icon-btn d-flex justify-content-between">
                        <Button
                          className="border-0 btn-option"
                          onClick={() => {
                            setEditionData(category);
                          }}
                        >
                          <FiEdit className="icon-edit" />
                        </Button>
                        <Popconfirm
                          title="Are you sure to delete this category?"
                          onConfirm={handleDeleteCategory}
                          onCancel={() => {
                            setCategoryId(null);
                          }}
                          okText="Yes"
                          cancelText="No"
                          placement="rightTop"
                        >
                          <Button
                            className="border-0 btn-option"
                            onClick={() => {
                              setCategoryId(category.id);
                            }}
                            disabled={categories.loading}
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
            Showing 1 to {categoryPerPage} of {categoriesTotal} entries
          </div>
          <Pagination
            current={page}
            pageSize={categoryPerPage}
            total={categoriesTotal}
            itemRender={itemRender}
            showSizeChanger
            showPrevNextJumpers
            onChange={(value) => {
              setPage(value);
            }}
            onShowSizeChange={onShowSizeChange}
          />
        </div>
      </div>
      <CategoryModal
        creationModal={creationModal}
        handleCancelModal={handleCancelModal}
        editionData={editionData}
        handleCreateCategory={handleCreateCategory}
        handleEditCategory={handleEditCategory}
      />
      <ToastContainer
        position="top-right"
        style={{ fontWeight: "500", marginTop: "50px" }}
        autoClose={1500}
      />
    </MainLayout>
  );
}
