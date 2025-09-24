// CodeBlock.tsx

'use client';

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function getTextFromChildren(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return children.toString();
  if (Array.isArray(children)) return children.map(getTextFromChildren).join("");
  if (children && typeof children === "object" && "props" in children && children.props && children.props.children) {
    return getTextFromChildren(children.props.children);
  }
  return "";
}

export const CodeBlock = ({ className, children }: { className: string, children: React.ReactNode }) => {
  const language = className ? className.replace("lang-", "") : "";
  const codeString = getTextFromChildren(children);

  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus}>
      {codeString}
    </SyntaxHighlighter>
  );
};
