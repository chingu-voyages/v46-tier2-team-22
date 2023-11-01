import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

function ScrollToTop() {
  const [btnVisible, setBtnVisible] = useState(false);

  function toggleVisible() {
    document.documentElement.scrollTop > 200
      ? setBtnVisible(true)
      : setBtnVisible(false);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  window.addEventListener("scroll", toggleVisible);

  return btnVisible ? (
    <button className="fixed bottom-7 right-10 z-0 text-black hover:text-Cinnabar text-3xl">
      <FontAwesomeIcon icon={faCircleUp} onClick={scrollToTop} />
    </button>
  ) : (
    <></>
  );
}

export default ScrollToTop;
