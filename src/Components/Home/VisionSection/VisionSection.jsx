import { visionSectionBg } from "src/Assets/Images/Images";
import s from "./VisionSection.module.scss";

const VisionSection = () => {
  return (
    <section className={s.visionSection}>
      <div className="container">
        {/* Animated Line */}

        <div className={s.content}>
          <h2 className={s.title}>VISION</h2>
          <p className={s.subTitle}>
            Driving Innovation in Information Management
          </p>
          <p className={s.description}>
            At Aster Information Limited, we're committed to revolutionizing the
            way businesses manage data and IT solutions. By harnessing the power
            of AI, we aim to deliver services that redefine efficiency and
            innovation. We believe in a future where strategic information
            management propels businesses to new heights, and we're at the
            forefront of making that future a reality.
          </p>
        </div>

        <div className={s.imgHolder}>
          <img
            loading="lazy"
            src={visionSectionBg}
            alt="Abstract digital cube with illuminated circuits and data panels, representing advanced technology and information management."
          />
        </div>
      </div>
    </section>
  );
};
export default VisionSection;
