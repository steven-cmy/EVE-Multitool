# LocationApi

All URIs are relative to *https://esi.evetech.net/latest*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCharactersCharacterIdLocation**](#getcharacterscharacteridlocation) | **GET** /characters/{character_id}/location/ | Get character location|
|[**getCharactersCharacterIdOnline**](#getcharacterscharacteridonline) | **GET** /characters/{character_id}/online/ | Get character online|
|[**getCharactersCharacterIdShip**](#getcharacterscharacteridship) | **GET** /characters/{character_id}/ship/ | Get current ship|

# **getCharactersCharacterIdLocation**
> GetCharactersCharacterIdLocationOk getCharactersCharacterIdLocation()

Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable  --- Alternate route: `/dev/characters/{character_id}/location/`  Alternate route: `/legacy/characters/{character_id}/location/`  Alternate route: `/v1/characters/{character_id}/location/`  Alternate route: `/v2/characters/{character_id}/location/`  --- This route is cached for up to 5 seconds

### Example

```typescript
import {
    LocationApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new LocationApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdLocation(
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

**GetCharactersCharacterIdLocationOk**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdOnline**
> GetCharactersCharacterIdOnlineOk getCharactersCharacterIdOnline()

Checks if the character is currently online  --- Alternate route: `/dev/characters/{character_id}/online/`  Alternate route: `/v2/characters/{character_id}/online/`  Alternate route: `/v3/characters/{character_id}/online/`  --- This route is cached for up to 60 seconds

### Example

```typescript
import {
    LocationApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new LocationApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdOnline(
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

**GetCharactersCharacterIdOnlineOk**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Object describing the character\&#39;s online status |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdShip**
> GetCharactersCharacterIdShipOk getCharactersCharacterIdShip()

Get the current ship type, name and id  --- Alternate route: `/dev/characters/{character_id}/ship/`  Alternate route: `/legacy/characters/{character_id}/ship/`  Alternate route: `/v1/characters/{character_id}/ship/`  Alternate route: `/v2/characters/{character_id}/ship/`  --- This route is cached for up to 5 seconds

### Example

```typescript
import {
    LocationApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new LocationApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdShip(
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

**GetCharactersCharacterIdShipOk**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get the current ship type, name and id |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

