"use client";

import Head from "next/head";
import * as Shared from "@/shared";
import * as Features from "@/features";
import { useState } from "react";
import * as Widgets from "@/widgets";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Widgets.Header />
      <div className="flex min-h-screen flex-col items-center justify-center space-y-10 bg-gradient-to-b from-slate-800 via-bgpink to-bgdark text-white">
        <Head>
          <title>악</title>
          <meta
            name="description"
            content="Code Online is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets. It functions as an online code editor and open-source learning environment, where developers can create code snippets, "
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex h-20 w-full items-center justify-center ">
          <h1 className="text-3xl font-bold">악😈</h1>
        </div>
        <div className="flex items-center justify-center space-x-8">
          <div className="items-center justify-center space-y-4 ">
            <div>
              <Shared.UI.Button
                text="방 만들기"
                onClickHandler={() => setShowModal(true)}
              />
              {showModal && (
                <Features.JoinRoom.UI onCloseHandler={setShowModal} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
