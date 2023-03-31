function Icon({ icon, text }) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span className="text-gray-900">{text}</span>
    </div>
  );
}

export default Icon;
