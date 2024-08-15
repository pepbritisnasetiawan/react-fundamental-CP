/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
export default function Article(props) {
  return (
    <>
      <div>{props.name}</div>
      <div>
        {props.titles.map((title) => {
          return <div>{title}</div>
        })}
      </div>
    </>
  );
}
