import Image from "next/image";
import { Container, Section, Title, Heading, Text } from "@nesso/shared-ui";

export const About = () => {
  return (
    <Section spacing="md" className="bg-[#F6F6F6] relative">
      <Container size="lg">
        <Title label="Nesso Digitale" />
        <div className="grid lg:grid-cols-2 md:gap-10 items-center">
          <div>
            <Image
              src="/images/about-cover.png"
              height={683}
              width={683}
              alt="Nesso Digitale"
              priority
            />
          </div>

          <div className="mt-3">
            <div className="space-y-4 font-jakarta">
              <div className="flex flex-col gap-2">
                <Heading as="h3" size="xs" color="primary">
                  Due servizi, un solo partner
                </Heading>
                <Text size="base" color="gray">
                  Sviluppiamo software su misura e forniamo sviluppatori e
                  DevOps on-demand per rafforzare il tuo team.
                </Text>
              </div>

              <div className="flex flex-col gap-2">
                <Heading as="h3" size="xs" weight="bold">
                  Qualità da software house, flessibilità globale
                </Heading>
                <Text size="base" color="gray">
                  Un approccio ibrido che unisce standard da software house e
                  una rete internazionale di talenti.
                </Text>
              </div>

              <div className="flex flex-col gap-2">
                <Heading as="h3" size="xs" weight="bold">
                  Focus totale sul tuo business
                </Heading>
                <Text size="base" color="gray">
                  Un referente locale e un team globale lavorano insieme per
                  trasformare le esigenze in soluzioni.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
