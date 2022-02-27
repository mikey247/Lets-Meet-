import { useContext } from "react";
import FavoritesContext from "../store/favorites-store";
import MeetUpList from "../components/meetups/MeetUpList";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetUpList meetups={favoritesCtx.favorites} />;
  }

  return (
    <div>
      <h1>My Favorite Meetups</h1>
      {content}
    </div>
  );
};

export default Favorites;
