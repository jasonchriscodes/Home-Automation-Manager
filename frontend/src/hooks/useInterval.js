import React, { useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const lastCallback = useRef();

  useEffect(() => {
    lastCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      lastCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;