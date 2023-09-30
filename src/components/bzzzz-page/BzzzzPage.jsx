import React, { useState } from "react";
import "./bzzzzPage.scss";
import { Link } from "react-router-dom";
import { dataBzzz } from "../../app/data/dataAll";
import bzzzLogoLarge from "../../assets/bzzzsection/bzzzlogolarge.png";
import ReactPaginate from "react-paginate";

export default function BzzzzPage() {
  // eslint-disable-next-line
  const [bzData, setBzData] = useState(dataBzzz);
  const [pageNumber, setPageNumber] = useState(0);
  const [bz, setBz] = useState(false);

  const toggleBzzzz = () => {
    if (window.scrollY >= 45) {
      setBz(true);
    } else {
      setBz(false);
    }
  };

  window.addEventListener("scroll", toggleBzzzz);

  const comicsPerPage = 10;
  const pagesVisited = pageNumber * comicsPerPage;

  const displayComics = bzData
    .slice(pagesVisited, pagesVisited + comicsPerPage)
    .map((comic) => {
      return (
        <div key={comic.id} className="bz-wrapper">
          <div className="bz-content-holder">
            <div
              className="bz-pic-holder"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "instant" })
              }
            >
              <Link to="article">
                <div className="layer layer-sec">
                  <img src={comic.image} alt="zagor-legend" />
                </div>
              </Link>
            </div>
            <div className="bz-text-holder">
              <h3>
                <a href={comic.path}>{comic.name}</a>
              </h3>
              <div>
                <div className="autor">
                  <span className="span-autor">autor:</span> {comic.autor}
                </div>

                <p>{comic.text}</p>
                <p
                  id="nastavi"
                  onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
                  }
                >
                  <Link to={comic.path}>NASTAVI SA CITANJEM ...</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(bzData.length / comicsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <div className="bz">
      <div className={bz === true ? "bzzz-page-div-closed" : "bzzz-page-div"}>
        <div className="bzzz-div-img-holder">
          <img src={bzzzLogoLarge} alt="bzzz logo large" />
        </div>
      </div>
      <div className="bz-map-div">
        {displayComics}
        <div className="pagination-holder">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttns"}
            nextLinkClassName={"nextBttns"}
            disabledLinkClassName={"paginationLinkDisabled"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            pageLinkClassName={"paginationLink"}
          />
        </div>
      </div>
    </div>
  );
}
