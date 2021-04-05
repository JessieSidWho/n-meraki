import { lazy, Fragment } from "react";
import { Row } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="nm.png"
                    aria-label="homepage"
                    width="60px"
                    height="60px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
              <SocialLink
                  href="mailto:jerahmeraki@gmail.com"
                  src="envelope-regular.svg"
                />
                <SocialLink
                  href=""
                  src="instagram-brands.svg"
                />
                <SocialLink
                  href="tel:"
                  src="phone-solid.svg"
                />
                {/* <SocialLink
                  href=""
                  src=""
                /> */}
                {/* <SocialLink
                  href="https://medium.com/@lashakakabadze/"
                  src="medium.svg"
                /> */}
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
