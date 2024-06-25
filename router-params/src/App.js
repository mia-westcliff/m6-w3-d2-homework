import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import medialist from "./medialist.txt";

export default function App() {
  return (
    <Router>
      <div>
        {medialist.map((media, index) => (
          <Link key={index} to={`/${media.name}`} className={media.class}>
            <img src={media.url} alt={media.name} />
          </Link>
        ))}
        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
}

function Child() {
  let { id } = useParams();
  return (
    <div>
      <h3>You Selected: <span>{id}</span></h3>
    </div>
  );
}
