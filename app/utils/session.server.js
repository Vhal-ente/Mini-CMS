import { createCookieSessionStorage } from "@remix-run/node";

const { SESSION_SECRET } = process.env;

if (!SESSION_SECRET) throw new Error("SESSION_SECRET not set in env");

export const storage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

export const { commitSession, getSession, destroySession } = storage;
