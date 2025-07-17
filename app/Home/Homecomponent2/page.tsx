import CustomerStat from "./CustomerStat";
import CustomerStat1 from "./CustomerStat1";
import CustomerStat2 from "./CustomerStat2";
import CustomerStat3 from "./CustomerStat3";

export default function Homecomponent2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-10 items-center">
      <CustomerStat />
      <CustomerStat1 />
      <CustomerStat2 />
      <CustomerStat3/>
    </div>
  );
}
