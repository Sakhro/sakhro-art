import cn from "classnames";
import React, { FC } from "react";
import { IconType } from "react-icons/lib/cjs";
import { FormattedMessage } from "react-intl";

import { Button, Link } from "@components";

import { LINKS, SOCIALS } from "@config/global";

import c from "./Nav.scss";

interface IProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Nav: FC<IProps> = (props) => {
  const tabIndex = props.isVisible
    ? 0
    : -1;

  return (
    <nav className={cn(c.container, { [c.visible]: props.isVisible })}>
      <Button
        className={c.close}
        onClick={props.onClose}
        tabIndex={tabIndex}
      >
        <div />
      </Button>
      <ul className={c.links}>
        {LINKS.map(({ id, to }: LinkType) => (
          <li key={id}>
            <Link
              to={to}
              onClick={props.onClose}
              tabIndex={tabIndex}
              className={c.navLink}
            >
              <FormattedMessage id={id} />
            </Link>
          </li>
        ))}
      </ul>
      <footer className={c.footer}>
        {SOCIALS.map(({ id, Icon, href }: SocialLinkType) => (
          <Link
            key={id}
            href={href}
            tabIndex={tabIndex}
            className={c.socialLink}
          >
            <Icon />
          </Link>
        ))}
      </footer>
    </nav>
  );
};
