import { lazy } from "react";
import AboutContent from "../../content/AboutContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const About = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={AboutContent.title}
        content={AboutContent.text}
        icon="about.svg"
        id="about"
      />
    </Container>
  );
};

export default About;
