import Button, {
  type ButtonProps as MUIButtonProps,
} from "@mui/material/Button";

type ColorCustom = {
  success: "bg-lime-500 text-black hover:bg-gray-400 focus-visible: ring-lime-500";
};

// export const buttonVariants = cva(
//   `flex items-center justify-center cursor-pointer transition rounded-lg group gap-2`,
//   {
//     variants: {
//       coloracao: {
//         sucesso:
//           "bg-lime-500 text-black hover:bg-gray-400 focus-visible: ring-lime-500",
//         erros:
//           "bg-red-600 text-white hover:bg-gray-400 hover:text-black focus-visible:ring-red-600",
//       },
//       tamanhos: {
//         smalls: "px-3 py-1 text-sm",
//         mediums: "px-4 py-2 text-base",
//         larges: "px-6 py-3 text-lg",
//       },
//     },
//     defaultVariants: {
//       coloracao: "sucesso",
//       tamanhos: "mediums",
//     },
//   }
// );

interface ButtonProps extends Omit<MUIButtonProps, "color"> {
  color?: MUIButtonProps["color"] | ColorCustom;
}
//     VariantProps<typeof buttonVariants> {
//   children?: string;
//   color: MUIButtonProps["color"] | ColorCustom;
//   className?: string;
// }

export default function ButtonEK({
  children,
  color,
  // coloracao = "primary",
  // tamanhos = "medium",
  className,
  // ...rest,
  ...props
}: ButtonProps) {
  return (
    <Button
      variant="contained"
      // sizes={tamanhos}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
}
