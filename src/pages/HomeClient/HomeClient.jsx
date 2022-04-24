import React from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/all";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { PATH } from "../../constants/path";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import "./HomeClient.scss";

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

export default function HomeClient() {
  const documentList = [
    {
      src: "https://templates.iqonic.design/booksto/html/images/browse-books/04.jpg",
      title: "Absteact On Background",
      author: "Ichae Semos",
      description:
        "Monterhing in the best book testem ipsum is simply dtest in find in a of the printing and typeseting industry into to end.in find in a of the printing and typeseting industry in find to make it all done into end.",
    },
    {
      src: "https://templates.iqonic.design/booksto/html/images/browse-books/06.jpg",
      title: "Find The Wave Book",
      author: "Fidel Martin",
      description:
        "Monterhing in the best book testem ipsum is simply dtest in find in a of the printing and typeseting industry into to end.in find in a of the printing and typeseting industry in find to make it all done into end.",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrNh2LzAoglgwTQ5JgVRCtIaWPJmGfKCaUhA&usqp=CAU",
      title: "See the More Story",
      author: "Jules Boutin",
      description:
        "Monterhing in the best book testem ipsum is simply dtest in find in a of the printing and typeseting industry into to end.in find in a of the printing and typeseting industry in find to make it all done into end.",
    },
    {
      src: "https://templates.iqonic.design/booksto/html/images/browse-books/12.jpg",
      title: "The Wikde Book",
      author: "Kusti Franti",
      description:
        "Monterhing in the best book testem ipsum is simply dtest in find in a of the printing and typeseting industry into to end.in find in a of the printing and typeseting industry in find to make it all done into end.",
    },
    {
      src: "https://templates.iqonic.design/booksto/html/images/browse-books/09.jpg",
      title: "Conversion Erik Routley",
      author: "Argele Intili",
      description:
        "Monterhing in the best book testem ipsum is simply dtest in find in a of the printing and typeseting industry into to end.in find in a of the printing and typeseting industry in find to make it all done into end.",
    },
    {
      src: "https://templates.iqonic.design/booksto/html/images/browse-books/10.jpg",
      title: "The Leo Dominica",
      author: "Henry Jurk",
      description:
        "Monterhing in the best book testem ipsum is simply dtest in find in a of the printing and typeseting industry into to end.in find in a of the printing and typeseting industry in find to make it all done into end.",
    },
    {
      src: "https://chiase24.com/wp-content/uploads/2022/02/Tong-hop-hinh-anh-Rose-Black-Pink-dep-nhat-1.jpg",
      title: "By The Editbeth Jat",
      author: "David King",
      description:
        "Monterhing in the best book testem ipsum is simply dtest in find in a of the printing and typeseting industry into to end.in find in a of the printing and typeseting industry in find to make it all done into end.",
    },
    {
      src: "https://templates.iqonic.design/booksto/html/images/browse-books/12.jpg",
      title: "Conversion Erik Routley",
      author: "Argele Intili",
      description:
        "Monterhing in the best book testem ipsum is simply dtest in find in a of the printing and typeseting industry into to end.in find in a of the printing and typeseting industry in find to make it all done into end.",
    },
    {
      src: "https://templates.iqonic.design/booksto/html/images/browse-books/02.jpg",
      title: "The Leo Dominica",
      author: "Henry Jurk",
      description:
        "Monterhing in the best book testem ipsum is simply dtest in find in a of the printing and typeseting industry into to end.in find in a of the printing and typeseting industry in find to make it all done into end.",
    },
    {
      src: "https://templates.iqonic.design/booksto/html/images/browse-books/01.jpg",
      title: "By The Editbeth Jat",
      author: "David King",
      description:
        "Monterhing in the best book testem ipsum is simply dtest in find in a of the printing and typeseting industry into to end.in find in a of the printing and typeseting industry in find to make it all done into end.",
    },
    {
      src: "https://i.pinimg.com/originals/9e/77/2f/9e772f9199293fe810fe60c54b371bcc.jpg",
      title: "By The Editbeth Jat",
      author: "David King",
      description:
        "Monterhing in the best book testem ipsum is simply dtest in find in a of the printing and typeseting industry into to end.in find in a of the printing and typeseting industry in find to make it all done into end.",
    },
    {
      src: "https://templates.iqonic.design/booksto/html/images/browse-books/04.jpg",
      title: "Conversion Erik Routley",
      author: "Argele Intili",
      description:
        "Monterhing in the best book testem ipsum is simply dtest in find in a of the printing and typeseting industry into to end.in find in a of the printing and typeseting industry in find to make it all done into end.",
    },
    {
      src: "https://templates.iqonic.design/booksto/html/images/browse-books/05.jpg",
      title: "The Leo Dominica",
      author: "Henry Jurk",
      description:
        "Monterhing in the best book testem ipsum is simply dtest in find in a of the printing and typeseting industry into to end.in find in a of the printing and typeseting industry in find to make it all done into end.",
    },
    {
      src: "https://templates.iqonic.design/booksto/html/images/browse-books/06.jpg",
      title: "By The Editbeth Jat",
      author: "David King",
      description:
        "Monterhing in the best book testem ipsum is simply dtest in find in a of the printing and typeseting industry into to end.in find in a of the printing and typeseting industry in find to make it all done into end.",
    },
  ];

  return (
    <MainLayout>
      <div className="container slider mt-5">
        <Swiper
          slidesPerView={"auto"}
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 1,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
        >
          <div className="swiper-container">
            {documentList.map((document, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <img src={document.src} alt="rose" />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      <div className="document bg-white mx-1 mx-sm-3 mx-xl-5 rounded-3 m-0 p-0">
        <div className="document-header d-flex justify-content-between align-items-center border-bottom p-3 px-sm-4 px-2">
          <b className="fs-5">Documents</b>
          <button className="btn py-1 px-2 text-white">View More</button>
        </div>
        <div className="document-content row p-4">
          {documentList.map((document, index) => (
            <div
              key={index}
              className="content-item col-sm-6 col-md-4 col-lg-3 p-2 mb-4 d-flex align-items-center"
            >
              <div className="item-img w-100 h-100">
                <img
                  src={document.src}
                  alt="img doc"
                  className="col-6 p-0 rounded-3"
                />
                <div className="img-cover rounded-3 d-flex justify-content-center align-items-center">
                  <Link rel="stylesheet" to={PATH.DETAIL_DOC}>
                    <button className="btn">Detail</button>
                  </Link>
                </div>
              </div>
              <div className="item-text col-6 ps-3">
                <p className="text-title m-0">{document.title}</p>
                <p className="text-author opacity-75 fst-italic fw-bold">
                  {document.author}
                </p>
                <p className="text-description ">{document.description}</p>
                <AiFillHeart className="text-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
