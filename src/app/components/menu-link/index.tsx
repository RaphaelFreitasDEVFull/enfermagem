import Link from "next/link";

interface Props {
  name: string;
  url: string;
}

const MenuItem = ({ name, url }: Props) => {
  return (
    <Link
      href={url}
      className="text-base sm:text-sm hover:text-yellow-500 transition-colors duration-300 font-bold"
    >
      {name}
    </Link>
  );
};

export default MenuItem;
