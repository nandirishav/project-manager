import clsx from "clsx"

const GlassPane = ({ children, className }) => {
  return (
    <div className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200 gap-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;