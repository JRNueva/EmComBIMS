import { Dot } from "lucide-react";

function TableStatusButton({ changeStatus, statustxt, statusStyle }) {
  return (
    <button onClick={changeStatus} className={statusStyle}>
      <Dot className="h-7 w-6 mr-2" />
      {statustxt}
    </button>
  );
}

export default TableStatusButton;
