import { useEffect } from "react";

const useEventListener = (ref, eventName, callback, dependencies = []) => {
  useEffect(() => {
    const element = ref.current ? ref.current : ref;

    if (!element) {
      console.warn("useEventListener: ref is not defined");
      return null;
    }

    element?.addEventListener(eventName, callback);

    return () => element?.removeEventListener(eventName, callback);
  }, [ref, eventName, callback, ...dependencies]);
};

export default useEventListener;
