import React from "react";

export default function ModalCase({ setIsOpen, film }) {
  return (
    <div className="modal-show" onClick={() => setIsOpen(false)}>
      <div
        id="modal1"
        className="modal"
      >
        <div className="modal-content">
            <iframe
              src={film.trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
        </div>
        <div className="modal-footer">
          <button className="download" ><span className="material-icons">download</span>Download</button>
          <button className="wishlist" ><span className="material-icons">favorite</span>Add to Favorite</button>
          <button className="exit" ><span className="material-icons">exit_to_app</span>Exit</button>
        </div>
      </div>
    </div>
  );
}
// #92011b
// #ad0101