import React from "react";

function RevenueCard({ title, showWarning, orderCount, amount }) {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <div className="text-gray-700">{title} ?</div>
    </div>
  );
}

export default RevenueCard;
