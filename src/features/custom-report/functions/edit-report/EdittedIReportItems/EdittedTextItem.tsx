const EdittedTextItem = ({ ...any }) => {
  return <p className={`${any.props.text_align} w-full`}>{any.props.content}</p>;
};

export default EdittedTextItem;
