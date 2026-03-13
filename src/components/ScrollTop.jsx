import React, { use, useEffect, useState } from "react";

const ScrollTop = () => {
  const [goTop, setGoTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setGoTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 bg-indigo-700 text-gray-50 w-10 h-10 rounded-full shadow-lg hover:scale-110 transition duration-300"
      >
        ↑
      </button>
    </>
  );
};

export default ScrollTop;
