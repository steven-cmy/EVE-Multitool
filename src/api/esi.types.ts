import { createESIClient } from '@/services/esi';
import type { Router } from 'vue-router';

export interface TypeInfo {
  capacity: number;
  description: string;
  group_id: number;
  icon_id: number;
  market_group_id: number;
  mass: number;
  name: string;
  packaged_volume: number;
  portion_size: number;
  published: boolean;
  radius: number;
  type_id: number;
  volume: number;
}

export async function getTypeById(
  typeId: number,
  lang?: string,
  dataSource?: string,
): Promise<TypeInfo | undefined> {
  const esiClient = await createESIClient();
  console.log(esiClient);
  try {
    const response = await esiClient.apis.Universe.get_universe_types_type_id({
      type_id: typeId,
      datasource: dataSource,
      language: lang,
    });
    console.log(response);
    return response.obj as TypeInfo;
  } catch (error) {
    console.error(`Failed to fetch type info for ID ${typeId}:`, error);
    return undefined;
  }
}

export function processEVEMarkup(markup: string, router: Router): string {
  if (!markup) return '';
  return markup
    .replace(/href=showinfo:(\d+)/gi, (_, typeId) => {
      const path = router.resolve({
        name: 'types-showinfo',
        params: { typeid: typeId },
      }).href;
      return `href="${path}"`;
    })
    .replace(/<b>/g, '<span style="font-weight:bold;">')
    .replace(/<\/b>/g, '</span>')
    .replace(/<color=(\w+)>/g, (_, color) => {
      return `<span style="color:${color};">`;
    })
    .replace(/<\/color>/g, '</span>');
}
