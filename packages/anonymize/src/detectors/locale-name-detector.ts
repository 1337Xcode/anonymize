import { detectNameCorpus } from "./names";
import { defaultContext } from "../context";
import type { Entity } from "../types";
import type { PipelineContext } from "../context";

/**
 * Detect non-Western person names.
 *
 * @deprecated Use `detectNameCorpus` instead. The unified
 * name detector now handles both Western and non-Western
 * name patterns. This function delegates to it and is kept
 * for backward compatibility.
 */
export const detectNonWesternNames = (
  fullText: string,
  ctx: PipelineContext = defaultContext,
): Entity[] => detectNameCorpus(fullText, ctx);
