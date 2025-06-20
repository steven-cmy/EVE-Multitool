# SearchApi

All URIs are relative to *https://esi.evetech.net/latest*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCharactersCharacterIdSearch**](#getcharacterscharacteridsearch) | **GET** /characters/{character_id}/search/ | Search on a string|

# **getCharactersCharacterIdSearch**
> GetCharactersCharacterIdSearchOk getCharactersCharacterIdSearch()

Search for entities that match a given sub-string.  --- Alternate route: `/dev/characters/{character_id}/search/`  Alternate route: `/legacy/characters/{character_id}/search/`  Alternate route: `/v3/characters/{character_id}/search/`  --- This route is cached for up to 3600 seconds

### Example

```typescript
import {
    SearchApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new SearchApi(configuration);

let categories: Set<'agent' | 'alliance' | 'character' | 'constellation' | 'corporation' | 'faction' | 'inventory_type' | 'region' | 'solar_system' | 'station' | 'structure'>; //Type of entities to search for (default to undefined)
let characterId: number; //An EVE character ID (default to undefined)
let search: string; //The string to search on (default to undefined)
let acceptLanguage: 'en' | 'en-us' | 'de' | 'fr' | 'ja' | 'ru' | 'zh' | 'ko' | 'es'; //Language to use in the response (optional) (default to 'en')
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let language: 'en' | 'en-us' | 'de' | 'fr' | 'ja' | 'ru' | 'zh' | 'ko' | 'es'; //Language to use in the response, takes precedence over Accept-Language (optional) (default to 'en')
let strict: boolean; //Whether the search should be a strict match (optional) (default to false)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdSearch(
    categories,
    characterId,
    search,
    acceptLanguage,
    datasource,
    ifNoneMatch,
    language,
    strict,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categories** | **Array<&#39;agent&#39; &#124; &#39;alliance&#39; &#124; &#39;character&#39; &#124; &#39;constellation&#39; &#124; &#39;corporation&#39; &#124; &#39;faction&#39; &#124; &#39;inventory_type&#39; &#124; &#39;region&#39; &#124; &#39;solar_system&#39; &#124; &#39;station&#39; &#124; &#39;structure&#39;>** | Type of entities to search for | defaults to undefined|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **search** | [**string**] | The string to search on | defaults to undefined|
| **acceptLanguage** | [**&#39;en&#39; | &#39;en-us&#39; | &#39;de&#39; | &#39;fr&#39; | &#39;ja&#39; | &#39;ru&#39; | &#39;zh&#39; | &#39;ko&#39; | &#39;es&#39;**]**Array<&#39;en&#39; &#124; &#39;en-us&#39; &#124; &#39;de&#39; &#124; &#39;fr&#39; &#124; &#39;ja&#39; &#124; &#39;ru&#39; &#124; &#39;zh&#39; &#124; &#39;ko&#39; &#124; &#39;es&#39;>** | Language to use in the response | (optional) defaults to 'en'|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **language** | [**&#39;en&#39; | &#39;en-us&#39; | &#39;de&#39; | &#39;fr&#39; | &#39;ja&#39; | &#39;ru&#39; | &#39;zh&#39; | &#39;ko&#39; | &#39;es&#39;**]**Array<&#39;en&#39; &#124; &#39;en-us&#39; &#124; &#39;de&#39; &#124; &#39;fr&#39; &#124; &#39;ja&#39; &#124; &#39;ru&#39; &#124; &#39;zh&#39; &#124; &#39;ko&#39; &#124; &#39;es&#39;>** | Language to use in the response, takes precedence over Accept-Language | (optional) defaults to 'en'|
| **strict** | [**boolean**] | Whether the search should be a strict match | (optional) defaults to false|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**GetCharactersCharacterIdSearchOk**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of search results |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  * Content-Language - The language used in the response <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

