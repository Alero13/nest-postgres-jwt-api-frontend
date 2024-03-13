//import React from 'react'

"use client";
import { useSession } from "next-auth/react";

const DashboardPage = () => {

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  //console.log(session);

  const getCats = async () => {
    /* await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/cats`, { */

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/cats`, {
      method: "GET",
      headers: {
        "Content-Type": "application-json", 
        /* authorization: `Bearer ${session?.accessToken}`, */

        /* authorization: `Bearer kjflasdiajlekra`, */

        /* authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA1NTI1NjM3LCJleHAiOjE3MDU2MTIwMzd9.KuTy1anikS1oXV4Ywg_xwxmNLWTiX7QSDydjz8EG-5o`, */

        authorization: `Bearer ${session?.user?.token}`,
      }
    });

    const data = await res.json();
    
    console.log(data)
  }

  return (
    <div> 
      <h1>Dashboard page</h1>

      <pre>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>

      <button onClick={getCats} className="btn btn-primary">Get Cats</button>

    </div>
  )
}

export default DashboardPage