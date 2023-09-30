/* eslint-disable */
import React, { useState } from "react";
import "./groupComics.scss";
import { Link } from "react-router-dom";
import { allComics, noviteti } from "../../../app/data/dataAll";
import { useDispatch } from "react-redux";
import { singleComic } from "../../../app/features/slices/comicsSlice";

export default function GroupComics() {
  const dispatch = useDispatch();
  const [newComics, setNewComics] = useState(
    noviteti.filter((newFiveAll) => newFiveAll.sector.includes("Noviteti"))
  );

  const [newGolden, setNewGolden] = useState(
    allComics
      .filter((newFiveGolden) => newFiveGolden.sector.includes("Zlatna serija"))
      .slice(0, 5)
  );

  const [newColor, setNewColor] = useState(
    allComics
      .filter((newFiveColor) => newFiveColor.sector.includes("Obojeni program"))
      .slice(0, 5)
  );
  const [newSelected, setNewSelected] = useState(
    allComics
      .filter((newFiveSelected) =>
        newFiveSelected.sector.includes("Odabrane Price")
      )
      .slice(0, 5)
  );
  const [newCollection, setNewCollection] = useState(
    allComics
      .filter((newFiveCollection) =>
        newFiveCollection.sector.includes("Posebna izdanja")
      )
      .slice(0, 5)
  );

  const [first, setFirst] = useState(newComics);

  return (
    <div className="comic-group-wrapper">
      <div className="comics-group-nav">
        <div className="comics-list-wrapper">
          <ul className="comics-list">
            <li className="li-comics">
              <Link
                className={
                  first === newComics ? "comics-under-active" : "comics-under"
                }
                onClick={() => setFirst(newComics)}
                to="/"
              >
                <span>NOVITETI</span>
              </Link>
            </li>
            <li className="li-comics">
              <Link
                className={
                  first === newGolden ? "comics-under-active" : "comics-under"
                }
                onClick={() => setFirst(newGolden)}
                to="/"
              >
                <span>ZLATNA SERIJA</span>
              </Link>
            </li>
            <li className="li-comics">
              <Link
                className={
                  first === newColor ? "comics-under-active" : "comics-under"
                }
                onClick={() => setFirst(newColor)}
                to="/"
              >
                <span>OBOJENI PROGRAM</span>
              </Link>
            </li>

            <li className="li-comics">
              <Link
                className={
                  first === newSelected ? "comics-under-active" : "comics-under"
                }
                onClick={() => setFirst(newSelected)}
                to="/"
              >
                <span>ODABRANE PRICE</span>
              </Link>
            </li>

            <li className="li-comics">
              <Link
                className={
                  first === newCollection
                    ? "comics-under-active"
                    : "comics-under"
                }
                onClick={() => setFirst(newCollection)}
                to="/"
              >
                <span>KOLEKCIONARSKA IZDANJA</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row pic-holder">
            {first.map((novo) => (
              <div
                key={novo.id}
                className="col-sm-6 col-md-4 col-lg-3 col-xl col-6 pic"
              >
                <div className="pic-img-wrapper">
                  <Link
                    to={novo.path}
                    onClick={() => {
                      dispatch(
                        singleComic([
                          novo.img[0],
                          novo.img[1],
                          novo.img[2],
                          novo.img[3],
                          novo.episode,
                          novo.edition,
                          novo.hero,
                          novo.path,
                        ])
                      );
                      // console.log(singleComic);
                    }}
                  >
                    <img src={novo.img[0]} alt={novo.id} />
                  </Link>
                </div>
                <div>
                  <h3>
                    <Link
                      className="novo-text"
                      to={novo.path}
                      onClick={() => {
                        dispatch(
                          singleComic([
                            novo.img[0],
                            novo.img[1],
                            novo.img[2],
                            novo.img[3],
                            novo.episode,
                            novo.edition,
                            novo.hero,
                            novo.path,
                          ])
                        );
                        // console.log(singleComic);
                      }}
                    >
                      {novo.edition} <br /> {novo.hero} <br />
                      {novo.episode}
                    </Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
