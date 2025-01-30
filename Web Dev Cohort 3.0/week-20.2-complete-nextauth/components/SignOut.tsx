'use client'

import React from 'react'
import { Button } from './Button'
import { signOut } from 'next-auth/react'
import { toast } from 'sonner';

export function SignOut() {
  return (
    <Button onClick={() => signOut()} title='Logout' variant='branding' size="lg"/>
  )
}

