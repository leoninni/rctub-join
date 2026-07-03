import logoJpg from "@/assets/logo.jpg";

interface Props {
  className?: string;
}

export function Logo({ className }: Props) {
  return (
    <img
      src={logoJpg}
      alt="RCTUB"
      className={className}
      style={{ mixBlendMode: "screen" }}
    />
  );
}
