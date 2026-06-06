import allSvg from "../../../assets/svg/AllSvg";

const crossButton = allSvg(30).crossButton;

const datePhone = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export default function SideMenu() {
  return (
    <div className="w-100 bg-white absolute right-0 top-0 h-full flex z-20 justify-center">
      <button className="absolute left-5 top-5 cursor-pointer transition hover:text-zinc-400 ease-in-out duration-300">
        {crossButton}
      </button>
      <div className="device device-iphone-14-pro my-15">
        <div className="device-frame">
          {/* Devide content */}
          <div className="device-content bg-white w-full h-full rounded-[3rem]">
            {/* content container */}
            <div className="flex h-full flex-col">
              {/* actual text content */}
              <header className="border-b border-zinc-200 p-4">
                <div>
                  <div>{datePhone}</div>
                  <div></div>
                </div>
                <p className="text-center font-semibold my-7">Mom</p>

                <p className="text-center text-xs text-zinc-500">Today 22:15</p>
              </header>

              <main className="flex-1 p-4">
                <div className="ml-auto max-w-[80%] rounded-3xl bg-blue-500 px-4 py-3 text-white">
                  I wish I told you how much you meant to me.
                </div>
                <div></div>
              </main>
            </div>
          </div>
        </div>

        <div className="device-stripe"></div>

        <div className="device-header"></div>

        <div className="device-sensors"></div>

        <div className="device-btns"></div>

        <div className="device-power"></div>
      </div>
    </div>
  );
}
