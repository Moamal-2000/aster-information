import AnimatedLine from "../../../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import s from "./CoreExpertiseContent.module.scss";

const CoreExpertiseContent = () => {
  return (
    <div className={s.wrapper}>
      <AnimatedLine
        lineHeight="406px"
        animatedLineHeight="344px"
        initialY="150px"
        animateTo="60px"
      />

      <div className={s.content}>
        <h2 className={s.title}>INTELLIGENT SOFTWARE DEVELOPMENT</h2>
        <p className={s.description}>
          At Aster Information Limited, we specialize in developing
          sophisticated software solutions, utilizing artificial intelligence
          and advanced algorithms. Our software not only simplifies complex
          tasks but also provides a platform for businesses to harness their
          data effectively and make informed strategic decisions.
        </p>
      </div>
    </div>
  );
};
export default CoreExpertiseContent;
