function TechIcon({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-16 h-16 flex items-center justify-center">
        <img src={icon} alt={label} className="w-full h-full object-contain" />
      </div>
      <span className="text-gray-600 text-sm text-center">{label}</span>
    </div>
  );
}

export default TechIcon;
