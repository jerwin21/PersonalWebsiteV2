import { useEffect, useState } from 'react';

const useHoverImage = (initialSrc, selectedSrc, selected) => {
    const [imageSrc, setImageSrc] = useState(initialSrc);

    useEffect(() => {
        if (selected) {
            setImageSrc(selectedSrc);
        }
        else {
            setImageSrc(initialSrc);
        }
    }, [selected, initialSrc, selectedSrc]);

    const handleHover = () => {
        if (!selected)
            setImageSrc(selectedSrc);
    };

    const handleUnselect = () => {
        if (!selected)
            setImageSrc(initialSrc);
    };

    return [imageSrc, handleHover, handleUnselect];
};

export default useHoverImage;
