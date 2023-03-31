function IconWithText({ icon, text1, text2 }) {
  return (
    <div className="flex items-center justify-center space-x-4">
      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center   p-2 mr-3">
        {icon}
      </div>
      <div className="flex-grow border-l-2 px-4 ml-2">
        <div className=" text-heading ">{text1}</div>
        <div className="text-paragraph tracking-tighter">{text2}</div>
      </div>
    </div>
  );
}

export default IconWithText;
