import { useEffect, useRef, useState } from "react";

function useFadeOnScroll() {
  const [isIntersecting, setIsIntersecting] = useState({
    1: false,
    2: false
  });
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const refs = [ref1, ref2]

  useEffect(() => {
    //declaring the observers
    const observer1 = new IntersectionObserver(
      (entries) => {
        setIsIntersecting({...isIntersecting, 1: entries[0].isIntersecting}); 
      },
      { rootMargin: "-200px" }
    );
    console.log(isIntersecting);

    const observer2 = new IntersectionObserver(
      (entries) => {
        //the entries array contains the first, second, third etc times the intersection happened
        setIsIntersecting({...isIntersecting, 2: entries[0].isIntersecting}); //setting it to the first interscetion in the arr. Are new interscetions added to the front of the array??
      },
      { rootMargin: "-200px" }
    );
    console.log(isIntersecting);

    //assigning the observers an elem to watch
    if (ref1.current) observer1.observe(ref1.current);
    if (ref2.current) observer2.observe(ref2.current);

    //clean up if unmounted
    return () => {
      observer1.disconnect()
      observer2.disconnect()
    };
  }, [isIntersecting]);

  function setChildProps(childNumber: number) {
    if(childNumber === 1) {
      if (isIntersecting[1]) {
        return {
          transform: "translateX(0)",
          opacity: 1,
        };
      } else {
        return {
          transform: "translateX(-100%)",
          opacity: 0,
        };
      }

    }

    if(childNumber === 2) {
      if (isIntersecting[2]) {
        return {
          transform: "translateX(0)",
          opacity: 1,
        };
      } else {
        return {
          transform: "translateX(100%)",
          opacity: 0,
        };
      }

    }

  }

  return { refs, setChildProps }
}

export default useFadeOnScroll;
