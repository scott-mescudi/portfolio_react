import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface codeBoxProps {
  code: string;
  background?: string;
}

export function CodeBox({ code, background }: codeBoxProps) {
  const customStyle = {
    lineHeight: "1.25rem",
    fontSize: "0.875rem",
    borderRadius: "0",
    margin: "none",
    height: "100%",
    background: "transparent",
  };

  return (
    <>
      <div className="w-full my-3 h-full group flex flex-col">
        <div
          className={`sm:w-full relative w-full  scrollbar-track-[black] scrollbar-thumb-neutral-800 scrollbar-thin overflow-auto rounded-xl  border border-white border-opacity-10 ${background}`}
        >
          <SyntaxHighlighter
            language="go"
            style={oneDark}
            customStyle={customStyle}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}
