import React, { useState } from "react";
import { ImageList, ImageListItem, Dialog } from "@mui/material";
import "./Gallery.css";
export const photos = [
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(1).jpeg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(2).jpeg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(3).jpeg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(4).jpeg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(4).JPG?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(5).JPG?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(1).JPG?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(3).JPG?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(2).JPG?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(6).jpeg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(6).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(7).jpg?raw=true",
  },

  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(9).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(10).jpg?raw=true",
  },

  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(12).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(13).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(14).jpg?raw=true",
  },

  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(16).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(17).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(18).jpg?raw=true",
  },

  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(23).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(24).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(25).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(20).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(21).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(19).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(22).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(8).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(11).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(15).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(26).jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/img%20(27).jpg?raw=true",
  },
];

const Gallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const srcset = (image: string, size: number) => {
    return {
      src: `${image}?w=${size}&h=${size}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size}&h=${size}&fit=crop&auto=format&dpr=2 2x`,
    };
  };

  const handleDialogOpen = (src: string) => {
    setOpen(true);
    setImgSrc(src);
  };

  return (
    <div>
      <ImageList sx={{ rows: 550, cols: 450 }} variant="quilted" cols={3}>
        {photos.map((item) => (
          <ImageListItem key={item.src} cols={1} rows={1}>
            <img
              {...srcset(item.src, 121)}
              alt={""}
              loading="lazy"
              onClick={() => handleDialogOpen(item.src)}
              className="img"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={() => setOpen(false)}
      >
        <img src={imgSrc} alt={""} loading="lazy" className="dialog-img" />
      </Dialog>
    </div>
  );
};
export default Gallery;
