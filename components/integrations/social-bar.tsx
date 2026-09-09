import Script from "next/script";
import { integrations } from "@/config/integrations";

export function SocialBar() {
  if (integrations.socialBar.provider !== "adsterra-social-bar") return null;

  return <Script src={integrations.socialBar.scriptUrl} strategy="afterInteractive" />;
}
