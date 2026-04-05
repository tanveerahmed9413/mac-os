import React from "react";
import { Rnd } from "react-rnd";

const MacWindows = ({
  children,
  width = 800,
  height = 500,
  onClose,
  id,
  activeWindow,
  setActiveWindow,
}) => {
  return (
    <Rnd
      default={{
        height: height,
        width: width,
        x: 100,
        y: 0,
      }}
      minWidth={400}
      minHeight={300}
      bounds="window"
      dragHandleClassName="window-header"
      className="z-50 relative"
      style={{
        zIndex: activeWindow === id ? 100 : 10,
      }}
      onMouseDown={() => setActiveWindow(id)}
    >
      <div className="flex flex-col h-full rounded-xl border bg-black overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="window-header flex items-center gap-3 px-3 py-2 bg-zinc-900 cursor-move select-none">
          <div className="flex gap-2">
            <div
              onClick={onClose}
              className="bg-red-500 rounded-full h-3 w-3 transition hover:scale-110 cursor-default"
            ></div>
            <div className="bg-yellow-400 rounded-full h-3 w-3 transition hover:scale-110 cursor-default"></div>
            <div className="bg-green-500 rounded-full h-3 w-3 transition hover:scale-110 cursor-default"></div>
          </div>

          <p className="text-white text-sm font-medium">tanveerahmed —</p>
        </div>

        {/* Content */}
        <div className="flex-1 bg-gray-100 p-6 overflow-auto">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindows;
