"use client";

// SessionProvider uses context-api under the hood so we have to make it client side component. Also, we didn't want to make layout file client side component as it will not allow to use metadata
import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
