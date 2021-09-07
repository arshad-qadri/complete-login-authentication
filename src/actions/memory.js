export const memory = (title, img, desc) => {
  return {
    type: "ADD_MEM",
    id: 1,
    title,
    img,
    desc,
  };
};
