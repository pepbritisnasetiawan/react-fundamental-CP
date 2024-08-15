/* eslint-disable react/prop-types */
const ArticleStatus = ({ isNew }) => {
  return isNew && <span>-- Baru!!</span>;
};

const NewArticle = () => {
  return <span>---BARU!!</span>
}

export default function Article(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, tags: {props.tags.join(', ')}{' '}
        <ArticleStatus isNew={props.isNew} />
        {props.isNew && <NewArticle />}
      </small>
    </>
  );
}
