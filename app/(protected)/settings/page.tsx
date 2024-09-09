import React from 'react'
import { auth } from '@/auth'

export default async function page() {
    const session = await auth();
    
  return (
    <div>
      <h1>Settings</h1>
      <p>{JSON.stringify(session)}</p>
    </div>
  )
}
