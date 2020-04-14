import React from 'react';
import { useSelector } from 'react-redux';
import { getText } from '../../selectors';
import { Div } from '@vkontakte/vkui';
import marked from 'marked';
import './TextContent.css';

const TextContent = () => {
  const text = useSelector(getText);
  let content;
  if (text) {
    content = text.replace(/\\n/g, '\n');
  }

  if (!text) {
    return null;
  };

  return (
    <Div className="TextContent">
      <span dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Div>
  )
};

export default TextContent;