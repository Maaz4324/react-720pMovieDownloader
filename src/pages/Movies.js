import React, { useState } from "react";
import { MoviesList } from "../assest/MoviesLists";
import "../style/Movies.css";
import { Link } from "react-router-dom";
import CardOpen from "../Components/CardOpen";

function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchClick = () => {
    console.log("clicked");
  };

  return (
    <div className="movies-container">
      {/* Bottom */}
      <div className="movies-bottom-container">
        {/* Bottom-left */}
        <div className="movies-left-container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Bollywood</Link>
            </li>
            <li>
              <Link to="/">Hollywood</Link>
            </li>
            <li>
              <Link to="/">Shows</Link>
            </li>
            <li>
              <Link to="/">Hindi Dubbed</Link>
            </li>
            <li>
              <Link to="/">Anime</Link>
            </li>
          </ul>
        </div>
        {/* Bottom-middle */}
        <div className="movies-mid-container">
          <div className="movies-search-container">
            <div className="searchBar-container">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  onClick={searchClick}
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="movies-list-container">
            {MoviesList.filter((moviesItem) => {
              if (searchTerm === "") {
                return moviesItem;
              } else if (
                moviesItem.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return moviesItem;
              }
            }).map((moviesItem, i) => {
              return (
                <CardOpen name={moviesItem.name} picture={moviesItem.picture} info={moviesItem.info} link={moviesItem.link}/>
              );
            })}
          </div>
        </div>
        {/* Bottom-Right */}
        <div className="movies-right-container my-5">
          <h3>Advertise</h3>
          <ul>
            <li className="my-2">ads</li>
            <li className="my-2">ads</li>
            <li className="my-2">ads</li>
            <li className="my-2">ads</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Movies;
