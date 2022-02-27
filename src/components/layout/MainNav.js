import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNav.module.css";
import FavoritesContext from "../../store/favorites-store";

const MainNav = () => {
  const FavoriteCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}> MEET-ME </div>
      <nav>
        <ul>
          <Link to="/">
            <li>AllMeetups</li>
          </Link>
          <Link to="favorites">
            <li>
              {" "}
              Favorites{" "}
              <span className={classes.badge}>
                {FavoriteCtx.totalFavorites}
              </span>
            </li>
          </Link>
          <Link to="new-meetups">
            <li> Add New MeetUp</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
