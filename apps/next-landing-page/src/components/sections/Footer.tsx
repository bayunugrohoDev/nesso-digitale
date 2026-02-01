import Image from "next/image";
import { Container, Section } from "@nesso/shared-ui";
import { GoogleIcon, FacebookIcon, TwitterIcon, InstagramIcon } from "../icons";

export const Footer = () => {
  const footerLinks = {
    company: [
      { label: "Home", href: "" },
      { label: "Metodo dilavaro", href: "#" },
      { label: "Servizi", href: "#" },
      { label: "Chi siamo", href: "#" },
      { label: "Settori", href: "#" },
    ],
  };

  return (
    <footer className="bg-white">
      <Section spacing="sm">
        <Container
          size="lg"
          className="border-t pt-10 md:px-10 border-[#D9D9D9]"
        >
          <div className="flex flex-col md:flex-row gap-12 justify-between py-10 md:py-2">
            <div className="w-full md:w-1/3 flex flex-col gap-3 h-full">
              <a href="#home">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={192}
                  height={45}
                />
              </a>
              <p className="text-[#2F3042] mb-4">
                Costruiamo soluzioni digitali che semplificano il lavoro, un
                progetto alla volta.
              </p>
              <div className="flex gap-5 items-center">
                <a href="#">
                  <GoogleIcon />
                </a>
                <a href="#">
                  <FacebookIcon />
                </a>
                <a href="#">
                  <TwitterIcon />
                </a>
                <a href="#">
                  <InstagramIcon />
                </a>
              </div>
            </div>

            <div className="w-full md:max-w-62.5">
              <h4 className="font-semibold mb-5 text-[#2F3042]">Menus</h4>
              <ul className="grid grid-cols-2 gap-2 justify-star">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#232323] transition-colors underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <h4 className="font-semibold mb-5">Contatti</h4>
              <div className="mt-6">
                <p className="text-[#2F3042] text-sm underline mb-5">
                  Support@mail.com
                </p>

                <p className="text-[#2F3042] text-sm">
                  Modulo LTD, Golden Plaza, 7 Nile <br /> Street, Cairo EG2R 6DA
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
};
