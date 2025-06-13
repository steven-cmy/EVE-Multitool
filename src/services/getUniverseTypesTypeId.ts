import {
  UniverseApi,
  Configuration,
  GetUniverseTypesTypeIdAcceptLanguageEnum,
  GetUniverseTypesTypeIdDatasourceEnum,
  GetUniverseTypesTypeIdLanguageEnum,
} from '@/api/esi';
import Dexie from 'dexie';

// Define the database
const db = new Dexie('eveMultitool');
db.version(1).stores({
  universeTypes: 'typeId',
});

export default async function getUniverseTypesTypeId(typeId: number) {
  // Try to get from cache first
  const cached = await db.table('universeTypes').get(typeId);
  if (cached) {
    return cached;
  }

  // If not in cache, fetch from API
  const apiInstance = new UniverseApi(new Configuration());
  const acceptLanguage = GetUniverseTypesTypeIdAcceptLanguageEnum.En;
  const datasource = GetUniverseTypesTypeIdDatasourceEnum.Tranquility;
  const language = localStorage.getItem('locale') as GetUniverseTypesTypeIdLanguageEnum;

  const result = await apiInstance.getUniverseTypesTypeId(
    typeId,
    acceptLanguage,
    datasource,
    undefined,
    language,
    {},
  );

  // Store in cache
  await db.table('universeTypes').put(result, typeId);

  return result;
}
