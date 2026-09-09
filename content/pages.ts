import type { SeoPageDefinition } from "@/config/types";
import rawPages from "./generated/pages.json";
import { snitchPage } from "./snitch-page";

export const corePages: SeoPageDefinition[] = [...(rawPages as SeoPageDefinition[]), snitchPage];
