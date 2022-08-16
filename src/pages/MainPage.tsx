import { getValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import ReactQuill from "react-quill";
import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";
import Box from "../components/box";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Flex from "../components/Flex";
import Memo from "../interface/Memo";

const MainPage = () => {
  const [edit, setEdit] = useState("");
  const [memoList, setMemoList] = useState<Memo[]>([]);

  useEffect(() => {
    (async () => {
      const {
        data: { rs },
      } = await axios.get("/tmp");

      //rs에 바로 접근 가능
      //console.log(rs);

      // const rs = data.rs || const {rs} = data
      // console.log(data.rs)
      setEdit(rs);
      loadMemo();
    })();
  }, []);

  useEffect(() => {
    if (edit.length > 0) {
      axios.post("/tmp", {
        content: edit,
      });
    }
  }, [edit]);

  const handleSubmit = useCallback(async () => {
    if (edit.length === 0) {
      alert("메모가 비어있습니다.");
      return;
    }
    try {
      const { data } = await axios.post("/", {
        content: edit,
      });
      console.log(data);
      alert("제출완료");
      await loadMemo();
    } catch (e) {
      alert("저장실패");
    }
  }, [edit]);

  const loadMemo = useCallback(async () => {
    const { data } = await axios.get<Memo[]>("/");
    setMemoList(data);
  }, [setMemoList]);

  return (
    <Box p="16px">
      <h1>클라우드메모장</h1>
      <Editor value={edit} onChange={setEdit} />
      <Button mt={"8px"} onClick={handleSubmit}>
        제출
      </Button>
      {memoList.map((value) => (
        <Flex border={"#ccc solid 1px"} my="8px" p="12px" key={value.created_at} flexDirection="column">
          <Box
            dangerouslySetInnerHTML={{
              __html: value.content,
            }}
          ></Box>
           <Box textAlign={"right"} fontSize={"12px"} color="#555">생성: {new Date(value.created_at).toLocaleString()}</Box>
        </Flex>
      ))}
    </Box>
  );
};

export default MainPage;
