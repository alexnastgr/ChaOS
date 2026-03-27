function Logo() {
  return (
    <div className="w-50 h-50 logoarea opacity-10 select-none">
      <div className="w-[90px] h-[90px] bg rotating bg-cover bg-[url('logo.svg')]" />
      <div className="text-6xl flex flex-row text-white mt-5">
        <span className="font-normal">Cha</span>
        <span className="font-bold">OS</span>
      </div>
    </div>
  );
}

export default Logo;
