import React from 'react';
import { Radio } from 'antd';

const markdownTypes = {
  h1: '# ',
  h2: '## ',
  h3: '### ',
};
export function Bar(props) {
  const { setMarkdownText } = props;
  const [size, setSize] = React.useState('h1');
  const changeMarkdownType = (e) => {
    setSize(e.target.value);
    setMarkdownText(markdownTypes[e.target.value] || '');
  };
  console.log('barprops', props);
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={changeMarkdownType}
        style={{ marginBottom: 16 }}
      >
        <Radio.Button value="h1">H1</Radio.Button>
        <Radio.Button value="h2">H2</Radio.Button>
        <Radio.Button value="p">p</Radio.Button>
      </Radio.Group>
    </div>
  );
}
