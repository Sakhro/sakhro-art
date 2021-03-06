import React, { FC, Fragment, useMemo } from "react";
import { FormattedMessage } from "react-intl";

import { Button, Hamburger, Img, Typography } from "@components";

import { MESSAGES } from "@config/i18n";
import { interpolator } from "@services/helpers";
import { useScrollOffset } from "@services/hooks";
import { getPageKey, getProdutKey, isHomePage, isProductPage } from "@services/navigation";
import { LeftArrowIcon } from "@static/images";

import c from "./Header.scss";
import { IProps } from "./types";

export const Header: FC<IProps> = props => {
  const scrollOffset = useScrollOffset();

  const opacity = useMemo(() => {
    switch (true) {
      case scrollOffset < 60:
        return interpolator(scrollOffset / 60, 0, 0.07);
      default:
        return interpolator(1, 0, 0.07);
    }
  }, [scrollOffset]);

  const containerStyle = useMemo(() => ({
    boxShadow: `0 5px 10px rgba(0, 0, 0, ${opacity})`,
  }), [opacity]);

  return (
    <header
      style={containerStyle}
      className={c.container}
    >
      {isProductPage(props) && (
        <Fragment>
          <Button
            className={c.backButton}
            onClick={props.history.goBack}
          >
            <Img alt="" src={LeftArrowIcon} imgClassName={c.arrowIcon} />
          </Button>
          <Typography component="h1" className={c.primaryTitle}>
            <FormattedMessage
              id={`lookbook.${getProdutKey(props)}`}
              defaultMessage={MESSAGES[`lookbook.${getProdutKey(props)}`]}
            />
          </Typography>
        </Fragment>
      )}
      {!isProductPage(props) && (
        <Typography component="h1" className={c.primaryTitle}>
          {isHomePage(props)
            ? (
              <FormattedMessage
                id={`common.olesyaSakhro`}
                defaultMessage={MESSAGES[`common.olesyaSakhro`]}
              />
            )
            : (
              <FormattedMessage
                id={`common.${getPageKey(props)}`}
                defaultMessage={MESSAGES[`common.${getPageKey(props)}`]}
              />
            )}
        </Typography>
      )}
      <Hamburger onClick={props.showNav} />
    </header>
  );
};
