/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./editions.scss";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { singleComic } from "../../app/features/slices/comicsSlice";
function Editions() {
  const data = useSelector((state) => state.comics.filteredComics);
  const dispatch = useDispatch();
  const [editionPageNumber, setEditionPageNumber] = useState(0);
  const [page, setPage] = useState(0);

  const edComicsPerPage = 12;
  const edPagesVisited = editionPageNumber * edComicsPerPage;

  const edDisplayComics = data
    .slice(edPagesVisited, edPagesVisited + edComicsPerPage)
    .map((edcomic) => {
      return (
        <div className="col-md-3 col-6 edition-comics-preview" key={edcomic.id}>
          <div className="edition-comics-pic-div">
            <Link
              to={`single-comic/${edcomic.episode}`}
              onClick={() => {
                dispatch(
                  singleComic([
                    edcomic.img[0],
                    edcomic.img[1],
                    edcomic.img[2],
                    edcomic.img[3],
                    edcomic.episode,
                    edcomic.edition,
                    edcomic.hero,
                  ])
                );
                // console.log(singleComic);
              }}
            >
              <img src={edcomic.img[0]} alt={edcomic.episode} />
            </Link>
          </div>

          <div className="edition-comics-title">
            <h3>
              <Link to={`single-comic/${edcomic.episode}`}>
                {edcomic.edition} <br />
                {edcomic.episode}
              </Link>
            </h3>
          </div>
        </div>
      );
    });

  const edPageCount = Math.ceil(data.length / edComicsPerPage);
  const edChangePage = ({ selected }) => {
    setEditionPageNumber(selected);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setPage(selected);

    ////////////////////////////////////////////////
    const lastPageVisited = JSON.stringify(selected);
    const lastEd = JSON.stringify(selected);
    sessionStorage.setItem("lastPage", lastPageVisited);
    sessionStorage.setItem("EdPageNumber", lastEd);
  };

  useEffect(() => {
    // setPage(0);
    // setEditionPageNumber(0);
    setPage(JSON.parse(sessionStorage.getItem("lastPage")));
    setEditionPageNumber(JSON.parse(sessionStorage.getItem("EdPageNumber")));
  }, [data]);

  return (
    <div className="editions-wrapper">
      <div className="container-fluid">
        <div className="row">{edDisplayComics}</div>
      </div>

      {edPageCount < 2 ? null : (
        <div className="edition-pagination-holder">
          <ReactPaginate
            forcePage={page}
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={edPageCount}
            onPageChange={edChangePage}
            containerClassName={"ed-paginationBttns"}
            previousLinkClassName={"ed-previousBttns"}
            nextLinkClassName={"ed-nextBttns"}
            disabledLinkClassName={"ed-paginationLinkDisabled"}
            disabledClassName={"ed-paginationDisabled"}
            activeClassName={"ed-paginationActive"}
            pageLinkClassName={"ed-paginationLink"}
          />
        </div>
      )}
    </div>
  );
}

export default Editions;
