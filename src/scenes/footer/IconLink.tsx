import { IconType } from "react-icons";

type Props = {
  link: string;
  text: string;
  Icon: IconType;
};

const IconLink = ({ link, text, Icon }: Props) => {
  return (
    <p className="my-5 text-sm font-bold text-primary-500 underline hover:text-secondary-500">
      <a
        className="flex gap-3"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text} <Icon />
      </a>
    </p>
  );
};

export default IconLink;
