import "./styles/root.css";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Typography } from "@mui/material";
import { getDestinationOptions } from "./dataFetchers";
import Button from "@mui/material/Button";
import DestinationSelect from "./components/DestinationSelect";

export const rootLoader = async () => {
  return await getDestinationOptions();
};

export default function Root() {
  const [destination, setDestination] = useState([]);
  const destinationOptions = useLoaderData();
  const destinationNames = Object.keys(destinationOptions);

  const onSelectionChange = (event) => {
    const {
      target: { value },
    } = event;
    setDestination(value);
  };

  return (
    <div className="Root">
      <Typography style={{ margin: "10px" }} variant="h1">
        UpHost
      </Typography>
      <Typography style={{ marginBottom: "20px" }} variant="h6 ">
        Your Gateway To Vacation Rental Data
      </Typography>
      <DestinationSelect
        destinationNames={destinationNames}
        destination={destination}
        onSelectionChange={onSelectionChange}
      />

      <Link to={`destinations/${destinationOptions[destination]}`}>
        <Button variant="Outlined ">Go</Button>
      </Link>
    </div>
  );
}
