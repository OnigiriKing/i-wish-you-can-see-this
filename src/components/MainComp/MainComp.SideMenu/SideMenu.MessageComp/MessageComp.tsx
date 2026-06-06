const datePhone = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export default function MessageComp() {
  return (
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
  );
}
