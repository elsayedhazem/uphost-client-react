import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/FeatureCard.css";

export default function FeatureCard(props) {
  return (
    <Card
      style={{ backgroundColor: "transparent" }}
      className="FeatureCard"
      sx={{ minWidth: 275 }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2">{props.value}</Typography>
      </CardContent>
    </Card>
  );
}
