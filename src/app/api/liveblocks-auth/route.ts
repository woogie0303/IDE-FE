/* eslint-disable import/no-extraneous-dependencies */
import { Liveblocks } from "@liveblocks/node";

const USER_INFO = [
  {
    name: "강동욱",
    color: "#D583F0",
    picture: "https://liveblocks.io/avatars/avatar-1.png",
  },
  {
    name: "유현우",
    color: "#F08385",
    picture: "https://liveblocks.io/avatars/avatar-2.png",
  },
];

const liveblocks = new Liveblocks({
  secret: process.env.NEXT_PUBLIC_API_URL,
});

export async function POST() {
  const userId = Math.floor(Math.random() * 10) % USER_INFO.length;

  const session = liveblocks.prepareSession(`user-${userId}`, {
    userInfo: USER_INFO[userId],
  });

  session.allow(`myRoom`, session.FULL_ACCESS);

  const { body, status } = await session.authorize();

  return new Response(body, { status });
}
