import { Title } from "./Title";

export const TitleSection = ({
  label,
  description,
}: {
  label: string;
  description: string;
}) => {
  return (
    <div className="md:mb-16 mb-8 flex flex-col md:flex-row justify-between">
      <div className="md:w-1/2">
        <Title label={label} />
      </div>
      <p className="text-xl text-gray-600 md:max-w-101.5 md:w-1/2">
        {description}
      </p>
    </div>
  );
};
