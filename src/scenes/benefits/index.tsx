import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Instalações Modernas e Equipamentos de Ponta",
    description:
      "Nossas instalações são equipadas com o que há de mais moderno no mercado fitness, proporcionando um ambiente ideal para que você possa treinar com conforto, segurança e eficiência. Venha conhecer nossa estrutura que combina tecnologia de ponta com design inovador.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Centenas de Aulas Variadas",
    description:
      "Oferecemos uma ampla gama de aulas diversificadas para atender todos os níveis de condicionamento físico e objetivos pessoais. De treinos de alta intensidade a sessões relaxantes de ioga, aqui você encontra a opção perfeita para manter seu corpo e mente em equilíbrio.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Treinadores Especializados e Experientes",
    description:
      "Nossa equipe de treinadores é composta por profissionais altamente qualificados, prontos para guiar você em cada etapa da sua jornada fitness. Com expertise e dedicação, eles criarão um plano de treino personalizado para maximizar seus resultados.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>É MAIS QUE UMA ACADEMIA.</HText>
          <p className="my-5 text-sm">
            Nós fornecemos equipamentos de fitness de classe mundial,
            treinadores e aulas para levá-lo aos seus objetivos de fitness
            definitivos com facilidade. Nós fornecemos verdadeiro cuidado a cada
            membro.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILHÕES DE MEMBROS FELIZES FICANDO{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Na nossa academia, acreditamos que cada jornada fitness é única
                e importante. Oferecemos um ambiente acolhedor e moderno, com as
                melhores ferramentas e suporte para você transformar seu corpo e
                mente. Não importa se seu objetivo é perder peso, ganhar força
                ou simplesmente manter uma vida saudável – estamos aqui para
                guiá-lo em cada passo do caminho.
              </p>
              <p className="mb-5">
                Com programas personalizados, instrutores altamente capacitados
                e uma comunidade motivadora, proporcionamos resultados reais e
                duradouros. Venha fazer parte de uma rede de milhares de pessoas
                felizes e confiantes que já descobriram a alegria de estar em
                forma e viver melhor.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Junte-se agora!
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
