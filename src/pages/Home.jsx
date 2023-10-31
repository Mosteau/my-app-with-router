import { useRouteLoaderData } from "react-router-dom";

function Home() {
  const weather = useRouteLoaderData("app");

  return (
    <>
      <h1>Nous vous souhaitons la bienvenue à la page Home</h1>
        <p>Y fait {weather}, tocard🖕</p>  
      
    </>
  );
}

export default Home;