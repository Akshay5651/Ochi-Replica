import React from "react";

function Cards() {
  return (
    <div className="h-[140vh] w-full p-4 flex items-center justify-center bg-zinc-900">
      <div className="w-full -mt-[30vh] flex items-center gap-4">
        {[
          { color: "#004D43", url: "https://ochi.design/wp-content/uploads/2022/04/logo001.svg", btnText: `2019-2022` },
          { color: "#232121", url: "https://ochi.design/wp-content/uploads/2022/04/logo002.svg", btnText: "Rating 5.0 on Clutch" },
          { color: "#212121", url: "https://ochi.design/wp-content/uploads/2022/04/logo003.png", btnText: "Business Bootcamp Alumni" }
        ].map((e, id) => (
          <div
            style={{ backgroundColor: `${e.color}` }}
            className={`relative h-[70vh] p-6 w-1/3 flex items-center justify-center rounded-lg`}
          >            
            <img className={id === 0 ? "h-[3rem]" : "h-[4.5rem]"} src={`${e.url}`}></img>
            <button className="absolute left-5 bottom-5 text-xs px-2 py-1 border-[1.5px] rounded-full border-zinc-100 font-['Neue_Montreal' uppercase">
              {id === 0 && <span>&copy;</span>}
              {e.btnText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
