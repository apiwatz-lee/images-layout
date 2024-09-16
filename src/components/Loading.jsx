import { useLoading } from "../context/LoadingContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Backdrop } from "@mui/material";

const Loading = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return;

  return (
    <Box sx={{ position: "fixed", top: "50%", left: "50%" }}>
      <Backdrop open={isLoading} />
      <CircularProgress />
    </Box>
  );
};

export default Loading;
