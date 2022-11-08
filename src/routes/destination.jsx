import { useLoaderData } from "react-router-dom";

export function destinationLoader({ params }) {
  return params.destinationName;
}

export default function Destination() {
  const data = useLoaderData();
  return <h1>{data}</h1>;
}
