import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import { Container, Section, Button, Badge, Heading } from "@nesso/shared-ui";
import { brands } from "@nesso/shared-config";

export const Hero = () => {
  return (
    <Section>
      <Container size="lg" className="relative pt-10 md:py-20 overflow-x-hidden lg:overflow-x-visible">
        <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
          <div className="order-2 md:order-1 space-y-4 md:space-y-8 animate-fade-in">
            <div>
              <Heading as="h1" size="xl" className="text-nowrap">
                NESSO DIGITALE
              </Heading>
              <Heading as="h1" size="xl" weight="normal">
                LAB
              </Heading>
            </div>

            <hr className="border-[#D9D9D9] h-2 md:w-screen max-w-7xl" />

            <div className="pt-4">
              <Button
                size="sm"
                variant="outline"
                className="text-black! font-semibold hover:text-white!"
              >
                Prenota una Consulenza
                <ArrowUpRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 text-primary group-hover:text-white" />
              </Button>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-black">
                Brands that work with us
              </h2>
              <div className="flex flex-wrap gap-3 w-73.25">
                {brands.map((brand, index) => (
                  <Badge key={index} variant={brand.variant}>
                    <Image
                      src={`/images/brands/${brand.image}`}
                      width={brand.width}
                      height={brand.height}
                      style={{
                        width: brand.width,
                        height: brand.height
                      }}
                      alt={brand.image}
                    />
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative md:h-150 flex items-center justify-center animate-slide-up">
            <div className="relative w-full h-full">
              <Image
                src="/images/hero-section.png"
                width={700}
                height={598}
                className="relative md:absolute md:-right-2 md:top-1/6 z-10 max-w-full w-full md:w-full"
                alt="Hero"
                priority
              />
              <Image
                src={"/images/spider.svg"}
                height={1038}
                width={782}
                className="absolute top-0 left-0 z-0 md:hidden h-full w-full"
                priority
                alt=""
              />
            </div>
          </div>
        </div>
        <Image
          src={"/images/spider.svg"}
          height={1038}
          width={782}
          className="absolute md:-top-20 md:-right-30 z-0 hidden md:block"
          alt=""
        />
      </Container>
    </Section>
  );
};
