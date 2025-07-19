type Annualpros = {
  year: string;
  points: string[];
  bgColor?: string;
};

export default function Annual({ year, points, bgColor = "#1A73E8" }: Annualpros) {
  return (
    
    <div className="rounded-2xl overflow-hidden w-[300px] shadow-lg">
      
      <div
        className="py-20 flex items-center justify-center text-white font-bold text-8xl"
        style={{ backgroundColor: bgColor }}
      >
        {year}
      </div>

    
      <div className="bg-gray-50 font-mono p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{year}</h3>
        <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 text-[1rem] font-medium">
        {points.map((point, index) => (
        <li key={index}>{point}</li>
        ))}
      </ul>
      </div>




    </div>
          


    
  );
}
