import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { useState, useEffect } from "react";
import draftToHtml from "draftjs-to-html";
import { useQuery, useMutation, gql } from "@apollo/client";

import { Box } from "@mui/system";

const TextEditor = ({ editorState, setEditorState }) => {

    const [onFocus, setOnFocus] = useState(false)
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    return (
        <Box sx={{
            border: onFocus ? '2px solid black' : '1px solid lightgray',
            borderRadius: '5px',
        }}>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
            />
        </Box>
    );
}

export default TextEditor;