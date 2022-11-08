import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../styles/DestinationSelect.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, destinationName, theme) {
  return {
    fontWeight:
      destinationName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function DestinationSelect(props) {
  const theme = useTheme();

  const destinationNames = props.destinationNames;
  const handleChange = props.onSelectionChange;

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Destination</InputLabel>
        <Select
          variant="outlined"
          value={props.destination}
          onChange={handleChange}
          input={<OutlinedInput label="Destination" />}
          MenuProps={MenuProps}
        >
          {destinationNames.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, props.destination, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
