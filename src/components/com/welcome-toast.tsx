"use client";

import { useEffect } from "react";

import { toast } from "sonner";

export function WelcomeToast() {
  useEffect(() => {
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes("welcome-toast=2")) {
      toast("Welcome to X Boilerplate!", {
        id: "x-welcome-toast",
        duration: Number.POSITIVE_INFINITY,
        onDismiss: () => {
          // biome-ignore lint/suspicious/noDocumentCookie: <>
          document.cookie = "x-welcome-toast=2; max-age=31536000; path=/";
        },
        description: (
          <>
            A starting boilerplate with configuration and best practices for your Nextjs projects.
            <a
              href="https://github.com/wootsbot/X-boilerplate"
              className="text-amber-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Started
            </a>
            .
          </>
        ),
        position: "bottom-right",
        closeButton: true,
      });
    }
  }, []);

  return null;
}
