const Spinner = () => {
  return (
    <section className="fixed h-screen w-full bg-white mx-auto flex flex-col gap-20 justify-center items-center z-[98] top-0 left-0">
      <div
        className="relative overflow-hidden border-r-4 border-r-black w-24 animate-typewriter-blink">
        <span className="text-4xl lg:text-5xl font-light text-third"> 読み込み中...</span>
      </div>
    </section>
  );
};

export default Spinner;
