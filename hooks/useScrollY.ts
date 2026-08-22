import { useSyncExternalStore } from 'react';

const subscribe = (callback: () => void) => {
  window.addEventListener('scroll', callback, { passive: true });
  return () => window.removeEventListener('scroll', callback);
};

const getSnapshot = () => window.scrollY;
const getServerSnapshot = () => 0;

export const useScrollY = (): number => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
