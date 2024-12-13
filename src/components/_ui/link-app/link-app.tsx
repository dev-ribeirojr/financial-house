import { Link, LinkProps } from "expo-router";

export function LinkApp(data: LinkProps) {
  const { children, className, ...rest } = data
  return (
    <Link className={`text-primary-700 ${className}`} {...rest}>
      {children}
    </Link>
  )
}