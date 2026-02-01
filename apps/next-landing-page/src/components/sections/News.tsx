import Image from "next/image";
import { Container, Section, TitleSection, Heading, Text } from "@nesso/shared-ui";

export const News = () => {
  return (
    <Section spacing="xl" className="bg-white">
      <Container size="lg">
        <TitleSection
          label="La trasformazione digitale, passo dopo passo"
          description="Esempi pratici di automazione che semplificano le attività operative e migliorano le performance aziendali."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 space-x-4">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </Container>
    </Section>
  );
};

const NewsCard = ({
  title = "ArchiTech Digital Design —",
  description = "Crafted ArchiTech Application. Includes 80+ layouts and style guides.",
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <Image src="/images/news-1.png" alt="Niscala" width={427} height={395} className="w-full"/>
      <div className="flex flex-col gap-2">
        <Heading className="text-[#2F2F2F]" size="xs">
          {title}
        </Heading>
        <Text size="lg" className="text-[#2F2F2FB2]">
          {description}
        </Text>
      </div>
    </div>
  );
};
