import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/** @ts-expect-error javascript error are unknown, errors can be anything :( */}
        <i>{`${error.status} - ${error.statusText}` || error.message}</i>
      </p>
    </div>
  );
}