export const handleProposalClick = (e) => {
  e.preventDefault();
  window.open("https://drive.google.com/file/d/19ocFOU0rWXoSUzLnfzjmTVKAR-zm0_K-/view?usp=share_link", '_blank');
};

export const handleChangeImageOnMouseEnter = (newImage, imageStateHandler) => {
  imageStateHandler(newImage);
}

export const handleChangeImageOnMouseLeave = (oldImage, imageStateHandler) => {
  imageStateHandler(oldImage);
}