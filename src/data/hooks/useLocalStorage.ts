"use client";
import { useCallback } from "react";

export function useLocalStorage() {
  const getStorage = useCallback((key: string) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }, []);

  const setStorage = useCallback((key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const removeStorage = useCallback((key: string) => {
    localStorage.removeItem(key);
  }, []);

  return { getStorage, setStorage, removeStorage };
}
