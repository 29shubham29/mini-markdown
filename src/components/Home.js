import React from 'react';
import { Typography, Input } from 'antd';
import ReactMarkdown from 'react-markdown';

const { TextArea } = Input;
const { Title } = Typography;
export function Home(props) {
  const [markdownText, setMarkdownText] = React.useState('');

  const updateText = (e) => {
    setMarkdownText(e.target.value);
    console.log(markdownText);
  };

  const getMarkDownText = (value) => {
    return <ReactMarkdown>{value}</ReactMarkdown>;
  };

  console.log(getMarkDownText(markdownText));

  return (
    <div style={{ padding: '50px', width: '100%', display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <Title>Write markdown input here</Title>
        <TextArea style={{ width: '100%' }} rows={60} onChange={updateText} />
      </div>
      <div style={{ width: '50%', padding: '20px' }}>
        <Title align="center">Output</Title>
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </div>
  );
}
