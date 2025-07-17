import Annual from "./Annual";



export default function Homecomponent4() {
  return (
    <>
      

<div className="max-w-4xl mx-auto px-4">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A202C] leading-tight mb-6 text-center">
    WHAT WE&apos;VE DONE SO FAR
  </h2>
  <p className="text-base font-medium text-left sm:text-center text-[#2D3748] leading-relaxed">
   We’re building an energy future that is seamless, sustainable, and empowering for all. From rural communities to modern enterprises, our solutions are already lighting lives and transforming how people experience energy. By combining innovation with impact, we’ve consistently delivered smarter, cleaner, and more reliable renewable energy systems — and we’re just getting started.
  </p>
</div>
<div>












</div>


<div className="grid grid-col-1 md:grid-cols-3 gap-4 py-20">

<Annual
 year="2024"
        bgColor="#98E4FF"
        points={[
          "Reached 50+ million customers",
          "Most downloaded finance app in 19 countries",
          "Processed $1+ trillion in customer transactions"
        ]}
      />

<Annual
 year="2023"
        bgColor="#1A73E8"
        points={[
          "Reached 50+ million customers",
          "Most downloaded finance app in 19 countries",
          "Processed $1+ trillion in customer transactions"
        ]}
      />
      <Annual
 year="2022"
        bgColor="#B6F500"
        points={[
          "Reached 50+ million customers",
          "Most downloaded finance app in 19 countries",
          "Processed $1+ trillion in customer transactions"
        ]}
      />

<Annual
 year="2021"
        bgColor="#D5FFE4"
        points={[
          "Reached 50+ million customers",
          "Most downloaded finance app in 19 countries",
          "Processed $1+ trillion in customer transactions"
        ]}
      />

<Annual
 year="2020"
        bgColor="#6F61C0"
        points={[
          "Reached 50+ million customers",
          "Most downloaded finance app in 19 countries",
          "Processed $1+ trillion in customer transactions"
        ]}
      />

      <Annual
 year="2019"
        bgColor="#A084E8"
        points={[
          "Reached 50+ million customers",
          "Most downloaded finance app in 19 countries",
          "Processed $1+ trillion in customer transactions"
        ]}
      />
      


    </div>

    </>
  );
}
