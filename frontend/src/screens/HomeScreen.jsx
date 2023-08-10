// Components
import Content from "../components/Content";
import { Box } from "@mui/material";

const HomeScreen = () => {
  return (
    <>
      <Box
        sx={{
          padding: "30px",
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Content />
      </Box>
    </>
  );
};

export default HomeScreen;
