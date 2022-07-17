import { React, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import katex from 'katex';

function KaTeXComponent({ texExpression }) {
  const containerRef = useRef();

  useEffect(() => {
    katex.render(texExpression, containerRef.current);
  }, [texExpression]);

  return <div ref={containerRef} />;
}

KaTeXComponent.propTypes = {
  texExpression: PropTypes.string.isRequired,
};

export default KaTeXComponent;
