import React, { useState } from "react";
import {
  Box,
  Dialog,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Autoplay } from "swiper/modules";
import CloseIcon from "@mui/icons-material/Close";

import "swiper/css";
import "swiper/css/pagination";

const CarouselGaleria = ({ imagenes = [] }) => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpen = (imagen) => {
    setImagenSeleccionada(imagen);
  };

  const handleClose = () => {
    setImagenSeleccionada(null);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          "& .swiper": { width: "100%", padding: "10px 4px 45px" },
          "& .swiper-slide": { height: "auto" },
          "& .swiper-pagination-bullet": {
            backgroundColor: "#E53888",
            opacity: 0.3,
            transition: "all 0.3s ease",
          },
          "& .swiper-pagination-bullet-active": {
            opacity: 1,
            width: "20px",
            borderRadius: "10px",
          },
        }}
      >
        <Swiper
          modules={[Pagination, Keyboard, Autoplay]}
          pagination={{ clickable: true, dynamicBullets: true }}
          keyboard={{ enabled: true }}
          spaceBetween={18}
          slidesPerView={1.2}
          loop={imagenes.length > 4}
          autoplay={{
            delay: 1300,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            600: { slidesPerView: 2.2, spaceBetween: 18 },
            900: { slidesPerView: 3.2, spaceBetween: 20 },
            1200: { slidesPerView: 4.2, spaceBetween: 22 },
          }}
        >
          {imagenes.map((imagen, index) => (
            <SwiperSlide key={index}>
              <Box
                onClick={() => handleOpen(imagen)}
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  borderRadius: "18px",
                  cursor: "pointer",
                  backgroundColor: "#F7CDD9",
                  boxShadow: "0 5px 18px rgba(229, 56, 136, 0.12)",
                  position: "relative",
                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition:
                      "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                  },
                  "&:hover img": { transform: "scale(1.05)" },
                  "&:active img": { transform: "scale(1.02)" },
                }}
              >
                <img
                  src={imagen}
                  alt={`Imagen ${index + 1}`}
                  loading={index < 6 ? "eager" : "lazy"}
                  decoding='async'
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* VISUALIZACIÓN DE IMAGEN CON EFECTO BLUR Y FULLSCREEN */}
      <Dialog
        fullScreen
        open={Boolean(imagenSeleccionada)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(12px)",
            boxShadow: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          aria-label='Cerrar vista previa'
          sx={{
            position: "absolute",
            right: { xs: 16, md: 28 },
            top: { xs: 16, md: 28 },
            zIndex: 10,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            color: "#E53888",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "#ffffff",
              transform: "scale(1.08)",
            },
          }}
        >
          <CloseIcon fontSize='medium' />
        </IconButton>

        <Box
          onClick={handleClose}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: { xs: 2, md: 5 },
            cursor: "zoom-out",
          }}
        >
          {imagenSeleccionada && (
            <Box
              component='img'
              src={imagenSeleccionada}
              alt='Imagen ampliada'
              onClick={(e) => e.stopPropagation()}
              sx={{
                maxWidth: "92vw",
                maxHeight: "88vh",
                objectFit: "contain",
                borderRadius: "16px",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
                cursor: "default",
                userSelect: "none",
              }}
            />
          )}
        </Box>
      </Dialog>
    </>
  );
};

export default CarouselGaleria;
