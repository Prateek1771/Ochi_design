
function Cards() {
  return (
    <div className="w-full h-screen flex items-center border-[1px] border-zinc-700 gap-5 p-10">
        <div className="cardcontainer w-1/3  h-[50vh]">
            <div className="card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className="absolute left-5 bottom-5 p-1 px-3 rounded-full border-zinc-500 border-[1px] text-[#CDEA68] text-sm">©2019-2022</button>
            </div>
        </div>
        <div className="cardcontainer w-1/3  h-[50vh]">
            <div className="card relative w-full rounded-xl h-full bg-[#212121] flex items-center justify-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className="absolute left-5 bottom-5 p-1 px-3 rounded-full border-zinc-500 border-[1px] text-sm">RATING 5.0 ON CLUTCH</button>
            </div>
        </div>
        <div className="cardcontainer w-1/3  h-[50vh]">
            <div className="card relative w-full rounded-xl h-full bg-[#212121] flex items-center justify-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className="w-[25vh]" alt="" />
                <button className="absolute left-5 bottom-5 p-1 px-3 rounded-full border-zinc-500 border-[1px] text-sm">BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
    </div>
  )
}

export default Cards