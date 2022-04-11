import { FC } from "react";

import {Footer} from "../../components/footer";
import {Topline} from "../../components/topline";

import styles from "./base.module.scss";

export const BasePage: FC= ({ children }) => (
  <>
    <Topline />
    <div className={styles.wrapper}>{children}</div>
    <Footer />
  </>
);
