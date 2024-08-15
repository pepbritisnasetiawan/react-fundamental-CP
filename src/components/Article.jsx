/* eslint-disable react/prop-types */
import { useContext } from "react";
import { GlobalContext } from "../contex";
const ArticleStatus = ({ isNew }) => {
  return isNew && <span>-- Baru!!</span>;
};

export default function Article(props) {
  const user = useContext(GlobalContext)
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, tags: {props.tags.join(', ')}{' '}
        <ArticleStatus isNew={props.isNew} />
      </small>
      <div>
        <small>Ditulis oleh {user.username}</small>
      </div>
    </>
  );
}
