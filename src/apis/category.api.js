import request from "../utilities/requestService";

export function getAllCategories(page, page_size) {
  return request({
    url: `/category-service`,
    method: "get",
    params: {
      page,
      page_size,
    },
  });
}

export function postCategory({ name }) {
  return request({
    url: "/category-service",
    method: "post",
    data: { name },
  });
}

export function putCategory(data, id) {
  return request({
    url: `/category-service/${id}`,
    method: "put",
    data: {
      name: data.name,
    },
  });
}

export function deleteCategory(id) {
  return request({
    url: `/category-service/${id}`,
    method: "delete",
  });
}
