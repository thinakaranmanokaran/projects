import React, { useEffect, useState } from "react";

const HoverBox = () => {
  const [tooltip, setTooltip] = useState({ text: "", x: 0, y: 0, visible: false });

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      const hoverPopup = target.getAttribute('data-hoverpopup');

      if (hoverPopup) {
        const rect = target.getBoundingClientRect();
        setTooltip({
          text: hoverPopup,
          x: rect.left + window.scrollX + rect.width / 2,
          y: rect.top + window.scrollY - 10,
          visible: true,
        });
      }
    };

    const handleMouseOut = () => {
      setTooltip((prev) => ({ ...prev, visible: false })); // Use a function to update the state
    };

    // Adding event listeners to the document
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      // Cleanup the event listeners
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []); // Remove tooltip from dependency array

  return (
    <div>
      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="absolute bg-maxDark dark:bg-maxLight font-hoverfont text-maxLight dark:text-maxDark text-sm px-3 py-2 rounded-lg shadow-lg z-50 tooltip transition-all duration-300 "
          style={{ top: tooltip.y, left: tooltip.x, transform: 'translateX(-50%)' }}
        >
          {tooltip.text}
          <div
          className="border-maxLight"
            style={{
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '8px solid #171717', // Change to the tooltip background color
              position: 'absolute',
              borderBottomRIghtRadius: '10px',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HoverBox;
