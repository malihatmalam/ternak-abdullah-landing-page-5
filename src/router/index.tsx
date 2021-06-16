import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        <Route exact path="/" component={lazy(() => import(`../pages/Home`))} />
        <Route path="/product" component={lazy(() => import(`../pages/Product`))} />
        <Route path="/about" component={lazy(() => import(`../pages/About`))} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;