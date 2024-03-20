import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const CodeEditor = ({ code, onChange }) => {
  return (
    <AceEditor
      mode="javascript  " // Specify the language mode
      theme="monokai" // Specify the editor theme
      onChange={onChange} // Callback function for code changes
      value={code} // Value of the code editor
      name="code-editor" // Unique name for the editor instance
      editorProps={{ $blockScrolling: true }} 
      width="100%"
      height="100%"
      wrapEnabled='True'
    />
  );
};

export default CodeEditor;
