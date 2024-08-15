/* eslint-disable no-unused-vars */
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  return <div>Wait, Ada Error nih!!</div>;
}

export default ErrorPage;
