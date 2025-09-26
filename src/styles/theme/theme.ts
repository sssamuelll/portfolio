// theme/theme.ts
export interface Theme {
  background: string;
  text: string;
  border: string;
  surface: string;
  surface2: string;
  brandGradient: string;
  muted: string;
  shadowSm: string;
  shadowMd: string;
}

export const lightTheme: Theme = {
  background: "var(--bg-0)",
  text: "var(--text)",
  border: "var(--border)",
  surface: "var(--surface)",
  surface2: "var(--surface-2)",
  brandGradient: "var(--brand-grad)",
  muted: "var(--muted)",
  shadowSm: "var(--shadow-sm)",
  shadowMd: "var(--shadow-md)",
};

export const darkTheme: Theme = {
  background: "var(--bg-0)",  // cambia con data-theme="dark"
  text: "var(--text)",
  border: "var(--border)",
  surface: "var(--surface)",
  surface2: "var(--surface-2)",
  brandGradient: "var(--brand-grad)",
  muted: "var(--muted)",
  shadowSm: "var(--shadow-sm)",
  shadowMd: "var(--shadow-md)",
};
