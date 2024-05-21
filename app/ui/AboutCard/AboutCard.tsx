function AboutCard({ i, description }: { i: number; description: string }) {
  let rotateX;
  let translateX = "0";
  let translateY = "0";
  let z = 0;
  if (i === 0) {
    rotateX = 4;
    translateX = "50px";
  } else if (i === 1) {
    rotateX = 3;
    translateX = "25px";
    translateY = "25px";
  } else if (i === 2) {
    rotateX = 1;
    z = 999;
    translateY = "15px";
  } else if (i === 3) {
    rotateX = -5;
    translateX = "-45px";
    translateY = "15px";
    z = 99;
  } else {
    rotateX = -9;
    translateX = "-70px";
    translateY = "-15px";
  }

  return (
    <div className="flex flex-wrap">
      <div
        className="grid h-[640px] w-[345px] place-items-center rounded bg-card text-card-foreground
          shadow-lg shadow-black/25"
        style={{
          transform: `rotate(${rotateX}deg) translateX(${translateX}) translateY(${translateY})`,
          zIndex: z,
        }}
      >
        <h3 className="max-w-[14ch] text-center font-chakra text-[22px] leading-snug">
          {description}
        </h3>
      </div>
    </div>
  );
}

export default AboutCard;
