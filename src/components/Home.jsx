import React, { createContext, useEffect, useState } from "react";
import { debounce } from "lodash";
import { GenreList } from "./GenreList";
import { Movies } from "./Movies";
import { Navbar } from "./Navbar";
import { TicketBooking } from "./TicketBooking";
import { apiUrl } from "./API";
import { Overlay } from "./Overlay";
import apicalls from "./utills/apicalls";
import { UserValidation } from "./UserValidation";
import "../App.css";

export const UserContex = createContext();

const Home = ()=> {

  const [price, setPrice] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [playNowList, setPlayNowList] = useState(null);
  const [stateUp, setStateUp] = useState({
    seatData: null,
    flag: false,

  });

  const [checkOverlay, setCheckOverlay] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const [movieHeading,setMovieHeading] = useState('Now Playing');

  useEffect(() => {
    const genresList = async () => {
      if (localStorage.getItem("genres") === null) {
        const getData = await apicalls(
          `${apiUrl.base}${apiUrl.getGenres}?api_key=${apiUrl.key}`
        );
        localStorage.setItem("genres", JSON.stringify(getData.data.genres));
        setApiData(getData.data.genres);
      } else {
        const currentData = localStorage.getItem("genres");
        setApiData(JSON.parse(currentData));
      }
    };
    
    genresList();

    const nowPlayingList = async () => {
        const getData = await apicalls(
          `${apiUrl.base}${apiUrl.nowPlaying}?api_key=${apiUrl.key}&page=1`
        );
        localStorage.setItem("movie", JSON.stringify(getData.data.results));
        setPlayNowList(getData.data.results);
    };
    nowPlayingList();
  }, []);

  const stateUpLift = (arg, arg2) => {
    setStateUp({
      stateUp: arg,
      flag: true,
    });
    setPrice(arg2);
    if (!loginStatus) {
      setCheckOverlay(true);
    }
  };

  const checkForLoginStatus = () => {
    if (sessionStorage.getItem("login") !== null) {
      const data = JSON.parse(sessionStorage.getItem("login"));
      setLoginStatus(data.status);
    } else {
      setLoginStatus(true);
    }
  };

  const overlayFlagCheck = () => {
    setCheckOverlay(false);
  };

  const loginFunction = () => {
    if (sessionStorage.getItem("login") !== null) {
      const data = JSON.parse(sessionStorage.getItem("login"));
      setLoginStatus(data.status);
    }
  };
  useEffect(() => {
    loginFunction();
  }, []);

  const newApicall = (genre) => {
    const getByGenresID = async () => {
      const moviesWithGenres = await apicalls(`${apiUrl.base}discover/movie?api_key=${apiUrl.key}&language=en-US&with_genres=${genre.id}`);
      setPlayNowList(moviesWithGenres.data.results);
      setMovieHeading(genre.name)
    }
    getByGenresID()
  }

  const apiCallForSearch = debounce((search) => {
    const searchMovieApiCall = async () => {
      const mavieName = await apicalls(`${apiUrl.base}search/movie?api_key=${apiUrl.key}&page=1&query=${search}`);
      setPlayNowList(mavieName.data.results);
      setMovieHeading(`Search Results for : ${search}`);
    }
    if(search.length !== 0){
      searchMovieApiCall();
    }
  }, 1000)
  
  return (
    <>
      <Navbar checkForLoginStatus={checkForLoginStatus} searchMovie = {apiCallForSearch} />
      <UserContex.Provider value={price}>
        {loginStatus && stateUp.flag ? (
          <TicketBooking BookingData={stateUp} />
        ) : (
          <div className="genres-content">
            <GenreList heading="Genres" apiData={apiData} newApicall={newApicall} />
            <Movies
              heading={movieHeading}
              imagePath={apiUrl.imageBase}
              apiData={playNowList}
              flagStatus={stateUpLift}
            />
          </div>
        )}
      </UserContex.Provider>
      {checkOverlay && (
        <Overlay functionCall={overlayFlagCheck}>
          <UserValidation />
        </Overlay>
      )}
    </>
  );
}

export default Home;
