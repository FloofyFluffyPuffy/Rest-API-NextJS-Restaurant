"use client";
const Btn = ({ name }: { name: string }) => {
  const handleScrollTo = (section: string) => {};
  return (
    <a className="btn cursor-pointer" onClick={() => handleScrollTo("")}>
      {name}
    </a>
  );
};

export default Btn;
