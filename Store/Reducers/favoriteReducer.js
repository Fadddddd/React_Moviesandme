const initialState = { favoritesFilm: [] };

function toggleFavorite(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const favoriteFilmIndex = state.favoritesFilm.findIndex(
        (item) => item.id === action.value.id
      );
      if (favoriteFilmIndex !== -1) {
        nextState = {
          ...state,
          favoritesFilm: state.favoritesFilm.filter(
            (item, index) => index !== favoriteFilmIndex
          ),
        };
      } else {
        nextState = {
          ...state,
          favoritesFilm: [...state.favoritesFilm, action.value],
        };
      }
      // renvoie l'objet  nextState  si celui-ci n'est pas undefined, sinon on renvoie l'objet  state
      // code robuste
      return nextState || state;
    default:
      return state;
  }
}

export default toggleFavorite;
