import { NextRequest } from "next/server";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { User } from "../payload-types";

export const getServerSideUser = async (
  cookies: NextRequest["cookies"] | ReadonlyRequestCookies
) => {
  try {
    const token = cookies.get('payload-token')?.value;
    if (!token) {
      throw new Error('No token found in cookies');
    }

    const meRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    if (!meRes.ok) {
      throw new Error(`Failed to fetch user: ${meRes.statusText}`);
    }

    const { user } = (await meRes.json()) as { user: User | null };

    return { user };
  } catch (error) {
    console.error('Error fetching user:', error);
    return { user: null };
  }
};
