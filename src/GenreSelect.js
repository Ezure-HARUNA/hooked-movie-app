const TMDB_DISCOVER_MOVIE_LIST_API = "https://api.themoviedb.org/3/discover/movie";
const apiKEY = 'api_key=2afb754820db7bbf3a225c394207e494';

// Get Movies List By Filter
export const getFilteredMoviesList = ({genreSelected = [], rating = '', page = 1}) =>{
    const  genreList = genreSelected.join();
    const pageNum = page;
    const requestUrl = `${TMDB_DISCOVER_MOVIE_LIST_API}?${apiKEY}&sort_by=popularity.desc&include_adult=false&with_genres=${genreList}&vote_average.gte=${rating}&page=${pageNum}`;
  
    return axios.get(requestUrl).then((res) => {
      return res.data;
    }, (res) => {
      throw new Error(res);
    })
  }

  export const getFilteredMoviesListAsyncHandler = (genres) => {
    return (dispatch, getState) => {
      return getFilteredMoviesList(genres).then((res) => {
        dispatch(discoverMovie({ ...res,  ...genres}));
      })
      .catch((err) => {
        dispatch(showError(err));
      })
    }
  }