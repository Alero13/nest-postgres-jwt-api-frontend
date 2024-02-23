//import React from 'react'

/* const ButtonAuth = () => {
  return (
    <div>ButtonAuth</div>
  )
}

export default ButtonAuth */

"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function ButtonAuth() {
  const { data: session, status } = useSession(); //Hub useSession

  console.log( {session, status} )

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button
          onClick={() => signOut()}
          className="btn btn-danger"
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() => signIn()}
        className="btn btn-primary"
      >
        Sign in
      </button>
    </>
  );
}
