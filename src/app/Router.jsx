import { Switch, Route, Redirect } from "react-router-dom";
import { MoviesPage } from "./views/MoviesPage";
import { SingleMoviePage } from "./views/SingleMoviePage";
import { FormPage } from "./views/FormPage";

const Router = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/movies" />;
        }}
      />
      <Route exact path="/movies">
        <MoviesPage />
      </Route>
      <Route path="/movies/:id">
        <SingleMoviePage />
      </Route>
      <Route exact path="/submit">
        <FormPage />
      </Route>
    </Switch>
  );
};

export default Router;
