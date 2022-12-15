import React from "react";

const AnalyticCard = ({ title, count }) => {
  return (
    <div
      class="p-5 bg-[#4F46BA] rounded-xl w-full bg-no-repeat"
      style={{
        backgroundImage: "url(/analytic.svg)",
        backgroundPosition: "right center",
        backgroundSize: "60%",
      }}
    >
      <p class="text-base font-bold text-white opacity-30 capitalize">
        {title}
      </p>
      <p class="text-base font-semibold text-white">{count}</p>
    </div>
  );
};

export default AnalyticCard;
