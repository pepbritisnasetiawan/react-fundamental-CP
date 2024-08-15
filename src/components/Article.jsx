/* eslint-disable react/prop-types */
export default function Article(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, tags: {props.tags.join(', ')}
      </small>
    </>
  );
}
