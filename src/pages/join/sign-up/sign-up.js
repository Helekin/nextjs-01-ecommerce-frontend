import React from "react";

import { JoinLayout } from "@/layouts";

import styles from "./sign-up.module.scss";

export default function signUp() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signUp}>
          <h3>Create Account</h3>
        </div>
      </JoinLayout>
    </>
  );
}
