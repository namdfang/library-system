import React, { useState } from "react";
import { Input } from "antd";
import { AiFillHeart, BsThreeDots, MdDateRange } from "react-icons/all";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import DocDetailModal from "../../components/FilePdfModal/DocDetailModal";
import "./DetailDoc.scss";

export default function HomeClient() {
  const listComment = [
    {
      avatar:
        "https://chiase24.com/wp-content/uploads/2022/02/Tong-hop-hinh-anh-Rose-Black-Pink-dep-nhat-1.jpg",
      name: "Fidel Martin",
      time: "01-01-2021",
      content:
        "Monterhing in the best book testem ipsum is simply dtest in find  in a of the printing and typeseting industry into to end.in find",
    },
    {
      avatar:
        "https://meta.vn/Data/image/2021/10/12/hinh-anh-rose-blackpink-cute-ngau-dep-nhat-3.jpg",
      name: "Ichae Semos",
      time: "11-02-2021",
      content: "hello everyone",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP53x9WcPVyNKO9gGsMyin3tuovq4kNGHIoA&usqp=CAU",
      name: "Jules Boutin",
      time: "11-11-2021",
      content:
        "Monterhing in the best book testem ipsum is simply dtest in findin a of the printing and typeseting industry into to end.in findin a of the printing and typeseting industry in find to make it all done into end",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiE8cTdanaHIr-F2p5F2DmO6dQ1vbM6fMZNQ&usqp=CAU",
      name: "Kusti Franti",
      time: "22-02-2021",
      content: "hello everyone",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleCancelModal = () => {
    setShowModal(false);
  };

  return (
    <MainLayout>
      <div className="bg-white mx-md-4 rounded-3">
        <div className="document">
          <div className="border-bottom px-4 py-3">
            <p className="m-0 fs-5 fw-bold">Document description</p>
          </div>
          <div>
            <div className="p-3 p-md-4 d-flex row align-items-center flex-column flex-lg-row me-0">
              <div className="document-img col-6 col-md-5 col-xl-4">
                <img
                  src="https://templates.iqonic.design/booksto/html/images/browse-books/09.jpg"
                  alt="img doc"
                />
              </div>
              <div className="document-text col-12 col-lg-7">
                <p className="text-title mb-1">A Casey Christi night books</p>
                <p className="text-author fst-italic">
                  Author: <span>Jhone Steben</span>
                </p>
                <p className="text-description">
                  Monterhing in the best book testem ipsum is simply dtest in
                  find in a of the printing and typeseting industry into to
                  end.in find in a of the printing and typeseting industry in
                  find to make it all done into end. Monterhing in the best book
                  testem ipsum is simply dtest in find in a of the printing and
                  typeseting industry into to end.in find in a of the printing
                  and typeseting industry in find to make it all done into
                  end.Monterhing in the best book testem ipsum is simply dtest
                  in find in a of the printing and typeseting industry into to
                  end.in find in a of the printing and typeseting industry in
                  find to make it all done into end.
                </p>
                <hr />
                <div className="fs-3 mt-3">
                  <AiFillHeart className="btn-add" />
                  <span className="fs-6"> Add to Wishlist</span>
                </div>
                <button
                  className="btn btn-read fs-6 mt-3"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Reading online
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 p-md-4 text-center d-flex justify-content-center mt-5">
          <div className="comments">
            <div className="px-2 p-md-0 d-flex justify-content-between fw-bold">
              <p>100 comment</p>
              <p>sort by</p>
            </div>
            <hr className="mt-0 mb-5" />
            <div className="px-0 px-md-5 pb-5">
              <div className="cmt-input-form d-flex justify-content-between">
                <div>
                  <img
                    src="https://chiase24.com/wp-content/uploads/2022/02/Tong-hop-hinh-anh-Rose-Black-Pink-dep-nhat-1.jpg"
                    alt="avatar"
                    className="rounded-circle me-2"
                  />
                </div>
                <div className="text-end flex-fill">
                  <form action="">
                    <div className="text-wrap">
                      <Input.TextArea
                        className="input-cmt"
                        placeholder="Add your comment..."
                        autoSize={{ minRows: 2 }}
                        bordered="false"
                      />
                    </div>
                    <button className="btn btn-add-cmt mt-2 px-4" type="submit">
                      Comment
                    </button>
                  </form>
                </div>
              </div>
              {listComment.map((comment, index) => (
                <div key={index} className="comment d-flex mt-4 text-start">
                  <div className="comment-img">
                    <img
                      src={comment.avatar}
                      className="rounded-circle me-2"
                      alt="avatar"
                    />
                  </div>
                  <div className="comment-text flex-fill px-3 py-2 pb-3">
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="text-name mb-0 fw-bold">{comment.name}</p>
                        <p className="text-time mb-0">
                          <MdDateRange className="mb-1 me-1" />
                          {comment.time}
                        </p>
                      </div>
                      <div>
                        <BsThreeDots
                          className="dropdown-btn fs-4 dropdown-toggle rounded-circle"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        />
                        <ul
                          class="dropdown-menu dropdown-menu-end p-0"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li className="dropdown-item">Edit</li>
                          <li className="dropdown-item">Remove</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-content mb-0 mt-1">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DocDetailModal
        showModal={showModal}
        handleCancelModal={handleCancelModal}
      />
    </MainLayout>
  );
}
