const StepBox = ({
  icon,
  label,
  bgColor = "bg-blue-500",
}: {
  icon: string;
  label: string;
  bgColor: string;
}) => (
  <div
    className={`${bgColor} text-white font-bold text-center px-6 py-4 rounded-xl shadow-md min-w-[200px]`}
  >
    {icon} {label}
  </div>
);

export default StepBox;
