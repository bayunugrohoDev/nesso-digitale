"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Container,
  Section,
  TitleSection,
  Heading,
  Text,
  Button,
} from "@nesso/shared-ui";
import { projects } from "@nesso/shared-config";
import { ArrowLeft, ArrowRight } from "../icons";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const currentProject = projects[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <Section spacing="xl" className="bg-[#F6F6F6]">
      <Container size="lg">
        <TitleSection
          label="Progetti digitali di cui siamo orgogliosi"
          description=" Piattaforma e-commerce scalabile, progettata per offrire un’esperienza utente fluida e pagamenti sicuri."
        />

        <div className="grid lg:grid-cols-2 md:gap-12 items-center">
          <div className="flex md:flex-col flex-col-reverse gap-6 ">
            <div className="max-w-112.5 md:h-70 lg:h-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Heading as="h3" size="md" className="mb-4">
                    {currentProject.title}
                  </Heading>
                  <Text size="lg" className="mb-4 text-xl leading-relaxed">
                    {currentProject.description}
                  </Text>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex gap-12">
              <div className="pt-4">
                <span className="inline-flex text-black items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm">
                  {currentProject.client}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  aria-label="Previous project"
                  className="rounded-full w-10 h-10"
                >
                  <ArrowLeft />
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  aria-label="Next project"
                  className="rounded-full w-10 h-10"
                >
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-end h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full flex justify-end"
              >
                <Image
                  src={currentProject.image}
                  width={400}
                  height={600}
                  alt={currentProject.title}
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
};
