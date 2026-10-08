import { Box, Stack } from "@mui/material";
import LogoWapi from "../assets/Logo_Wapizima.webp";
import LogoFloreciendo from "../assets/logo_floreciendo.webp";
import LogoFiestas from "../assets/fiesta_mexicana_limpia.png";
const Header = () => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 5,
        width: "100%",
        py: 2,
        background: "rgba(229, 18, 126, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 25px rgba(229,18,126,0.20)",
      }}
    >
      <Stack
        direction='row'
        spacing={3}
        sx={{
          px: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component='img'
          src={LogoWapi}
          alt='Wapizima'
          sx={{
            height: {
              xs: 48,
              sm: 68,
            },
            width: "auto",
            objectFit: "contain",
          }}
        />

        <Box
          sx={{
            width: "1px",
            height: 45,
            background: "rgba(255,255,255,0.45)",
          }}
        />

        <Box
          component='img'
          src={LogoFloreciendo}
          alt='Pink Power'
          sx={{
            height: {
              xs: 38,
              sm: 68,
            },
            width: "auto",
            objectFit: "contain",
          }}
        />
        <Box
          sx={{
            width: "1px",
            height: 45,
            background: "rgba(255,255,255,0.45)",
          }}
        />

        <Box
          component='img'
          src={LogoFiestas}
          alt='Fiestas'
          sx={{
            height: {
              xs: 38,
              sm: 68,
            },
            width: "auto",
            objectFit: "contain",
          }}
        />
      </Stack>
    </Box>
  );
};

export default Header;
