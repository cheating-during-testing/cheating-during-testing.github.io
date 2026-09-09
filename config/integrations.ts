import type { IntegrationConfig } from "./types";

const pirschCode = process.env.NEXT_PUBLIC_PIRSCH_CODE?.trim();
const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?.trim();
const adScriptUrl = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_SCRIPT_URL?.trim();
const adContainerId = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_CONTAINER_ID?.trim();
const socialBarScriptUrl = process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_SCRIPT_URL?.trim();

export const integrations: IntegrationConfig = {
  analytics: googleAnalyticsId
    ? { provider: "google", measurementId: googleAnalyticsId }
    : pirschCode
      ? { provider: "pirsch", code: pirschCode }
      : { provider: "none" },
  ads:
    adScriptUrl && adContainerId
      ? {
          provider: "adsterra-native",
          scriptUrl: adScriptUrl,
          containerId: adContainerId,
        }
      : { provider: "none" },
  socialBar: socialBarScriptUrl
    ? {
        provider: "adsterra-social-bar",
        scriptUrl: socialBarScriptUrl,
      }
    : { provider: "none" },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION?.trim() || null,
    bing: process.env.BING_SITE_VERIFICATION?.trim() || null,
  },
};
