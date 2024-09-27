import {
  dataManagementBg,
  smallDataManagementBg,
} from "src/Assets/Images/Images";
import s from "./DataManagement.module.scss";
import DataManagementContent from "./DataManagementContent/DataManagementContent";

const DataManagement = () => {
  return (
    <section className={s.dataManagement}>
      <div className="container" data-container>
        <DataManagementContent />
      </div>

      <img
        className={s.dataManagementBg}
        src={dataManagementBg}
        srcSet={`${smallDataManagementBg} 768w, ${dataManagementBg} 1200w`}
        alt="Data Management Background"
        width="734px"
        height="894px"
        loading="lazy"
      />
    </section>
  );
};

export default DataManagement;
