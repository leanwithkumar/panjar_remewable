// Careercomponent3.tsx or .jsx

import Image from "next/image";

interface CareerCardProps {
  name: string;
  tags: string[];
  description: string;
  imageUrl: string;
}

export default function Careercomponent3({
  name,
  tags,
  description,
  imageUrl,
}: CareerCardProps) {
  return (
    <div className="relative w-[300px] h-[450px] rounded-2xl overflow-hidden shadow-lg">
      
      <Image
        src={imageUrl}
        alt={name}
        fill
        className="object-cover transition duration-300 ease-in-out hover:blur-sm"
        sizes="(max-width: 768px) 100vw, 600px"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-8 z-10">
        <h2 className="text-3xl font-bold mb-2">{name}</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="max-w-lg text-lg">{description}</p>
      </div>
    </div>
  );
}
