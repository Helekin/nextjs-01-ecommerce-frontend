import React from "react";
import { Image } from "semantic-ui-react";
import Link from "next/link";

import { Account } from "../Account";

import styles from "./TopBar.module.scss";

export function TopBar(props) {
  const { isOpenSearch } = props;

  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <Link href="/">
          <Image src="/images/logo.png" alt="gaming" />
        </Link>
      </div>

      <div className={styles.center}>
        <span>MENU</span>
      </div>

      <div className={styles.right}>
        <Account />
      </div>
    </div>
  );
}