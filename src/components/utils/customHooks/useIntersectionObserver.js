import { useState, useEffect } from "react";

const useIntersectionObserver = (ref, { threshold, root, rootMargin }) => {
  // Card view states
  const [isCard, setCardState] = useState({
    inCardView: false,
    triggered: false,
    entry: undefined
  });

  const intersectionCallback = (entries, observerInstance) => {
    if (entries[0].intersectionRatio > 0) {
      setCardState({
        inCardView: true,
        triggered: true,
        entry: observerInstance
      });
      // unobserve the element
      observerInstance.unobserve(ref.current);
    }
    return;
  };

  const options = {
    root: root || null,
    rootMargin: rootMargin || "0%",
    threshold: threshold || 0
  };
  const observer = new IntersectionObserver(intersectionCallback, options);

  useEffect(() => {
    //check that the element exists, and has not already been triggered
    if (ref.current && !isCard.triggered) {
      observer.observe(ref.current);
    }
  });

  return {
    inCardView: isCard.inCardView,
    entry: isCard.entry
  };
};

export default useIntersectionObserver;
