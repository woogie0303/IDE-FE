"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import authKeys from "./auth-keys";
import { STORAGE_KEY_OF_TOKEN } from "../constants";

type LoginQueryKeysValueType = ReturnType<(typeof authKeys)["accessToken"]>;

export default function useGetAccessToken(
  queryKeysValue: LoginQueryKeysValueType,
) {
  const { data } = useQuery({
    queryKey: queryKeysValue,
    staleTime: Infinity,
    initialData: () => localStorage.getItem(STORAGE_KEY_OF_TOKEN) ?? undefined,
  });

  return { accessToken: data };
}
