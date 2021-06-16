import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { ProductPicture } from "../../common/ProductPicture";
import { MiddleBlockSection, Content, ContentWrapper, MinTitle,
  MinPara, } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  section?: any;
  t: any;
}

const MiddleBlock = ({ title, content, t, section }: MiddleBlockProps) => {
  return (
    <MiddleBlockSection>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <Row justify="center" align="middle" >  
              {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={8}>
                          <ProductPicture src={item.icon} width="200px" height="200px" borderRadius="30%" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
              </Row>
            </Col>
          </ContentWrapper>
        </Row>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
