import Button, {
  type ButtonProps as MUIButtonProps,
} from "@mui/material/Button";

type CustomColor = "successCustom";

interface ButtonProps extends Omit<MUIButtonProps, "color"> {
  color?: MUIButtonProps["color"] | CustomColor;
}

const customColorClasses: Record<CustomColor, string> = {
  successCustom:
    "bg-color-success-400 text-black hover:bg-gray-400 focus-visible: ring-lime-500",
};

export default function ButtonEK({
  children,
  className,
  color,
  ...props
}: ButtonProps) {
  const customClass =
    typeof color === "string" &&
    (Object.keys(customColorClasses) as string[]).includes(color)
      ? customColorClasses[color as CustomColor]
      : "";

  const combinedClassName = [className, customClass].filter(Boolean).join(" ");

  const muiColor = customClass
    ? undefined
    : (color as MUIButtonProps["color"] | undefined);

  return (
    <Button
      variant="contained"
      className={combinedClassName}
      color={muiColor}
      {...props}
    >
      {children}
    </Button>
  );
}
