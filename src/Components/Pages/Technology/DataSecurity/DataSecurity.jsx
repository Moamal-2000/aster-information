import { dataSecurityData } from "src/Data/staticData";
import DataSecurityStack from "./DataSecurityStack/DataSecurityStack";
import s from "./DataSecurity.module.scss";

const DataSecurity = () => {
  return (
    <section className={s.dataSecurity}>
      <div className="container" data-container>
        {dataSecurityData.map(({ id, title, description }) => (
          <DataSecurityStack key={id} title={title}>
            {description}
          </DataSecurityStack>
        ))}
      </div>
    </section>
  );
};
export default DataSecurity;
