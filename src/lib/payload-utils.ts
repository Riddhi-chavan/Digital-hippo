import { User } from '../payload-types'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { NextRequest } from 'next/server'

export const getServerSideUser = async (
  cookies: NextRequest['cookies'] | ReadonlyRequestCookies
) => {
  const token = cookies.get('payload-token')?.value

  // If there's no token, return null for the user
  if (!token) {
    return { user: null }
  }

  try {
    const meRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`,
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    )

    if (!meRes.ok) {
      // If the response is not OK, log the status and return null for the user
      console.error(`Failed to fetch user: ${meRes.statusText}`)
      return { user: null }
    }

    const { user } = (await meRes.json()) as {
      user: User | null
    }

    return { user }
  } catch (error) {
    // Log any fetch errors and return null for the user
    console.error('Error fetching user:', error)
    return { user: null }
  }
}
