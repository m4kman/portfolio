import * as React from "react";

export function RotatePlaneOnMouse(
  e: React.MouseEvent<HTMLDivElement>,
  plane: React.RefObject<HTMLDivElement>,
  maxRotate: number,
) {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  const perspective = window.innerWidth * 4;
  const rotateX = maxRotate * x - maxRotate / 2;
  const rotateY = (maxRotate * y - maxRotate / 2) * -1;
  if (plane.current !== null)
    plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
}

export default RotatePlaneOnMouse;
