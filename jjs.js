document.addEventListener("DOMContentLoaded", function () {
  const frames = document.querySelectorAll('iframe[data-src], iframe.lazy, iframe.lazyload, iframe.lazyload-loaded');

  frames.forEach(frame => {
    const src = frame.getAttribute("data-src");
    if (src) {
      frame.setAttribute("src", src);
      frame.removeAttribute("data-src");
    }

    frame.classList.remove("lazy", "lazy-hidden", "lazyload", "lazyload-loaded");
  });
});