'use server'

import { signIn } from 'next-auth/react'

export async function signInWithGithub() {
    await signIn('github', { callbackUrl: '/' })
  }

  export async function signInWithGoogle() {
    await signIn('google', { callbackUrl: '/' })
  }

  export async function signInWithInstagram() {
    await signIn('instagran', { callbackUrl: '/' })
  }