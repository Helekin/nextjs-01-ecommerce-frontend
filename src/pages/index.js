import React from "react";

import { useAuth } from "@/hooks";

export default function Index() {
  const { user, logout, updateUser } = useAuth();
  return (
    <div>
      <h2>Games</h2>
    </div>
  );
}
