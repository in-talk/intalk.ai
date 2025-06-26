import { ReactNode } from "react";

const CommentBox = ({
  position,
  children,
}: {
  position: string;
  children: ReactNode;
}) => (
  <div
    className={`absolute ${position} w-[240px] bg-gradient-to-br from-indigo-500 via-gray-800 to-indigo-700 border-4 border-gray-200 rounded-xl p-4 shadow-xl animate-glow`}
  >
    <div className="text-sm font-bold text-white border-b-2 border-gray-200 pb-1 mb-2 uppercase tracking-wide">
      ⚠️ Problem
    </div>
    <div className="text-xs text-white font-semibold space-y-2">{children}</div>
  </div>
);

export default CommentBox