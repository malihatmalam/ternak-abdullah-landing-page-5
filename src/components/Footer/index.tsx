import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  FooterSection,
  NavLink,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  Language,
} from "./styles";


const Footer = ({ t }: any) => {

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Kontak")}</Language>
              <Large>{t("Beritahu Kami Semuanya")}</Large>
              <Para>
                {t(`Apakah Anda memiliki pertanyaan? Jangan ragu untuk menghubungi.`)}
              </Para>
              <a href="mailto:l.aryaamurya@gmail.com">
                <Chat>{t(`Mari berbincang`)}</Chat>
              </a>
            </Col>
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Alamat")}</Language>
              <Para>Jl Pengasihan Gangsal</Para>
              <Para>Nomor 12 Tegal</Para>
              <Para>Indonesia</Para>
            </Col>
          </Row>
          <Row justify="space-between">    
            <Col lg={6} md={6} sm={6} xs={6}>
              <Empty />
              <NavLink to="/">
                <LogoContainer>
                  <SvgIcon
                    src="logoTernak.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </LogoContainer>
              </NavLink>
            </Col>
          </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
