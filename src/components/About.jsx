function About() {
  return (
    <div data-scroll data-scroll-container data-scroll-speed="-.15" className="w-full p-20 bg-[#CDEA68] rounded-tr-[50px] rounded-tl-[50px] text-white style={{ zIndex: 99 }}">
      <h1 className="font-inter text-[4vw] leading-[4.5vw] font-semibold text-black tracking-tight">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className="w-full flex gap-5 border-t-[1px] border-[#738146] mt-16">
        <div className="w-1/2 pt-10">
          <h1 className="text-5xl font-inter text-zinc-700 font-bold">Our approach:</h1>
          <button className="px-6 py-4 bg-zinc-900 rounded-full text-white mt-10 flex gap-6 items-center uppercase">Read Me
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] bg-red-600 mt-10 rounded-3xl overflow-hidden">
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" className="w-full h-full bg-cover bg-center" />
        </div>
      </div>
    </div>
  );
}

export default About;
