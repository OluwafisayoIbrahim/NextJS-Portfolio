import Link from "next/link";

const NavLink = ({ href, title, isActive, onClick }) => {
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 mb-5 ${isActive ? 'font-bold text-white' : 'text-[#ADB7BE] hover:text-white'} mr-5`}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

export default NavLink;
