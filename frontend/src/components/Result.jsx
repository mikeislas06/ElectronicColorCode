import { Box, Typography } from "@mui/material";

import Resistor from "./Resistor";
import Loader from "./Loader";

const Result = ({ bandA, bandB, bandC, bandD, isLoading, resistance, tolerance }) => {
  return (
    <Box sx={{ padding: "15px", height: "100%", display: "grid", placeItems: "center" }}>
      <Typography variant="h4" textAlign="center" sx={{ margin: "0" }}>
        Result
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        <Resistor bandA={bandA} bandB={bandB} bandC={bandC} bandD={bandD} />
        {isLoading ? (
          <Loader />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "50px",
              padding: "0px 50px",
              textAlign: "center",
            }}
          >
            <Typography variant="h5">Resistance: {resistance} &#8486;</Typography>
            <Typography variant="h5">Tolerance: {tolerance} &#x25;</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Result;
