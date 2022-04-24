import React from "react";
import { Modal, Form, Input, Button, Select } from "antd";
import "./DocumentModal.scss";

export default function DocumentModal(props) {
  const {
    creationModal,
    handleCreateDocument,
    handleCancelModal,
    editionData,
    handleEditDocument,
  } = props;

  const handleSubmit = (value) => {
    handleCancelModal();
    if (editionData) {
      handleEditDocument(value, editionData.id);
    } else {
      handleCreateDocument(value);
    }
  };
  const { Option } = Select;
  const { TextArea } = Input;

  return (
    <Modal
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
        initialValues={
          editionData || { title: "", description: "", author: "" }
        }
      >
        <h2 className="modal-header">
          {editionData ? "Edit document" : "Create document"}
        </h2>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            { required: true, message: "Please input the document title" },
          ]}
        >
          <Input className="inp-text" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input the description" }]}
        >
          <TextArea className="inp-text" style={{ height: 120 }} />
        </Form.Item>
        <Form.Item
          label="Author"
          name="author"
          rules={[{ required: true, message: "Please input the author" }]}
        >
          <Input className="inp-text" />
        </Form.Item>
        <div className="type d-flex align-items-center">
          <div className="ant-col-4 type-lable">
            <label>Type</label>
            <span>:</span>
          </div>
          <Select className="ant-col-18" placeholder="Type">
            <Option value="word">Word</Option>
            <Option value="pdf">PDF</Option>
            <Option value="powerPoint">PowerPoint</Option>
          </Select>
        </div>
        <Form.Item
          label="File"
          name="fileS3ObjectKey"
          rules={[{ required: true, message: "Please input the file" }]}
        >
          <Input className="inp-text" />
          {/* <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
            <Button icon={<UploadOutlined />}>Upload File</Button>
          </Upload> */}
        </Form.Item>
        <Form.Item label="Image" name="thumbS3ObjectKey">
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
