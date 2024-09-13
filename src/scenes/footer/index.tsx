import Logo from "@/assets/Logo.png";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiGitRepositoryFill } from "react-icons/ri";

import IconLink from "./IconLink";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-context mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Unindo tecnologia, inovação e os melhores profissionais para
            transformar sua rotina de treinos. Siga-nos nas redes sociais e
            fique por dentro de todas as novidades!
          </p>
          <p>© Evogym, Todos os Direiros Reservados</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <IconLink
            link="https://github.com/yuri-moraes"
            Icon={FaGithub}
            text="Github"
          />
          <p className="my-5">
            <IconLink
              link="https://yuri-moraes.github.io/React-repository/"
              Icon={RiGitRepositoryFill}
              text="Repositório"
            />
          </p>
          <p>
            <IconLink
              link="https://www.linkedin.com/in/yuri-moraes-4b018b252/"
              Icon={FaLinkedin}
              text="Linkedin"
            />
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Entre em contato</h4>
          <p className="my-5 flex gap-3">
            WhatsApp <FaWhatsapp />
          </p>
          <p>(31) 98390-1251</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
