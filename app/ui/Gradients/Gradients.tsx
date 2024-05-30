function Gradients({ position }: { position?: string }) {
  return (
    <>
      <div
        className={`absolute inset-x-0 left-[28%] h-[300px] w-[425px] animate-blob rounded-full
        bg-[#3F64E9] opacity-[.43] bg-blend-multiply blur-[100px] filter ${position}`}
      ></div>
      <div
        className={`absolute inset-x-0 left-[46.5%] h-[300px] w-[425px] animate-blob rounded-full
        bg-[#FFB800] opacity-[.33] bg-blend-multiply blur-[100px] filter ${position}`}
      ></div>
      <div
        className={`absolute inset-x-0 mx-auto h-[350px] w-[425px] animate-blob rounded-full
        bg-[#E93F3F] opacity-[.43] bg-blend-multiply blur-[100px] filter ${position}`}
      ></div>
    </>
  );
}

export default Gradients;
