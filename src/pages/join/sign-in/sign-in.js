import React from "react";

import { JoinLayout } from "@/layouts";
import styles from "./sign-in.module.scss";

export default function signIn() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>SignIn</h3>
        </div>
      </JoinLayout>
    </>
  );
}
