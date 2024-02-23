//import React from 'react'

"use client";

import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode
}

const SessionAuthProvider = ( {children}: Props ) => {
  return (
    /* <div>SessionAuthProvider</div> */

    <SessionProvider> 
        {children} 
    </SessionProvider>
  )
}

export default SessionAuthProvider