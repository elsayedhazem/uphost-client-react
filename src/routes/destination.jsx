import { Typography, Grid } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { getDestinationFeatures, getDestinationOptions } from "./dataFetchers";
import FeatureCard from "./components/FeatureCard";
import TopListingCard from "./components/TopListingCard";
import "./styles/Destination.css";
export async function destinationLoader({ params }) {
  const data = {};

  const destinationOptions = await getDestinationOptions();
  data.destinationName = Object.keys(destinationOptions).find(
    (key) => destinationOptions[key] === params.destinationId
  );

  data.features = await getDestinationFeatures(params.destinationId);
  return data;
}

export default function Destination() {
  const data = useLoaderData();
  const features = data.features;
  const destinationName = data.destinationName;
  console.log(features);
  return (
    <div className="DestinationPage">
      <div className="heading">
        <Typography variant="h2">{destinationName}</Typography>
        <Typography variant="h6">{features["nListings"]} Listings</Typography>
      </div>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <FeatureCard
          title="Max Price"
          value={`
        $${features["maxPrice"]}`}
        />
        <FeatureCard
          title="Min Price"
          value={`
        $${features["minPrice"]}`}
        />
        <FeatureCard
          title="Avg Price"
          value={`
        $${features["avgPrice"]}`}
        />
        <FeatureCard
          title="Occupancy Rate"
          value={`
        ${features["avgOccupancy"]}%`}
        />
      </Grid>
      <Typography className="heading" variant="h4">
        Top Listings
      </Typography>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        {features["topListings"].map(function (listing, i) {
          return <TopListingCard listing={listing} key={i} />;
        })}
      </Grid>
    </div>
  );
}
