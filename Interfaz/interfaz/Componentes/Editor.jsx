import React, { useRef, useState } from 'react';

import Editor from '@monaco-editor/react';
import { POST } from '../Servicios/api';

export function EditorT() {
  const editorRef = useRef(null);
  const [resultado,setResultado] = useState("")

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    POST("http://localhost:3000/interpretar",editorRef.current.getValue()).then(res=>
    {
        console.log(res.resultado)
        setResultado(res.resultado)
    })
    //alert(editorRef.current.getValue());
  }

  return (
    <>
    <div style={{display:'flex',alignItems:"center"}}>
      <Editor
        height="60vh"
        width={"80vh"}
        defaultLanguage="javascript"
        defaultValue="// some comment"
        theme='vs-dark'
        onMount={handleEditorDidMount}
        />
        <textarea value={resultado} cols={70} rows={27} readOnly/>
 
    </div>
     <button onClick={showValue} style={{display:"flex",margin:"0 auto",marginTop:"5px"}}>Interpretar</button>

    </>
  );
}
