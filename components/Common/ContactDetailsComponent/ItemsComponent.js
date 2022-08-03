import { MotionDiv } from "../MotionDiv";

export const ItemsComponent = ({
  duration,
  initialY,
  delay,
  title,
  children,
}) => (
  <>
    <MotionDiv duration={duration} initialY={initialY} delay={delay}>
      <div className="flex flex-col md:text-start text-center mb-7">
        <span className="text-secondary-light-text-500 dark:text-primary-dark-text-500 font-bold mb-[.55rem]">
          {title}
        </span>
        {children}
      </div>
    </MotionDiv>
  </>
);
