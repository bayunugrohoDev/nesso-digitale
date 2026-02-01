import { Heading } from "./Typography";

export const Title = ({ label }: { label: string }) => {
  return (
    <div className="relative mb-6">
      <Heading size="md">{label} </Heading>
      <svg
        width="160"
        height="6"
        viewBox="0 0 160 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-6 md:top-8 left-0 w-26 md:w-auto"
      >
        <rect width="160" height="6" fill="#0B5ED7" />
      </svg>
    </div>
  );
};

