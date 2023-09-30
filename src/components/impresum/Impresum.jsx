import React, { useState, useCallback } from "react";
import "./impresum.scss";
import { photos } from "../../app/data/dataAll";
import ImageViewer from "react-simple-image-viewer";

export default function Impresum() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const images = photos.map((image) => image.src);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div className="impresum-div">
      <div className="impresum-wrapper">
        <div className="impresum-first-text">
          {" "}
          <div className="impresum-title">
            <h4>MI SMO VESELI CETVRTAK!</h4>
          </div>
          <div className="impresum-par">
            <p>
              <strong>direktor:</strong> Zoran Živanović
              <br />
              <strong>glavni urednik:</strong> Dušan Mladenović
              <br />
              <strong>rukovodilac za razvoj:</strong> Bogdan Tišma
              <br />
              <strong>urednici izdanja:</strong> Marko Šelić, Vladimir Tadić,
              Goran Skrobonja
              <br />
              <strong>prevodioci:</strong> Aleksandra Milovanović, Marija
              Đorđević, Sandra Knežević, Jelena Galebović, Nevena Glibetić,
              Đorđe Dimitrijević
              <br />
              <strong>redakcija:</strong> Igor Malović, Aleksandar Mićić, Emina
              Ignjatović, Vuk Popadić, Lazar Dimitrijević, Darko Đokić,
              Kristijan Relić, Vladimir Marković Looney
              <br />
              <strong>Klub čitalaca:</strong> Jelena Jevtić, Stanislava
              Matanović, Milica Krčadinac, Mirko Ribarović, Lidija Mihajlović
              <br />
              <strong>webmaster:</strong> Vladimir Oreščanin
              <br />
            </p>
          </div>
        </div>
        <div className="impresum-gallery-holder">
          <div className="impresum-gallery">
            {photos.map((image, index) => (
              <img
                src={image.srcthu}
                onClick={() => openImageViewer(index)}
                width="150"
                key={index}
                alt=""
              />
            ))}

            {isViewerOpen && (
              <ImageViewer
                src={images}
                currentIndex={currentImage}
                disableScroll={true}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            )}
          </div>
        </div>
        <div className="impresum-second-text">
          <p>
            © Društvo za izdavanje časopisa i sličnih periodičnih izdanja Veseli
            četvrtak d. o. o.
            <br />
            Sva prava zadržana.
          </p>
        </div>
      </div>
    </div>
  );
}
