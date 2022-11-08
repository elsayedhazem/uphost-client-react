import "./styles/root.css";
import { Typography } from "@mui/material";

export default function Error() {
  return (
    <div className="Root">
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="h6 ">Something went wrong</Typography>
    </div>
  );
}
