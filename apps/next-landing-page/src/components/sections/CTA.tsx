import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "@nesso/shared-ui";
import { Container, Section } from "@nesso/shared-ui";
import { Heading, Text } from "@nesso/shared-ui";

export const CTA = () => {
  return (
    <Section spacing="xl" className="bg-white">
      <Container size="lg">
        <div className="border border-primary rounded-4xl px-2 py-4 md:px-4.5 md:py-8">
          <div className="bg-[#F2F2F2] p-4 md:p-22 text-center rounded-3xl">
            <Text color="dark">Attualmente disponibili per nuovi progetti</Text>
            <Heading className="text-primary" weight="medium" size="lg">
              Interessato a collaborare con noi?
            </Heading>
            <Text className="text-[#3C3C4399]! md:max-w-178  mx-auto">
              Aiutiamo aziende e team a progettare e sviluppare soluzioni
              digitali efficaci. Raccontaci il tuo progetto e scopriamo insieme
              come possiamo trasformare le tue idee in risultati concreti.
            </Text>
            <Button variant="outline" className="text-black! mt-8">
              Prenota una Consulenza
              <ArrowUpRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 text-primary" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
