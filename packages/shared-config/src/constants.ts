export type Project = {
  title: string;
  client: string;
  description: string;
  image: string;
};

export const projects = [
  {
    title: "AC Milan App",
    client: "Official App Milan",
    description:
      "An official mobile experience crafted to bring fans closer to the club through performance-driven design and intuitive interaction.",
    image: "/images/projects/project-1.png",
  },
  {
    title: "Delivery App",
    client: "Official App Logistics",
    description:
      "Safeway Courier Service is a growing logistics company specializing in parcel delivery, e-commerce shipping, and corporate courier solutions.",
    image: "/images/projects/project-2.png",
  },
  {
    title: "Max Blog Website",
    client: "Website Development",
    description:
      "Our team developed a modern and fully responsive News Blog Website tailored for delivering fast, reliable, and engaging conten.",
    image: "/images/projects/project-3.png",
  },
];

export const brands: {
  image: string;
  variant: "default" | "primary";
  height: number;
  width: number;
}[] = [
  { image: "Niscala.png", variant: "default", height: 12, width: 72 },
  { image: "Samtiv.png", variant: "primary", height: 8, width: 60 },
  { image: "IEA.png", variant: "default", height: 14, width: 50 },
  { image: "Slavica.png", variant: "default", height: 12, width: 50 },
  { image: "UNICA.png", variant: "default", height: 9, width: 50 },
  { image: "booking.png", variant: "default", height: 12, width: 60 },
];

export const services = [
  {
    title: "Progetti su misura",
    description:
      "Progettiamo e sviluppiamo applicazioni web e app personalizzate, consulenza su tech stack e integrazioni con il tuo business.",
    showIcon: true,
  },
  {
    title: "Team on-demand",
    description:
      "Rafforziamo il tuo team con sviluppatori e DevOps esperti, pronti ad integrarsi rapidamente nei tuoi processi.",
    showIcon: false,
  },
];