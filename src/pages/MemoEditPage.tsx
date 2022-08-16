import React from 'react';
import { useParams } from 'react-router-dom';

const MemoEditPage = () => {
  const {id} = useParams()
  return (
    <div>
      메모에딧페이지
    </div>
  );
};

export default MemoEditPage;