import {  Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/PDHzhrm/395206567-3549560198645304-2668402681413964720-n.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Oops!</h1>
      <p className="mb-5"> Sorry, an unexpected error has occurred. </p>
       <button className=" btn" > <Link to='/' > Home </Link> </button>
    </div>
  </div>
</div>

      <p>
        <i>{error.statusText || error.message}</i> 
      </p>
    </div>
  );
}
