export function watchScrollState(shouldHide) {
  if (shouldHide) {
    document.body.style.overflow = "hidden";
    return;
  }

  document.body.style.overflow = "";
}