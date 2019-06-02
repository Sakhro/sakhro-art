import React, { memo } from "react";

import { Img } from "@components";

import { HomeSM } from "@static/images";

import c from "./HomePage.scss";

export const HomePage = memo(() => (
  <div className={c.container}>
    <Img
      src={HomeSM}
      alt="Olesya Sakhro"
      className={c.backgroundImg}
    />
  </div>
));
