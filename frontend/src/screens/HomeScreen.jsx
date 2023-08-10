import { useState, useEffect } from "react";
import axios from "axios";

import { BASE_URL } from "../constants";

// Components
import Form from "../components/Form";
import { Box } from "@mui/material";
// import WavyBG from "../components/WavyBG";

const HomeScreen = () => {
  const [result, setResult] = useState({});
  console.log(result);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "POST",
          url: `${BASE_URL}/calculate`,
          data: {
            bandAColor: "brown",
            bandBColor: "orange",
            bandCColor: "violet",
            bandDColor: "gold",
          },
        });
        setResult(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <WavyBG /> */}
      <Box sx={{ padding: "30px" }}>
        <Form />
      </Box>
    </>
  );
};

export default HomeScreen;
