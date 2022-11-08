import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/TopListingCard.css";

export default function TopListingCard(props) {
  return (
    <Card
      style={{ backgroundColor: "transparent" }}
      className="TopListingCard"
      sx={{ minWidth: 275 }}
    >
      <a href={`https://www.airbnb.com/rooms/${props.listing["_id"]}`}>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.listing.name}
          </Typography>
          <Typography variant="body2">{props.listing.roomType}</Typography>
          <Typography variant="p">
            {props.listing.bedroomLabel} {props.listing.bedLabel}
            {props.listing.bathroomLabel}
          </Typography>
          <Typography style={{ float: "right" }} variant="h6" component="div">
            {"totalPrice" in props.listing.pricing &&
              props.listing.pricing.totalPrice.amountFormatted}
          </Typography>
        </CardContent>
      </a>
    </Card>
  );
}
