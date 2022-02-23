import { useEffect, useRef } from "react";
import katex from "katex";

const KaTeXComponent = ({texExpression}) => {
    const containerRef = useRef();

    useEffect(() => {
        katex.render(texExpression, containerRef.current);
    }, [texExpression]);

    return <div ref={containerRef} />
}

export default KaTeXComponent;