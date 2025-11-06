// src/components/ui/ButtonEK/ButtonEK.tsx
import * as React from "react";
import MUIButton, {
  type ButtonProps as MUIButtonProps,
} from "@mui/material/Button";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * Extende o Button do MUI:
 * - Encaminha ref (compat focus/ripple)
 * - Aceita className (Tailwind aplica por cima)
 * - Suporta size = 'sx' | 'xs' | 'small' | 'medium' | 'large' | 'md' (alias)
 */
type ExtraSizes = "sx" | "xs" | "md"; // 'md' como alias de medium (se quiser)
type ButtonSize = MUIButtonProps["size"] | ExtraSizes;

export interface ButtonEKProps extends Omit<MUIButtonProps, "size"> {
  size?: ButtonSize;
  /** Classes padrão do projeto podem ser desligadas se quiser */
  unstyled?: boolean;
}

export const ButtonEK = React.forwardRef<HTMLButtonElement, ButtonEKProps>(
  (
    {
      children,
      className,
      color = "primary", // mantém API do MUI
      variant = "contained", // idem
      size = "medium",
      unstyled = false,
      disableElevation = true,
      ...props
    },
    ref
  ) => {
    // Mapeia tamanhos "dialeto Tailwind" -> utilitários
    const sizeClasses: Record<string, string> = {
      sx: "h-7 px-2 text-[0.75rem] rounded-md",
      xs: "h-8 px-3 text-sm rounded-lg",
      small: "h-9 px-3 text-sm rounded-lg",
      md: "h-10 px-4 text-base rounded-xl", // alias prático
      medium: "h-10 px-4 text-base rounded-xl",
      large: "h-11 px-5 text-base rounded-2xl",
    };

    // Classes base (garante baseline de UX)
    const base =
      "btn-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

    // Por padrão, deixamos as classes de cor a cargo do MUI (palette),
    // mas você pode adicionar presets Tailwind para reforçar o style
    const colorClasses: Partial<
      Record<NonNullable<MUIButtonProps["color"]>, string>
    > = {
      success: "text-white bg-success-600 hover:bg-success-700",
      // brand: "text-white bg-brand-600 hover:bg-brand-700", // se criar brand
    };

    // Variant helpers opcionais (ex.: text/outlined afinados com Tailwind)
    const variantClasses: Partial<
      Record<NonNullable<MUIButtonProps["variant"]>, string>
    > = {
      contained: "",
      outlined: "border border-current",
      text: "underline-offset-4 hover:underline",
    };

    const composedClassName = twMerge(
      clsx(
        !unstyled && base,
        !unstyled && sizeClasses[size ?? "medium"],
        !unstyled && variantClasses[variant],
        !unstyled && color && colorClasses[color], // só aplica se houver preset de cor
        className
      )
    );

    // Se você quiser que o MUI “ache” o size aproximado, mapeie:
    const muiSize: MUIButtonProps["size"] =
      size === "sx" || size === "xs"
        ? "small"
        : size === "md"
        ? "medium"
        : ["small", "medium", "large"].includes(String(size))
        ? (size as any)
        : "medium";

    return (
      <MUIButton
        ref={ref}
        color={color}
        variant={variant}
        size={muiSize}
        disableElevation={disableElevation}
        className={composedClassName}
        {...props}
      >
        {children}
      </MUIButton>
    );
  }
);

ButtonEK.displayName = "ButtonEK";

export default ButtonEK;
