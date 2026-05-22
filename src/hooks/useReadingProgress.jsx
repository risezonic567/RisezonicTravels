import { useState, useEffect } from "react";

export default function useReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const totalHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scrolled = window.scrollY;

            const percentage = (scrolled / totalHeight) * 100;
            setProgress(percentage);
        };

        window.addEventListener("scroll", updateProgress);
        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return progress;
}
