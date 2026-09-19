import { integrations } from "@/config/integrations";
import { NativeAdClient } from "./native-ad-client";

export function NativeAdSlot() {
  if (integrations.ads.provider !== "adsterra-native") return null;

  return (
    <section className="native-ad-placement" aria-label="Advertisement">
      <p className="native-ad-placement__label">Advertisement</p>
      <NativeAdClient
        scriptUrl={integrations.ads.scriptUrl}
        containerId={integrations.ads.containerId}
      />
    </section>
  );
}
