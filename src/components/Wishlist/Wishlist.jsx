import { TiDelete } from "react-icons/all";
import "./Wishlist.scss";

export default function Wishlist() {
  const wishlist = [
    {
      image:
        "https://templates.iqonic.design/booksto/html/images/browse-books/04.jpg",
      author: "Ichae Semos",
      title: "Absteact On Background Absteact On Background",
    },
    {
      image:
        "https://templates.iqonic.design/booksto/html/images/browse-books/06.jpg",
      author: "Fidel Martin",
      title: "Find The Wave Book",
    },
    {
      image:
        "https://templates.iqonic.design/booksto/html/images/browse-books/12.jpg",
      author: "Kusti Franti",
      title: "The Wikde Book",
    },
  ];

  return (
    <section className="wishlist py-3 px-2">
      {wishlist.map((item, index) => (
        <div
          key={index}
          className="document d-flex justify-content-between align-items-center mb-2 px-2 py-2 rounded-3"
        >
          <div className="d-flex">
            <img src={item.image} className="rounded-1" alt="document" />
            <div className="mx-2">
              <p className="document-title mb-0">{item.title}</p>
              <p className="document-author mb-0 opacity-70">{item.author}</p>
            </div>
          </div>
          <TiDelete className="btn-delete fs-3" />
        </div>
      ))}
    </section>
  );
}
