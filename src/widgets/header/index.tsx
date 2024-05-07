"use client";

import Link from "next/link";
import * as Entities from "@/entities";
import { useEffect, useState } from "react";

export default function Header() {
  const { accessToken } = Entities.Auth.useAccessToken();
  const { logout } = Entities.Auth.useLogout();
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    if (accessToken) {
      setIsTrue(true);
    }
  }, [accessToken]);

  return (
    <header className="fixed z-30 flex w-full items-center justify-between p-4">
      <h1>
        <Link href="/" className="font-bold">
          LOGO
        </Link>
      </h1>
      <nav>
        <ul className="flex items-center justify-end gap-4">
          <li>
            {isTrue ? (
              <button type="button" onClick={logout}>
                로그아웃
              </button>
            ) : (
              <Link href="/login">로그인</Link>
            )}
          </li>
          <li>
            <Link href="/me">마이페이지</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
