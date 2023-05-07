import React from "react";
import Link from "next/link";
import { JoinLayout } from "@/layouts";

import { LoginForm } from "@/components/Auth";

import styles from "./sign-in.module.scss";

export default function signIn() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Sign In</h3>
          <LoginForm />
          <div className={styles.actions}>
            <Link href="/join/sign-up">Don't have an account? Sign Up</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
