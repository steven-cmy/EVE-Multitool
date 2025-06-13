# CharacterApi

All URIs are relative to *https://esi.evetech.net/latest*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCharactersCharacterId**](#getcharacterscharacterid) | **GET** /characters/{character_id}/ | Get character\&#39;s public information|
|[**getCharactersCharacterIdAgentsResearch**](#getcharacterscharacteridagentsresearch) | **GET** /characters/{character_id}/agents_research/ | Get agents research|
|[**getCharactersCharacterIdBlueprints**](#getcharacterscharacteridblueprints) | **GET** /characters/{character_id}/blueprints/ | Get blueprints|
|[**getCharactersCharacterIdCorporationhistory**](#getcharacterscharacteridcorporationhistory) | **GET** /characters/{character_id}/corporationhistory/ | Get corporation history|
|[**getCharactersCharacterIdFatigue**](#getcharacterscharacteridfatigue) | **GET** /characters/{character_id}/fatigue/ | Get jump fatigue|
|[**getCharactersCharacterIdMedals**](#getcharacterscharacteridmedals) | **GET** /characters/{character_id}/medals/ | Get medals|
|[**getCharactersCharacterIdNotifications**](#getcharacterscharacteridnotifications) | **GET** /characters/{character_id}/notifications/ | Get character notifications|
|[**getCharactersCharacterIdNotificationsContacts**](#getcharacterscharacteridnotificationscontacts) | **GET** /characters/{character_id}/notifications/contacts/ | Get new contact notifications|
|[**getCharactersCharacterIdPortrait**](#getcharacterscharacteridportrait) | **GET** /characters/{character_id}/portrait/ | Get character portraits|
|[**getCharactersCharacterIdRoles**](#getcharacterscharacteridroles) | **GET** /characters/{character_id}/roles/ | Get character corporation roles|
|[**getCharactersCharacterIdStandings**](#getcharacterscharacteridstandings) | **GET** /characters/{character_id}/standings/ | Get standings|
|[**getCharactersCharacterIdTitles**](#getcharacterscharacteridtitles) | **GET** /characters/{character_id}/titles/ | Get character corporation titles|
|[**postCharactersAffiliation**](#postcharactersaffiliation) | **POST** /characters/affiliation/ | Character affiliation|
|[**postCharactersCharacterIdCspa**](#postcharacterscharacteridcspa) | **POST** /characters/{character_id}/cspa/ | Calculate a CSPA charge cost|

# **getCharactersCharacterId**
> GetCharactersCharacterIdOk getCharactersCharacterId()

Public information about a character  --- Alternate route: `/dev/characters/{character_id}/`  Alternate route: `/legacy/characters/{character_id}/`  Alternate route: `/v5/characters/{character_id}/`  --- This route is cached for up to 604800 seconds

### Example

```typescript
import {
    CharacterApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CharacterApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterId(
    characterId,
    datasource,
    ifNoneMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|


### Return type

**GetCharactersCharacterIdOk**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Public data for the given character |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**404** | Character not found |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdAgentsResearch**
> Array<GetCharactersCharacterIdAgentsResearch200Ok> getCharactersCharacterIdAgentsResearch()

Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate)  --- Alternate route: `/dev/characters/{character_id}/agents_research/`  Alternate route: `/legacy/characters/{character_id}/agents_research/`  Alternate route: `/v1/characters/{character_id}/agents_research/`  Alternate route: `/v2/characters/{character_id}/agents_research/`  --- This route is cached for up to 3600 seconds

### Example

```typescript
import {
    CharacterApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CharacterApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdAgentsResearch(
    characterId,
    datasource,
    ifNoneMatch,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**Array<GetCharactersCharacterIdAgentsResearch200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of agents research information |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdBlueprints**
> Array<GetCharactersCharacterIdBlueprints200Ok> getCharactersCharacterIdBlueprints()

Return a list of blueprints the character owns  --- Alternate route: `/dev/characters/{character_id}/blueprints/`  Alternate route: `/legacy/characters/{character_id}/blueprints/`  Alternate route: `/v2/characters/{character_id}/blueprints/`  Alternate route: `/v3/characters/{character_id}/blueprints/`  --- This route is cached for up to 3600 seconds

### Example

```typescript
import {
    CharacterApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CharacterApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let page: number; //Which page of results to return (optional) (default to 1)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdBlueprints(
    characterId,
    datasource,
    ifNoneMatch,
    page,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **page** | [**number**] | Which page of results to return | (optional) defaults to 1|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**Array<GetCharactersCharacterIdBlueprints200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of blueprints |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  * X-Pages - Maximum page number <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdCorporationhistory**
> Array<GetCharactersCharacterIdCorporationhistory200Ok> getCharactersCharacterIdCorporationhistory()

Get a list of all the corporations a character has been a member of  --- Alternate route: `/dev/characters/{character_id}/corporationhistory/`  Alternate route: `/legacy/characters/{character_id}/corporationhistory/`  Alternate route: `/v1/characters/{character_id}/corporationhistory/`  Alternate route: `/v2/characters/{character_id}/corporationhistory/`  --- This route is cached for up to 86400 seconds

### Example

```typescript
import {
    CharacterApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CharacterApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdCorporationhistory(
    characterId,
    datasource,
    ifNoneMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|


### Return type

**Array<GetCharactersCharacterIdCorporationhistory200Ok>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Corporation history for the given character |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdFatigue**
> GetCharactersCharacterIdFatigueOk getCharactersCharacterIdFatigue()

Return a character\'s jump activation and fatigue information  --- Alternate route: `/dev/characters/{character_id}/fatigue/`  Alternate route: `/legacy/characters/{character_id}/fatigue/`  Alternate route: `/v1/characters/{character_id}/fatigue/`  Alternate route: `/v2/characters/{character_id}/fatigue/`  --- This route is cached for up to 300 seconds

### Example

```typescript
import {
    CharacterApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CharacterApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdFatigue(
    characterId,
    datasource,
    ifNoneMatch,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**GetCharactersCharacterIdFatigueOk**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Jump activation and fatigue information |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdMedals**
> Array<GetCharactersCharacterIdMedals200Ok> getCharactersCharacterIdMedals()

Return a list of medals the character has  --- Alternate route: `/dev/characters/{character_id}/medals/`  Alternate route: `/legacy/characters/{character_id}/medals/`  Alternate route: `/v1/characters/{character_id}/medals/`  Alternate route: `/v2/characters/{character_id}/medals/`  --- This route is cached for up to 3600 seconds

### Example

```typescript
import {
    CharacterApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CharacterApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdMedals(
    characterId,
    datasource,
    ifNoneMatch,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**Array<GetCharactersCharacterIdMedals200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of medals |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdNotifications**
> Array<GetCharactersCharacterIdNotifications200Ok> getCharactersCharacterIdNotifications()

Return character notifications  --- Alternate route: `/dev/characters/{character_id}/notifications/`  Alternate route: `/legacy/characters/{character_id}/notifications/`  Alternate route: `/v4/characters/{character_id}/notifications/`  Alternate route: `/v5/characters/{character_id}/notifications/`  Alternate route: `/v6/characters/{character_id}/notifications/`  --- This route is cached for up to 600 seconds

### Example

```typescript
import {
    CharacterApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CharacterApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdNotifications(
    characterId,
    datasource,
    ifNoneMatch,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**Array<GetCharactersCharacterIdNotifications200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns your recent notifications |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdNotificationsContacts**
> Array<GetCharactersCharacterIdNotificationsContacts200Ok> getCharactersCharacterIdNotificationsContacts()

Return notifications about having been added to someone\'s contact list  --- Alternate route: `/dev/characters/{character_id}/notifications/contacts/`  Alternate route: `/legacy/characters/{character_id}/notifications/contacts/`  Alternate route: `/v1/characters/{character_id}/notifications/contacts/`  Alternate route: `/v2/characters/{character_id}/notifications/contacts/`  --- This route is cached for up to 600 seconds

### Example

```typescript
import {
    CharacterApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CharacterApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdNotificationsContacts(
    characterId,
    datasource,
    ifNoneMatch,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**Array<GetCharactersCharacterIdNotificationsContacts200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of contact notifications |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdPortrait**
> GetCharactersCharacterIdPortraitOk getCharactersCharacterIdPortrait()

Get portrait urls for a character  --- Alternate route: `/dev/characters/{character_id}/portrait/`  Alternate route: `/v2/characters/{character_id}/portrait/`  Alternate route: `/v3/characters/{character_id}/portrait/`  --- This route expires daily at 11:05

### Example

```typescript
import {
    CharacterApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CharacterApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdPortrait(
    characterId,
    datasource,
    ifNoneMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|


### Return type

**GetCharactersCharacterIdPortraitOk**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Public data for the given character |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**404** | No image server for this datasource |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdRoles**
> GetCharactersCharacterIdRolesOk getCharactersCharacterIdRoles()

Returns a character\'s corporation roles  --- Alternate route: `/dev/characters/{character_id}/roles/`  Alternate route: `/legacy/characters/{character_id}/roles/`  Alternate route: `/v2/characters/{character_id}/roles/`  Alternate route: `/v3/characters/{character_id}/roles/`  --- This route is cached for up to 3600 seconds

### Example

```typescript
import {
    CharacterApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CharacterApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdRoles(
    characterId,
    datasource,
    ifNoneMatch,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**GetCharactersCharacterIdRolesOk**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The character\&#39;s roles in thier corporation |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdStandings**
> Array<GetCharactersCharacterIdStandings200Ok> getCharactersCharacterIdStandings()

Return character standings from agents, NPC corporations, and factions  --- Alternate route: `/dev/characters/{character_id}/standings/`  Alternate route: `/legacy/characters/{character_id}/standings/`  Alternate route: `/v1/characters/{character_id}/standings/`  Alternate route: `/v2/characters/{character_id}/standings/`  --- This route is cached for up to 3600 seconds

### Example

```typescript
import {
    CharacterApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CharacterApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdStandings(
    characterId,
    datasource,
    ifNoneMatch,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**Array<GetCharactersCharacterIdStandings200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of standings |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdTitles**
> Array<GetCharactersCharacterIdTitles200Ok> getCharactersCharacterIdTitles()

Returns a character\'s titles  --- Alternate route: `/dev/characters/{character_id}/titles/`  Alternate route: `/legacy/characters/{character_id}/titles/`  Alternate route: `/v1/characters/{character_id}/titles/`  Alternate route: `/v2/characters/{character_id}/titles/`  --- This route is cached for up to 3600 seconds

### Example

```typescript
import {
    CharacterApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CharacterApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdTitles(
    characterId,
    datasource,
    ifNoneMatch,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**Array<GetCharactersCharacterIdTitles200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of titles |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postCharactersAffiliation**
> Array<PostCharactersAffiliation200Ok> postCharactersAffiliation(characters)

Bulk lookup of character IDs to corporation, alliance and faction  --- Alternate route: `/dev/characters/affiliation/`  Alternate route: `/legacy/characters/affiliation/`  Alternate route: `/v1/characters/affiliation/`  Alternate route: `/v2/characters/affiliation/`  --- This route is cached for up to 3600 seconds

### Example

```typescript
import {
    CharacterApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CharacterApi(configuration);

let characters: Set<number>; //The character IDs to fetch affiliations for. All characters must exist, or none will be returned
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')

const { status, data } = await apiInstance.postCharactersAffiliation(
    characters,
    datasource
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characters** | **Set<number>**| The character IDs to fetch affiliations for. All characters must exist, or none will be returned | |
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|


### Return type

**Array<PostCharactersAffiliation200Ok>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Character corporation, alliance and faction IDs |  -  |
|**400** | Bad request |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postCharactersCharacterIdCspa**
> number postCharactersCharacterIdCspa(characters)

Takes a source character ID in the url and a set of target character ID\'s in the body, returns a CSPA charge cost  --- Alternate route: `/dev/characters/{character_id}/cspa/`  Alternate route: `/legacy/characters/{character_id}/cspa/`  Alternate route: `/v4/characters/{character_id}/cspa/`  Alternate route: `/v5/characters/{character_id}/cspa/` 

### Example

```typescript
import {
    CharacterApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CharacterApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let characters: Set<number>; //The target characters to calculate the charge for
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.postCharactersCharacterIdCspa(
    characterId,
    characters,
    datasource,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characters** | **Set<number>**| The target characters to calculate the charge for | |
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**number**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Aggregate cost of sending a mail from the source character to the target characters, in ISK |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

