# ContactsApi

All URIs are relative to *https://esi.evetech.net/latest*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteCharactersCharacterIdContacts**](#deletecharacterscharacteridcontacts) | **DELETE** /characters/{character_id}/contacts/ | Delete contacts|
|[**getAlliancesAllianceIdContacts**](#getalliancesallianceidcontacts) | **GET** /alliances/{alliance_id}/contacts/ | Get alliance contacts|
|[**getAlliancesAllianceIdContactsLabels**](#getalliancesallianceidcontactslabels) | **GET** /alliances/{alliance_id}/contacts/labels/ | Get alliance contact labels|
|[**getCharactersCharacterIdContacts**](#getcharacterscharacteridcontacts) | **GET** /characters/{character_id}/contacts/ | Get contacts|
|[**getCharactersCharacterIdContactsLabels**](#getcharacterscharacteridcontactslabels) | **GET** /characters/{character_id}/contacts/labels/ | Get contact labels|
|[**getCorporationsCorporationIdContacts**](#getcorporationscorporationidcontacts) | **GET** /corporations/{corporation_id}/contacts/ | Get corporation contacts|
|[**getCorporationsCorporationIdContactsLabels**](#getcorporationscorporationidcontactslabels) | **GET** /corporations/{corporation_id}/contacts/labels/ | Get corporation contact labels|
|[**postCharactersCharacterIdContacts**](#postcharacterscharacteridcontacts) | **POST** /characters/{character_id}/contacts/ | Add contacts|
|[**putCharactersCharacterIdContacts**](#putcharacterscharacteridcontacts) | **PUT** /characters/{character_id}/contacts/ | Edit contacts|

# **deleteCharactersCharacterIdContacts**
> deleteCharactersCharacterIdContacts()

Bulk delete contacts  --- Alternate route: `/dev/characters/{character_id}/contacts/`  Alternate route: `/legacy/characters/{character_id}/contacts/`  Alternate route: `/v1/characters/{character_id}/contacts/`  Alternate route: `/v2/characters/{character_id}/contacts/` 

### Example

```typescript
import {
    ContactsApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let contactIds: Array<number>; //A list of contacts to delete (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.deleteCharactersCharacterIdContacts(
    characterId,
    contactIds,
    datasource,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **contactIds** | **Array&lt;number&gt;** | A list of contacts to delete | defaults to undefined|
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
|**204** | Contacts deleted |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAlliancesAllianceIdContacts**
> Array<GetAlliancesAllianceIdContacts200Ok> getAlliancesAllianceIdContacts()

Return contacts of an alliance  --- Alternate route: `/dev/alliances/{alliance_id}/contacts/`  Alternate route: `/v2/alliances/{alliance_id}/contacts/`  --- This route is cached for up to 300 seconds

### Example

```typescript
import {
    ContactsApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let allianceId: number; //An EVE alliance ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let page: number; //Which page of results to return (optional) (default to 1)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getAlliancesAllianceIdContacts(
    allianceId,
    datasource,
    ifNoneMatch,
    page,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **allianceId** | [**number**] | An EVE alliance ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **page** | [**number**] | Which page of results to return | (optional) defaults to 1|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**Array<GetAlliancesAllianceIdContacts200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of contacts |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  * X-Pages - Maximum page number <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAlliancesAllianceIdContactsLabels**
> Array<GetAlliancesAllianceIdContactsLabels200Ok> getAlliancesAllianceIdContactsLabels()

Return custom labels for an alliance\'s contacts  --- Alternate route: `/dev/alliances/{alliance_id}/contacts/labels/`  Alternate route: `/legacy/alliances/{alliance_id}/contacts/labels/`  Alternate route: `/v1/alliances/{alliance_id}/contacts/labels/`  --- This route is cached for up to 300 seconds

### Example

```typescript
import {
    ContactsApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let allianceId: number; //An EVE alliance ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getAlliancesAllianceIdContactsLabels(
    allianceId,
    datasource,
    ifNoneMatch,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **allianceId** | [**number**] | An EVE alliance ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**Array<GetAlliancesAllianceIdContactsLabels200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of alliance contact labels |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdContacts**
> Array<GetCharactersCharacterIdContacts200Ok> getCharactersCharacterIdContacts()

Return contacts of a character  --- Alternate route: `/dev/characters/{character_id}/contacts/`  Alternate route: `/v2/characters/{character_id}/contacts/`  --- This route is cached for up to 300 seconds

### Example

```typescript
import {
    ContactsApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let page: number; //Which page of results to return (optional) (default to 1)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdContacts(
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

**Array<GetCharactersCharacterIdContacts200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of contacts |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  * X-Pages - Maximum page number <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdContactsLabels**
> Array<GetCharactersCharacterIdContactsLabels200Ok> getCharactersCharacterIdContactsLabels()

Return custom labels for a character\'s contacts  --- Alternate route: `/dev/characters/{character_id}/contacts/labels/`  Alternate route: `/legacy/characters/{character_id}/contacts/labels/`  Alternate route: `/v1/characters/{character_id}/contacts/labels/`  --- This route is cached for up to 300 seconds

### Example

```typescript
import {
    ContactsApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdContactsLabels(
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

**Array<GetCharactersCharacterIdContactsLabels200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of contact labels |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCorporationsCorporationIdContacts**
> Array<GetCorporationsCorporationIdContacts200Ok> getCorporationsCorporationIdContacts()

Return contacts of a corporation  --- Alternate route: `/dev/corporations/{corporation_id}/contacts/`  Alternate route: `/v2/corporations/{corporation_id}/contacts/`  --- This route is cached for up to 300 seconds

### Example

```typescript
import {
    ContactsApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let corporationId: number; //An EVE corporation ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let page: number; //Which page of results to return (optional) (default to 1)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCorporationsCorporationIdContacts(
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

**Array<GetCorporationsCorporationIdContacts200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of contacts |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  * X-Pages - Maximum page number <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCorporationsCorporationIdContactsLabels**
> Array<GetCorporationsCorporationIdContactsLabels200Ok> getCorporationsCorporationIdContactsLabels()

Return custom labels for a corporation\'s contacts  --- Alternate route: `/dev/corporations/{corporation_id}/contacts/labels/`  Alternate route: `/legacy/corporations/{corporation_id}/contacts/labels/`  Alternate route: `/v1/corporations/{corporation_id}/contacts/labels/`  --- This route is cached for up to 300 seconds

### Example

```typescript
import {
    ContactsApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let corporationId: number; //An EVE corporation ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCorporationsCorporationIdContactsLabels(
    corporationId,
    datasource,
    ifNoneMatch,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **corporationId** | [**number**] | An EVE corporation ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**Array<GetCorporationsCorporationIdContactsLabels200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of corporation contact labels |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postCharactersCharacterIdContacts**
> Array<number> postCharactersCharacterIdContacts(contactIds)

Bulk add contacts with same settings  --- Alternate route: `/dev/characters/{character_id}/contacts/`  Alternate route: `/v2/characters/{character_id}/contacts/` 

### Example

```typescript
import {
    ContactsApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let standing: number; //Standing for the contact (default to undefined)
let contactIds: Array<number>; //A list of contacts
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let labelIds: Array<number>; //Add custom labels to the new contact (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)
let watched: boolean; //Whether the contact should be watched, note this is only effective on characters (optional) (default to false)

const { status, data } = await apiInstance.postCharactersCharacterIdContacts(
    characterId,
    standing,
    contactIds,
    datasource,
    labelIds,
    token,
    watched
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contactIds** | **Array<number>**| A list of contacts | |
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **standing** | [**number**] | Standing for the contact | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **labelIds** | **Array&lt;number&gt;** | Add custom labels to the new contact | (optional) defaults to undefined|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|
| **watched** | [**boolean**] | Whether the contact should be watched, note this is only effective on characters | (optional) defaults to false|


### Return type

**Array<number>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | A list of contact ids that successfully created |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |
|**520** | Internal error thrown from the EVE server |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putCharactersCharacterIdContacts**
> putCharactersCharacterIdContacts(contactIds)

Bulk edit contacts with same settings  --- Alternate route: `/dev/characters/{character_id}/contacts/`  Alternate route: `/v2/characters/{character_id}/contacts/` 

### Example

```typescript
import {
    ContactsApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let standing: number; //Standing for the contact (default to undefined)
let contactIds: Array<number>; //A list of contacts
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let labelIds: Array<number>; //Add custom labels to the contact (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)
let watched: boolean; //Whether the contact should be watched, note this is only effective on characters (optional) (default to false)

const { status, data } = await apiInstance.putCharactersCharacterIdContacts(
    characterId,
    standing,
    contactIds,
    datasource,
    labelIds,
    token,
    watched
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contactIds** | **Array<number>**| A list of contacts | |
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **standing** | [**number**] | Standing for the contact | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **labelIds** | **Array&lt;number&gt;** | Add custom labels to the contact | (optional) defaults to undefined|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|
| **watched** | [**boolean**] | Whether the contact should be watched, note this is only effective on characters | (optional) defaults to false|


### Return type

void (empty response body)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Contacts updated |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

