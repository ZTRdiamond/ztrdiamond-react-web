// eslint-disable-next-line

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula, dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';

function CodeBlock({ code, language }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  };

  return (
    <div>
      <div className="codeblock-wall">
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button className="copasButton">
            <FaCopy />
            {isCopied ? ' Copied!' : ' Copy'}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter language={language} style={dracula} showLineNumbers customStyle>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

function AgeCalc(tanggalLahir) {
  const today = new Date();
  const birthDate = new Date(tanggalLahir);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function Markdown({ text }) {
  return (
  <div className="markdown">
	<ReactMarkdown>{text}</ReactMarkdown>
  </div>
);
}

export { AgeCalc, CodeBlock, Markdown };
