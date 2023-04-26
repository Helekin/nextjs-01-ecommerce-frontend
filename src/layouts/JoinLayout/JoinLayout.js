import React from "react";

import styles from "./JoinLayout.module.scss";

export function JoinLayout(props) {
  const { children } = props;
  return (
    <div className={styles.container}>
      <h2>JoinLayout</h2>
      <div>{children}</div>
    </div>
  );
}
