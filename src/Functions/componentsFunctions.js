export function watchScrollState(shouldHide) {
  if (shouldHide) {
    document.body.style.overflow = "hidden";
    return;
  }

  document.body.style.overflow = "";
}

export const scrollToTop = (behavior = "smooth") =>
  window.scrollTo({ top: 0, left: 0, behavior });
