import { ArrowUpRight } from "lucide-react";
import {
  Container,
  Section,
  Card,
  CardContent,
  CardTitle,
  TitleSection,
} from "@nesso/shared-ui";
import { services } from "@nesso/shared-config";

export const Services = () => {


  return (
    <Section spacing="lg" className="bg-white">
      <Container size="lg">
        <TitleSection
          label="I nostri servizi"
          description="Questi servizi sono progettati per aiutare i clienti a costruire e far crescere il proprio brand attraverso strategie creative e soluzioni digitali innovative."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              variant="default"
              hover
              className="group bg-[#F1F1F1]"
            >
              <div className="mb-2 md:mb-4">
                <CardTitle
                  as="h3"
                  className=" group-hover:text-primary transition-colors flex justify-between"
                >
                  {service.title}

                  <ArrowUpRight className="invisible group-hover:visible h-8 w-8 text-primary transition-all" />
                </CardTitle>
              </div>

              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
