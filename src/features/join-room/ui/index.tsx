"use client";

import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import React, { MouseEventHandler, useState } from "react";

type Props = {
  onCloseHandler: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function JoinRoomModal({ onCloseHandler }: Props) {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();
  const createNewRoom: MouseEventHandler = e => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
  };
  const joinRoom: MouseEventHandler = e => {
    e.preventDefault();

    router.push(`/editor/${roomId}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
      <div className="relative mx-auto my-6 w-auto max-w-2xl">
        <div className=" relative flex w-full flex-col rounded-lg border-0 bg-bgdark pb-4 text-white shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
            <h3 className="text-2xl font-semibold">방 만들기</h3>
            <button
              type="button"
              className="ml-aut float-right border-0 p-1 text-3xl font-semibold leading-none text-white outline-none focus:outline-none"
              onClick={() => onCloseHandler(false)}
            >
              <span className="block h-6  w-6 bg-transparent text-2xl text-red-700 outline-none focus:outline-none">
                &#x2715;
              </span>
            </button>
          </div>
          <div className="relative flex flex-col space-y-3 p-6">
            <h3 className="mb-2 text-lg font-semibold">룸 아이디</h3>

            <input
              type="text"
              className="text-black"
              id="exampleFormControlInput1"
              placeholder="ROOM ID"
              value={roomId}
              onChange={e => setRoomId(e.target.value)}
            />
            <input
              type="text"
              className="text-black"
              id="exampleFormControlInput1"
              placeholder="USERNAME"
            />
          </div>
          <div className="flex items-center justify-end rounded-b pr-6">
            <button
              className="mb-1 mr-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
              type="button"
              onClick={joinRoom}
            >
              입장하기
            </button>
          </div>
          <p className="mx-8 my-2 text-lg leading-relaxed text-slate-500">
            새로운 방을 만드려면 &nbsp;
            <button
              type="button"
              onClick={createNewRoom}
              className="border-b-2 border-primary font-bold text-primary hover:animate-pulse"
            >
              여기
            </button>
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
