import React from "react";
import { Modal, Form, Input, Button } from "antd";
import "./CategoryModal.scss";

export default function CategoryModal(props) {
  const {
    creationModal,
    handleCancelModal,
    editionData,
    handleCreateCategory,
    handleEditCategory,
  } = props;

  const handleSubmit = (value) => {
    handleCancelModal();
    if (editionData) {
      handleEditCategory(value, editionData.id);
    } else {
      handleCreateCategory(value);
    }
  };

  return (
    <Modal
      centered={true}
      visible={creationModal || editionData}
      onCancel={() => {
        handleCancelModal();
      }}
      footer={[]}
      destroyOnClose={true}
    >
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 18 }}
        onFinish={handleSubmit}
        initialValues={editionData || { name: "" }}
      >
        <h2 className="modal-header">
          {editionData ? "Edit category" : "Create category"}
        </h2>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: "Please input the category name" },
          ]}
        >
          <Input className="inp-text" />
        </Form.Item>
        <div className="d-flex">
          <div className="ant-col-4"></div>
          <div className="btn-form ant-col-18">
            <Button
              className="btn-cancel btn"
              onClick={() => {
                handleCancelModal();
              }}
            >
              Cancel
            </Button>
            <Button
              className="btn-submit btn mx-2"
              type="primary"
              htmlType="submit"
            >
              {editionData ? "Save" : "Add"}
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  );
}
