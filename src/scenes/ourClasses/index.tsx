import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Desenvolva força e resistência com treinos de musculação intensos, projetados para ajudar você a atingir seus objetivos físicos de forma eficiente. Com o suporte dos nossos treinadores especializados, você vai dominar a técnica correta para maximizar seus resultados.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Encontre equilíbrio, flexibilidade e paz interior com nossas aulas de ioga. Ideal para todos os níveis, as sessões combinam técnicas de respiração e alongamento que revitalizam corpo e mente.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Fortaleça o seu core com aulas dinâmicas focadas no abdômen. Nossas sessões de alta intensidade são projetadas para esculpir e tonificar os músculos centrais, essenciais para a estabilidade e performance física.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Para os aventureiros, nossas aulas são cheias de adrenalina! Misturando desafios físicos e muita diversão, elas são perfeitas para quem busca uma experiência fitness mais emocionante e variada.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Mantenha-se em forma com nossas aulas de fitness que combinam cardio, força e flexibilidade em treinos dinâmicos. Seja para perder peso ou manter um estilo de vida ativo, estas aulas são feitas para você.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Treinamentos personalizados focados em performance. Desenvolva seu condicionamento físico com planos ajustados às suas necessidades, maximizando o seu potencial através de exercícios variados.",
    image: image6,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>NOSSAS AULAS</HText>
            <p className="py-5">
              "Oferecemos uma variedade de aulas que atendem a todos os gostos e
              níveis de condicionamento físico. Desde sessões de alta
              intensidade até atividades de relaxamento e alongamento, nossas
              aulas são desenhadas para proporcionar bem-estar completo. Com
              instrutores qualificados e um ambiente acolhedor, você poderá
              desenvolver sua força, flexibilidade e resistência de maneira
              equilibrada e prazerosa. Junte-se a nós e descubra como o
              exercício pode transformar sua vida!"
            </p>
          </div>
        </motion.div>
        <div
          className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden"
          w-full
          overflow-x-auto
          overflow-y-hidden
        >
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
