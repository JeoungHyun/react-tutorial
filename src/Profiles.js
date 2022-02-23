import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return(
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="/profile/velopert">velopert</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        exect
        render={() => <div>사용자를 선택해 주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};
export default Profiles;
