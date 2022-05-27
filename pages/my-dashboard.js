import React from 'react'
import { useSession, getSession } from 'next-auth/react'

export default function MyDashboard() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'unauthenticated') {
    return <p>Access Denied</p>
  }

  return (
    <div className="">
      <div className="bg-dashboard-hero bg-cover bg-center bg-no-repeat">
        <h1>{session.user.name}</h1>
      </div>
      <h1>Protected Dashboard</h1>
      <p>You can view this page because you are signed in.</p>
    </div>
  )
}
