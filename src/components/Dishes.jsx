import { motion } from "framer-motion";
import { DISHES } from "@constants";
import DishCard from "@components/cards/DishCard";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const Dishes = () => {
  return (
    <section className="container mx-auto py-16" id="dishes">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Dishess
      </h2>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        className="grid grid-cols-1 gap-8 md:grid-cols-5"
      >
        {DISHES?.map((project, index) => (
          <DishCard key={index} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Dishes;
