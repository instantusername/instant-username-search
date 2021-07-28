export const observeElement = callback => {
  if (!callback) {
    return;
  }

  const observer = new IntersectionObserver(callback);

  return observer;
};
