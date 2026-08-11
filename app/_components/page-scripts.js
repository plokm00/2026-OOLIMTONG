"use client";

import { useEffect, useRef } from "react";

function callListener(listener, event) {
  if (typeof listener === "function") {
    listener.call(document, event);
  } else if (listener && typeof listener.handleEvent === "function") {
    listener.handleEvent(event);
  }
}

export default function PageScripts({ scripts }) {
  const didRun = useRef(false);

  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;

    const inserted = [];
    const lateReadyListeners = [];
    const originalAddEventListener = document.addEventListener;
    const domIsReady = document.readyState !== "loading";

    if (domIsReady) {
      document.addEventListener = function addEventListener(type, listener, options) {
        if (type === "DOMContentLoaded") {
          lateReadyListeners.push(listener);
          return;
        }
        return originalAddEventListener.call(document, type, listener, options);
      };
    }

    try {
      for (const script of scripts) {
        const element = document.createElement("script");

        for (const [name, value] of Object.entries(script.attributes)) {
          if (name === "src") continue;
          if (value === true) element.setAttribute(name, "");
          else element.setAttribute(name, String(value));
        }

        if (script.attributes.src) {
          element.async = false;
          element.src = script.attributes.src;
        } else {
          element.text = script.content;
        }

        element.dataset.nextPageScript = "true";
        document.body.appendChild(element);
        inserted.push(element);
      }
    } finally {
      if (domIsReady) document.addEventListener = originalAddEventListener;
    }

    if (lateReadyListeners.length) {
      const event = new Event("DOMContentLoaded");
      for (const listener of lateReadyListeners) callListener(listener, event);
    }

    return () => {
      for (const element of inserted) element.remove();
    };
  }, [scripts]);

  return null;
}
