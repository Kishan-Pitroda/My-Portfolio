import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
export const photos = [
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/1.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/2.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/3.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/4.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/5.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/6.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/7.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/8.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/9.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/10.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/11.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/12.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/13.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/14.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/15.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/16.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/17.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/18.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/19.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/20.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/21.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/22.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/23.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/24.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/25.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/26.jpg?raw=true",
  },
  {
    src: "https://github.com/Kishan-Pitroda/My-Portfolio/blob/pwa-integration/src/assets/gallery/personal/27.jpg?raw=true",
  },
];

const Gallery: React.FC = () => {
  const srcset = (image: string, size: number) => {
    return {
      src: `${image}?w=${size}&h=${size}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size}&h=${size}&fit=crop&auto=format&dpr=2 2x`,
    };
  };

  return (
    <ImageList sx={{ rows: 550, cols: 450, m: 0 }} variant="quilted" cols={3}>
      {photos.map((item) => (
        <ImageListItem key={item.src} cols={1} rows={1}>
          <img {...srcset(item.src, 121)} alt={""} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
export default Gallery;
