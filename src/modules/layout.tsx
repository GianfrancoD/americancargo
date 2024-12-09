// src/modules/layout.tsx
"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "./letterLoading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="es">
      <body>{isLoading ? <LoadingScreen /> : children}</body>
    </html>
  );
}
