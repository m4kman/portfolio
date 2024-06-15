function Gradients({ position }: { position?: string }) {
  return (
    <div className="relative overflow-x-clip">
      <div
        className={`absolute inset-x-0 left-[28%] z-50 h-[300px] w-[425px] animate-blob rounded-full
        bg-[#3F64E9] opacity-[.43] bg-blend-multiply blur-[100px] filter ${position}`}
      ></div>
      <div
        className={`absolute inset-x-0 left-[46.5%] z-50 h-[300px] w-[425px] animate-blob
        rounded-full bg-[#FFB800] opacity-[.33] bg-blend-multiply blur-[100px] filter
        ${position}`}
      ></div>
      <div
        className={`absolute inset-x-0 z-50 mx-auto h-[350px] w-[425px] animate-blob rounded-full
        bg-[#E93F3F] opacity-[.43] bg-blend-multiply blur-[100px] filter ${position}`}
      ></div>
    </div>
  );
}

export default Gradients;
