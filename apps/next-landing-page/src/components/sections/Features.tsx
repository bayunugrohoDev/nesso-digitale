import Image from "next/image";
import {
  Container,
  Section,
  TitleSection,
  Heading,
  Text,
} from "@nesso/shared-ui";

export const Features = () => {
  return (
    <Section spacing="xl" className="bg-white">
      <Container size="lg">
        <TitleSection
          label="La trasformazione digitale in azione"
          description="Dai processi manuali a quelli automatizzati: esempi concreti di come aiutiamo i nostri clienti a semplificare il lavoro quotidiano, ridurre gli errori e ottenere risultati misurabili."
        />

        <div className="grid md:grid-cols-3 gap-8 md:gap-18 items-center">
          <div className="grid gap-2">
            <div className="grid gap-4">
              <Heading as="h3" size="xs">
                Integrazione sito web e CRM
              </Heading>
              <Text className="text-[#8E8E8E]">
                Sincronizzazione automatica dei lead e tempi di risposta ridotti
                da ore a pochi minuti.
              </Text>
            </div>
            <div className="grid gap-4">
              <Heading as="h3" size="xs" className="text-[#8E8E8E]">
                Automazione dei report di vendita mensili
              </Heading>
              <Text>
                Tempo di reporting ridotto del 70%, con un risparmio di circa 40
                ore uomo al mese.
              </Text>
            </div>
          </div>
          <Image src={"/images/cta.png"} width={480} height={215} alt="CTA" priority />
          <div className="grid gap-4">
            <Heading as="h3" size="xs" className="text-[#8E8E8E]">
              Gestionale leggero su misura
            </Heading>
            <Text>
              Processi centralizzati e attività amministrative quotidiane
              ridotte del 50%.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
};
