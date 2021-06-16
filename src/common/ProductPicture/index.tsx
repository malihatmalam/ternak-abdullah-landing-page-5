import { ProductPictureProps } from "../types";

export const ProductPicture = ({ src, width, height, borderRadius }: ProductPictureProps) => (
  <img src={src} alt={src} width={width} height={height} border-radius={borderRadius} />
);
