"use client";

import { useEffect, useState, useRef } from 'react';
import type { RefObject } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0.1,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = true,
  }: IntersectionObserverOptions = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current && freezeOnceVisible && isIntersecting) {
      observer.current.disconnect();
      return;
    }

    if (observer.current) {
      observer.current.disconnect();
    }
    
    if (!elementRef.current) return;


    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (freezeOnceVisible && observer.current) {
            observer.current.unobserve(entry.target);
          }
        } else {
          if (!freezeOnceVisible) {
             setIsIntersecting(false);
          }
        }
      },
      { threshold, root, rootMargin }
    );

    const { current: currentElement } = elementRef;
    if (currentElement) {
      observer.current.observe(currentElement);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible, isIntersecting]);

  return isIntersecting;
}
