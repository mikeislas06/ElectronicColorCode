import { useState } from "react";
import { Grid } from "@mui/material";
import Result from "./Result";
import FormInput from "./FormInput";

const Content = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bandAColor, setBandAColor] = useState("");
  const [bandBColor, setBandBColor] = useState("");
  const [bandCColor, setBandCColor] = useState("");
  const [bandDColor, setBandDColor] = useState("");
  const [resistance, setResistance] = useState("");
  const [tolerance, setTolerance] = useState("");

  return (
    <Grid
      container
      spacing={4}
      sx={{
        margin: "0",
        backgroundColor: "rgba(255,255,255,0.7)",
        border: "1px solid black",
        borderRadius: "25px",
      }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <FormInput
          bandAColor={bandAColor}
          setBandAColor={setBandAColor}
          bandBColor={bandBColor}
          setBandBColor={setBandBColor}
          bandCColor={bandCColor}
          setBandCColor={setBandCColor}
          bandDColor={bandDColor}
          setBandDColor={setBandDColor}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setResistance={setResistance}
          setTolerance={setTolerance}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <Result
          bandA={bandAColor}
          bandB={bandBColor}
          bandC={bandCColor}
          bandD={bandDColor}
          isLoading={isLoading}
          resistance={resistance}
          tolerance={tolerance}
        />
      </Grid>
    </Grid>
  );
};

export default Content;
