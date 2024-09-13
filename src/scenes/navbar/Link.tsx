import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface LinkProps {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Link: React.FC<LinkProps> = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  // Mapear as páginas para seus respectivos textos em português
  const displayText =
    {
      Home: "Início",
      Benefits: "Benefícios",
      "Our Classes": "Nossas Aulas",
      "Contact Us": "Contato",
    }[page] || page; // Caso não encontre o texto, exibe o valor original

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
      transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {displayText}
    </AnchorLink>
  );
};

export default Link;
