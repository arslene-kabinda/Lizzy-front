import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default function HalfRating({value}) {

  const [hover, setHover] = React.useState(-1);
  return (
    <Stack spacing={1}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        // onChangeActive={(event, newHover) => {
        //   setHover(newHover);
        // }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        sx={{ color: "#45ad7e" }}
        size="small"
      />
    </Stack>
  );
}
