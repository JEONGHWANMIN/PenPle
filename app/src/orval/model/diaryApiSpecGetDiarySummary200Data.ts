/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Tspec API
 * OpenAPI spec version: 0.0.1
 */
import type {KeyStringValueString} from './keyStringValueString';

export type DiaryApiSpecGetDiarySummary200Data = {
  userDiaryDateList: string[];
  totalDiariesCount: number;
  monthDiariesCount: number;
  moodCountList: KeyStringValueString[];
  weatherCountList: KeyStringValueString[];
};