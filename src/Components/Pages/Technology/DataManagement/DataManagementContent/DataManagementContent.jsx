import VerticalLine from "../../../../Shared/MiniComponents/VerticalLine/VerticalLine";
import s from "./DataManagementContent.module.scss";

const DataManagementContent = () => {
  return (
    <div className={s.wrapper}>
      <VerticalLine
        lineHeight="320px"
        VerticalLineHeight="258px"
        initialY="150px"
        animateTo="60px"
        lineColors={{
          lineColor: "#707070",
          VerticalLineColor: "#000",
        }}
      />

      <div className={s.content}>
        <h2 className={s.title}>ADVANCED INFORMATION MANAGEMENT</h2>
        <p className={s.description}>
          Our advanced information management systems are designed to handle
          complex data structures, facilitate easy access to information, and
          provide comprehensive insights. We understand the power of information
          and aim to assist businesses in harnessing this potential to drive
          strategic growth and operational efficiency.
        </p>
      </div>
    </div>
  );
};
export default DataManagementContent;
