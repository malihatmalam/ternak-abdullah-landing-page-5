import { lazy } from "react";

import PrimaryProduct from "../../content/PrimaryProductContent.json";
import SecondaryProduct from "../../content/SecondaryProductContent.json";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Product = () => {
  return (
    <Container>
      <ScrollToTop />
      <MiddleBlock
        title={PrimaryProduct.title}
        content={PrimaryProduct.text}
        section={PrimaryProduct.section}
      />
      <MiddleBlock
        title={SecondaryProduct.title}
        content={SecondaryProduct.text}
        section={SecondaryProduct.section}
      />
    </Container>
  );
};

export default Product;
