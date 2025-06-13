# KillmailsApi

All URIs are relative to *https://esi.evetech.net/latest*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCharactersCharacterIdKillmailsRecent**](#getcharacterscharacteridkillmailsrecent) | **GET** /characters/{character_id}/killmails/recent/ | Get a character\&#39;s recent kills and losses|
|[**getCorporationsCorporationIdKillmailsRecent**](#getcorporationscorporationidkillmailsrecent) | **GET** /corporations/{corporation_id}/killmails/recent/ | Get a corporation\&#39;s recent kills and losses|
|[**getKillmailsKillmailIdKillmailHash**](#getkillmailskillmailidkillmailhash) | **GET** /killmails/{killmail_id}/{killmail_hash}/ | Get a single killmail|

# **getCharactersCharacterIdKillmailsRecent**
> Array<GetCharactersCharacterIdKillmailsRecent200Ok> getCharactersCharacterIdKillmailsRecent()

Return a list of a character\'s kills and losses going back 90 days  --- Alternate route: `/dev/characters/{character_id}/killmails/recent/`  Alternate route: `/legacy/characters/{character_id}/killmails/recent/`  Alternate route: `/v1/characters/{character_id}/killmails/recent/`  --- This route is cached for up to 300 seconds

### Example

```typescript
import {
    KillmailsApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new KillmailsApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let page: number; //Which page of results to return (optional) (default to 1)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdKillmailsRecent(
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

**Array<GetCharactersCharacterIdKillmailsRecent200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of killmail IDs and hashes |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  * X-Pages - Maximum page number <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCorporationsCorporationIdKillmailsRecent**
> Array<GetCorporationsCorporationIdKillmailsRecent200Ok> getCorporationsCorporationIdKillmailsRecent()

Get a list of a corporation\'s kills and losses going back 90 days  --- Alternate route: `/dev/corporations/{corporation_id}/killmails/recent/`  Alternate route: `/legacy/corporations/{corporation_id}/killmails/recent/`  Alternate route: `/v1/corporations/{corporation_id}/killmails/recent/`  --- This route is cached for up to 300 seconds  --- Requires one of the following EVE corporation role(s): Director 

### Example

```typescript
import {
    KillmailsApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new KillmailsApi(configuration);

let corporationId: number; //An EVE corporation ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let page: number; //Which page of results to return (optional) (default to 1)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCorporationsCorporationIdKillmailsRecent(
    corporationId,
    datasource,
    ifNoneMatch,
    page,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **corporationId** | [**number**] | An EVE corporation ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **page** | [**number**] | Which page of results to return | (optional) defaults to 1|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**Array<GetCorporationsCorporationIdKillmailsRecent200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of killmail IDs and hashes |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  * X-Pages - Maximum page number <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getKillmailsKillmailIdKillmailHash**
> GetKillmailsKillmailIdKillmailHashOk getKillmailsKillmailIdKillmailHash()

Return a single killmail from its ID and hash  --- Alternate route: `/dev/killmails/{killmail_id}/{killmail_hash}/`  Alternate route: `/legacy/killmails/{killmail_id}/{killmail_hash}/`  Alternate route: `/v1/killmails/{killmail_id}/{killmail_hash}/`  --- This route is cached for up to 30758400 seconds

### Example

```typescript
import {
    KillmailsApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new KillmailsApi(configuration);

let killmailHash: string; //The killmail hash for verification (default to undefined)
let killmailId: number; //The killmail ID to be queried (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)

const { status, data } = await apiInstance.getKillmailsKillmailIdKillmailHash(
    killmailHash,
    killmailId,
    datasource,
    ifNoneMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **killmailHash** | [**string**] | The killmail hash for verification | defaults to undefined|
| **killmailId** | [**number**] | The killmail ID to be queried | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|


### Return type

**GetKillmailsKillmailIdKillmailHashOk**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A killmail |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**420** | Error limited |  -  |
|**422** | Invalid killmail_id and/or killmail_hash |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

