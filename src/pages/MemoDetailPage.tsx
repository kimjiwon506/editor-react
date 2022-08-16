import React from 'react';
import { useParams } from 'react-router-dom';

const MemoDetailPage = () => {
  const {id} = useParams()
  return (
    <div>
      메모디테일페이지
    </div>
  );
};

export default MemoDetailPage;