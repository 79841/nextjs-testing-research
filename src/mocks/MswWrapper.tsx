"use client";
import { PropsWithChildren, useEffect, useState } from "react";

type TMswWrapperProps = PropsWithChildren;
export const MswWrapper = ({ children }: TMswWrapperProps) => {
  const isMockingMode = process.env.NEXT_PUBLIC_API_MOCKING === "enabled";
  const [mswReady, setMswReady] = useState(!isMockingMode);
  useEffect(() => {
    async function initWorker() {
      if (typeof window !== "undefined") {
        const { worker } = await import("@/mocks/browser");
        await worker.start();
        setMswReady((_) => true);
      }
    }
    if (!mswReady) initWorker();
  }, [mswReady]);

  if (!mswReady) return null;
  return <>{children}</>;
};
