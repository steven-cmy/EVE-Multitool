import {
  UniverseApi,
  Configuration,
  GetUniverseTypesTypeIdAcceptLanguageEnum,
  GetUniverseTypesTypeIdDatasourceEnum,
  GetUniverseTypesTypeIdLanguageEnum,
} from '@/api/esi';
import Dexie, { type EntityTable } from 'dexie';

interface UniverseType {
  typeId: number;
  datasets: {
    [key in GetUniverseTypesTypeIdLanguageEnum]: {
      etag: string;
      expireOn: Date;
      data: unknown;
    };
  };
}

// Define the database
const db = new Dexie('eveMultitool') as Dexie & {
  universeTypes: EntityTable<UniverseType, 'typeId'>;
};
db.version(1).stores({
  universeTypes: 'typeId,datasets',
});
const tableName = 'universeTypes';

export default async function getUniverseTypesTypeId(
  typeId: number,
  forceRefresh: boolean = false,
) {
  const language =
    (localStorage.getItem('locale') as GetUniverseTypesTypeIdLanguageEnum) ??
    GetUniverseTypesTypeIdLanguageEnum.En;

  // Try to get from cache first
  const dbResult = await db.table(tableName).get(typeId);
  const cached = dbResult?.datasets?.[language];
  const etag = dbResult ? cached?.etag : undefined;
  if (cached) {
    if (new Date(cached.expireOn) > new Date() && !forceRefresh) {
      console.log(`Using cached data for typeId ${typeId}`);
      return cached.data;
    }
  }

  // If not in cache, fetch from API
  const apiInstance = new UniverseApi(new Configuration());
  const acceptLanguage = language as GetUniverseTypesTypeIdAcceptLanguageEnum;
  const datasource = GetUniverseTypesTypeIdDatasourceEnum.Tranquility;

  const result = await apiInstance
    .getUniverseTypesTypeId(typeId, acceptLanguage, datasource, etag, language, {})
    .catch((error) => {
      if (error.status === 304) {
        // If the API returns 304 Not Modified, return cached data
        if (cached) {
          console.log(`Got 304. Using cached data for typeId ${typeId}`);
          return cached.data;
        }
      }
    });

  // Store in cache with dataset structure
  await db.table(tableName).put({
    typeId,
    datasets: {
      [result.headers['content-language']]: {
        etag: result.headers.etag ?? '',
        expireOn: new Date(result.headers.expires),
        data: result.data,
      },
    },
  });

  return result.data;
}
