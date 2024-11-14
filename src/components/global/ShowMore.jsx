import React, { useState } from "react";

const ShowMore = ({ text = "", minWords, maxWords, className }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Ensure `text` is a valid string to avoid split errors
    const words = text.split(" ");
    const shouldTruncate = words.length > maxWords;
    const displayText = shouldTruncate && !isExpanded
        ? words.slice(0, maxWords).join(" ") + "..."
        : text;

    return (
        <p className={className}>
            {displayText}
            {shouldTruncate && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="font-bold ml-2 hover:underline"
                >
                    {isExpanded ? "Show Less" : ""}
                </button>
            )}
        </p>
    );
};

export default ShowMore;
