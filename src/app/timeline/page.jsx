'use client'

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-white">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold text-black-500">
          scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold text-black-500">
          scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div 
          style={{ x }} 
          className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-off-white border-2 border-black"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      >
        <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}></motion.div>
      </div>
      <div className="absolute inset-0 z-0 bg-black opacity-10 transition-opacity duration-300 group-hover:opacity-60"></div>
      <div className="absolute bottom-0 left-0 z-10 p-4 bg-transparent">
        <p className="text-8xl font-black text-white lowercase">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "https://files.slack.com/files-pri/T0HTW3H0V-F03TZ46EVV3/20220816.0.002_mdf.orientation.workshop_5d.a.cr2.0032.jpg?pub_secret=204dff27fe",
    title: "anna",
    id: 1,
  },
  {
    url: "https://files.slack.com/files-pri/T0HTW3H0V-F06GTR468FJ/spring-2024-14.png?pub_secret=33a210d97c",
    title: "arianna",
    id: 2,
  },
  {
    url: "https://files.slack.com/files-pri/T0HTW3H0V-F064D5XG7L5/peace_gif_360.gif?pub_secret=5811d03f59",
    title: "siriana",
    id: 3,
  },
  {
    url: "https://files.slack.com/files-pri/T0HTW3H0V-F06G24DM1RT/spring-2024-15.png?pub_secret=95eb1e085f",
    title: "lara",
    id: 4,
  },
  {
    url: "https://files.slack.com/files-pri/T0HTW3H0V-F063FFZ5JP5/fall_2023-18.png?pub_secret=b89a58149a",
    title: "chris",
    id: 5,
  },
  {
    url: "https://files.slack.com/files-pri/T0HTW3H0V-F0645USQYCR/fall_2023-38.png?pub_secret=89df50f9ac",
    title: "alexa",
    id: 6,
  },
  {
    url: "https://files.slack.com/files-pri/T0HTW3H0V-F06GHM3RXPB/spring-2024-13.png?pub_secret=083a98b559",
    title: "the mdfs",
    id: 7,
  },
];
