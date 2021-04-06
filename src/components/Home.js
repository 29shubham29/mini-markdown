import React from 'react';
import { Typography, Input, Button } from 'antd';
import ReactMarkdown from 'react-markdown';
import 'antd/dist/antd.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { render } from 'react-dom';
import { Bar } from './Bar';

const { TextArea } = Input;
const { Title } = Typography;
export function Home(props) {
  const [markdownText, setMarkdownText] = React.useState('');

  React.useEffect(() => {
    setMarkdownText(markdownText);
  }, [markdownText]);

  const updateText = (e) => {
    setMarkdownText(e.target.value);
  };

  const getMarkDownText = (value) => {
    return <ReactMarkdown>{value}</ReactMarkdown>;
  };

  return (
    <div style={{ padding: '50px', width: '100%', display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <Title>Write markdown input here</Title>
        <Bar setMarkdownText={setMarkdownText} />
        <TextArea
          style={{ width: '100%', height: '70%' }}
          rows={60}
          onChange={updateText}
          value={markdownText}
        />
      </div>
      <div style={{ width: '50%', padding: '20px' }}>
        <Title align="center">Output</Title>
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </div>
  );
}
