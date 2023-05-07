import React from "react";
import Link from "next/link";

import { JoinLayout } from "@/layouts";
import { RegisterForm } from "@/components/Auth";

import styles from "./sign-up.module.scss";

export default function signUp() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Create Account</h3>
          <RegisterForm />
          <div className={styles.actions}>
            <Link href="/join/sign-in">Already have an account? Sign In</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
