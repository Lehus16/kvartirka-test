import { useEffect, useState } from "react";
import { debounce } from "lodash";

export const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const recalculate = () => {
            setScrollPosition(window.scrollY);
        };
        const handleDebouncedScroll = debounce(() => recalculate(), 200);
        console.log(scrollPosition);
        window.addEventListener("scroll", handleDebouncedScroll);
        recalculate();
        return () =>
            window.removeEventListener("scroll", handleDebouncedScroll);
    }, [scrollPosition]);

    return scrollPosition;
};
