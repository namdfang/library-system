import request from "../utilities/requestService";

export function getAllDocuments(pageNum, pageSize) {
  return request({
    url: "/document-service",
    method: "get",
    params: {
      pageNum,
      pageSize,
    },
  });
}

export function postDocument({
  title,
  description,
  author,
  type,
  fileS3ObjectKey,
  thumbS3ObjectKey,
  createdBy,
  lastUpdatedBy,
}) {
  return request({
    url: "/document-service",
    method: "post",
    data: {
      title,
      description,
      author,
      fileS3ObjectKey,
      thumbS3ObjectKey,
      type,
      createdBy,
      lastUpdatedBy,
    },
  });
}

export function putDocument(data, id) {
  return request({
    url: `/document-service/${id}`,
    method: "put",
    data: {
      title: data.title,
      description: data.description,
      author: data.author,
      fileS3ObjectKey: data.fileS3ObjectKey,
      thumbS3ObjectKey: data.thumbS3ObjectKey,
      type: data.type,
      createdBy: data.createdBy,
      lastUpdatedBy: data.lastUpdatedBy,
    },
  });
}

export function deleteDocument(id) {
  return request({
    url: `/document-service/${id}`,
    method: "delete",
  });
}
