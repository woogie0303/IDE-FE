"use client";

import Editor, { OnChange, loader } from "@monaco-editor/react";
import * as Shared from "@/shared";
import Cursors from "./Cursor";
import { useCreateRoom } from "../lib/hooks/useCreateRoom";

loader.config({
  paths: {
    vs: "https://www.unpkg.com/monaco-editor/min/vs",
  },
});

interface Props {
  language: string;
  code: string;
  onChange: OnChange;
  onClickFunc: () => void;
}

export default function RoomEditor({
  language,
  code,
  onChange,
  onClickFunc,
}: Props) {
  const { handleOnMount, provider } = useCreateRoom();

  return (
    <div className="flex flex-col gap-3 px-10 py-5">
      {provider ? <Cursors yProvider={provider} /> : null}
      <div className="h-30 flex items-center justify-center bg-bgdark">
        <Shared.UI.Button text="실행" onClickHandler={onClickFunc} />
      </div>
      <div className="h-full overflow-hidden rounded-3xl">
        <Editor
          onChange={onChange}
          height="100%"
          onMount={handleOnMount}
          defaultLanguage={language}
          language={language}
          value={code}
          options={{
            fixedOverflowWidgets: true,
            wordWrap: "on",
            colorDecorators: true,
            fontSize: 15,
            minimap: { enabled: false },
            scrollbar: {
              vertical: "auto",
              horizontal: "auto",
            },
            theme: "vs-dark",
            padding: { bottom: 10, top: 10 },
            autoSurround: "brackets",
            scrollBeyondLastLine: false,
          }}
        />
      </div>
    </div>
  );
}
