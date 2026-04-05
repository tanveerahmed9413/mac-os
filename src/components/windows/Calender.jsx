import MacWindows from "./MacWindows";

const Calendar = ({ setwindowState, activeWindow, setActiveWindow }) => {
  return (
    <MacWindows
      height={400}
      width={400}
      id="Calender"
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
      onClose={() =>
        setwindowState((prev) => ({
          ...prev,
          Calendar: false,
        }))
      }
    >
      <div className="h-full w-full">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata"
          className="w-full h-full rounded-xl"
        ></iframe>
      </div>
    </MacWindows>
  );
};

export default Calendar;
