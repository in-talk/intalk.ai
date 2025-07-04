
const AgentAvatar = ({ emoji, label }: { emoji: string; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-[60px] h-[60px] bg-gray-800 rounded-full flex items-center justify-center relative shadow-md">
      <div className="w-[40px] h-[40px] bg-gray-100 rounded-full flex items-center justify-center text-lg text-gray-800">
        {emoji}
      </div>
      <div className="absolute top-[-5px] right-[-5px] w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px]">
        🎧
      </div>
    </div>
    <div className="text-white text-xs font-bold drop-shadow">{label}</div>
  </div>
);

export default AgentAvatar