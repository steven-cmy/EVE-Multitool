# FittingsApi

All URIs are relative to *https://esi.evetech.net/latest*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteCharactersCharacterIdFittingsFittingId**](#deletecharacterscharacteridfittingsfittingid) | **DELETE** /characters/{character_id}/fittings/{fitting_id}/ | Delete fitting|
|[**getCharactersCharacterIdFittings**](#getcharacterscharacteridfittings) | **GET** /characters/{character_id}/fittings/ | Get fittings|
|[**postCharactersCharacterIdFittings**](#postcharacterscharacteridfittings) | **POST** /characters/{character_id}/fittings/ | Create fitting|

# **deleteCharactersCharacterIdFittingsFittingId**
> deleteCharactersCharacterIdFittingsFittingId()

Delete a fitting from a character  --- Alternate route: `/dev/characters/{character_id}/fittings/{fitting_id}/`  Alternate route: `/legacy/characters/{character_id}/fittings/{fitting_id}/`  Alternate route: `/v1/characters/{character_id}/fittings/{fitting_id}/` 

### Example

```typescript
import {
    FittingsApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new FittingsApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let fittingId: number; //ID for a fitting of this character (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.deleteCharactersCharacterIdFittingsFittingId(
    characterId,
    fittingId,
    datasource,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **fittingId** | [**number**] | ID for a fitting of this character | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Fitting deleted |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdFittings**
> Array<GetCharactersCharacterIdFittings200Ok> getCharactersCharacterIdFittings()

Return fittings of a character  --- Alternate route: `/dev/characters/{character_id}/fittings/`  Alternate route: `/v2/characters/{character_id}/fittings/`  --- This route is cached for up to 300 seconds

### Example

```typescript
import {
    FittingsApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new FittingsApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdFittings(
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

**Array<GetCharactersCharacterIdFittings200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of fittings |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postCharactersCharacterIdFittings**
> PostCharactersCharacterIdFittingsCreated postCharactersCharacterIdFittings(fitting)

Save a new fitting for a character  --- Alternate route: `/dev/characters/{character_id}/fittings/`  Alternate route: `/legacy/characters/{character_id}/fittings/`  Alternate route: `/v1/characters/{character_id}/fittings/`  Alternate route: `/v2/characters/{character_id}/fittings/` 

### Example

```typescript
import {
    FittingsApi,
    Configuration,
    PostCharactersCharacterIdFittingsFitting
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new FittingsApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let fitting: PostCharactersCharacterIdFittingsFitting; //Details about the new fitting
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.postCharactersCharacterIdFittings(
    characterId,
    fitting,
    datasource,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fitting** | **PostCharactersCharacterIdFittingsFitting**| Details about the new fitting | |
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**PostCharactersCharacterIdFittingsCreated**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | A list of fittings |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

