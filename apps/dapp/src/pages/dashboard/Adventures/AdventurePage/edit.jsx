/**
 * @function NoteItemPage
 * @description Manage A Note
 */
/* --- Global --- */
import {useEffect, useState} from 'react';
import {markdownToDraft, draftToMarkdown} from 'markdown-draft-js';
import {
  ContentState,
  convertFromRaw,
  convertFromHTML,
  convertToRaw,
} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';

/* --- Local --- */
import Paper from './paper';

/* --- Component --- */
const NoteLiveEdit = props => {
  const [preview, setPreview] = useState();
  const [HTMLRaw, setHTMLRaw] = useState(props.html);

  useEffect(() => {
    const draft = convertFromRaw(markdownToDraft(props.html));
    const html = stateToHTML(draft);
    setHTMLRaw(html);
  }, [props.html]);

  useEffect(() => {
    const html = convertFromHTML(HTMLRaw);
    const state = ContentState.createFromBlockArray(
      html.contentBlocks,
      html.entityMap,
    );
    const mark = draftToMarkdown(convertToRaw(state));
    setPreview(mark);
  }, [props.isPreview, HTMLRaw]);

  const handleChange = evt => {
    if (props.onSave) {
      const html = convertFromHTML(evt.target.value);
      const state = ContentState.createFromBlockArray(
        html.contentBlocks,
        html.entityMap,
      );
      const mark = draftToMarkdown(convertToRaw(state));
      props.onSave(mark);
    }
    setHTMLRaw(evt.target.value);
  };

  return props.isPreview ? (
    <A.Box>
      <A.Markdown styled={{pt: 10, pb: 30, px: 20}}>{`${preview}`}</A.Markdown>
    </A.Box>
  ) : (
    <Paper
      html={HTMLRaw}
      disabled={props.isPreview}
      onChange={handleChange}
      tagName="article"
      borderRight="2px solid blue"
    />
  );
};

export default NoteLiveEdit;
