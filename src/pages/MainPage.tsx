import React from 'react';
import ReactQuill from 'react-quill';
import Box from '../components/box';
import Editor from '../components/Editor';

const MainPage = () => {
  return (
    <Box p="16px">
      <h1>클라우드메모장</h1>
      <Editor />
    </Box>
  );
};

export default MainPage;