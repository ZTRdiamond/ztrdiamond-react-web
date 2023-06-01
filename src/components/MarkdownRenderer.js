import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

import '../assets/code/prism.css';

const MarkdownContainer = styled.div`
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #fff;

  img {
    max-width: 100%;
    height: auto;
  }

  pre {
    background-color: #282a36;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
  }

  code {
    font-family: monospace;
  }
`;

const CodeBlock = styled(SyntaxHighlighter).attrs({ language: 'javascript', style: dracula })`
  background-color: #282a36 !important;
  padding: 10px;
  margin-bottom: 20px;
`;

const MarkdownRenderer = ({ source }) => {
  return (
    <MarkdownContainer>
      <ReactMarkdown renderers={{ code: CodeBlock }}>{source}</ReactMarkdown>
    </MarkdownContainer>
  );
};

export default MarkdownRenderer;
