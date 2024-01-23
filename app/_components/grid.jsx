import { Columns } from "@/components/columns";

const imageArray1 = [
  "img1.jpg",
  "img2.jpg",
  "img1.jpg",
  "img2.jpg",
  "img1.jpg",
  "img2.jpg",
  "img1.jpg",
  "img1.jpg",
  "img2.jpg",
  "img1.jpg",
];

const imageArray2 = [
  "img3.jpg",
  "img4.jpg",
  "img3.jpg",
  "img4.jpg",
  "img3.jpg",
  "img4.jpg",
  "img3.jpg",
  "img4.jpg",
  "img4.jpg",
  "img3.jpg",
  "img4.jpg",
  "img3.jpg",
  "img4.jpg",
  "img3.jpg",
  "img4.jpg",
  "img3.jpg",
  "img4.jpg",
  "img3.jpg",
];

export const Grid = () => {
  return (
    <div className="grid grid-cols-[2fr_repeat(3,_1fr)] gap-x-10  px-24">
      <Columns value={3.5} images={imageArray1} />
      <Columns value={2.5} images={imageArray2} />
      <Columns value={2} images={imageArray1} />
      <Columns value={1.5} images={imageArray2} />
    </div>
  );
};
