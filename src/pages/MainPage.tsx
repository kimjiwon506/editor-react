import axios from 'axios';
import React, { useEffect } from 'react';
import ReactQuill from 'react-quill';
import Box from '../components/box';
import Editor from '../components/Editor';

const MainPage = () => {

  useEffect(()=>{
    (async ()=>{
      const {data} = await axios.get("/tmp")
      console.log(data)
    })()
  },[])
  return (
    <Box p="16px">
      <h1>클라우드메모장</h1>
      <Editor />
    </Box>
  );
};

export default MainPage;