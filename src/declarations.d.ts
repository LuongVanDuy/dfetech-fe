// src/declarations.d.ts (hoặc src/types/declarations.d.ts)
declare module "@splidejs/react-splide" {
  import * as React from "react";
  const Splide: React.ComponentType<any>;
  const SplideSlide: React.ComponentType<any>;

  export { Splide, SplideSlide };
}
