# CalendarApi

All URIs are relative to *https://esi.evetech.net/latest*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCharactersCharacterIdCalendar**](#getcharacterscharacteridcalendar) | **GET** /characters/{character_id}/calendar/ | List calendar event summaries|
|[**getCharactersCharacterIdCalendarEventId**](#getcharacterscharacteridcalendareventid) | **GET** /characters/{character_id}/calendar/{event_id}/ | Get an event|
|[**getCharactersCharacterIdCalendarEventIdAttendees**](#getcharacterscharacteridcalendareventidattendees) | **GET** /characters/{character_id}/calendar/{event_id}/attendees/ | Get attendees|
|[**putCharactersCharacterIdCalendarEventId**](#putcharacterscharacteridcalendareventid) | **PUT** /characters/{character_id}/calendar/{event_id}/ | Respond to an event|

# **getCharactersCharacterIdCalendar**
> Array<GetCharactersCharacterIdCalendar200Ok> getCharactersCharacterIdCalendar()

Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event  --- Alternate route: `/dev/characters/{character_id}/calendar/`  Alternate route: `/legacy/characters/{character_id}/calendar/`  Alternate route: `/v1/characters/{character_id}/calendar/`  Alternate route: `/v2/characters/{character_id}/calendar/`  --- This route is cached for up to 5 seconds

### Example

```typescript
import {
    CalendarApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let fromEvent: number; //The event ID to retrieve events from (optional) (default to undefined)
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdCalendar(
    characterId,
    datasource,
    fromEvent,
    ifNoneMatch,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **fromEvent** | [**number**] | The event ID to retrieve events from | (optional) defaults to undefined|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**Array<GetCharactersCharacterIdCalendar200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of event summaries |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdCalendarEventId**
> GetCharactersCharacterIdCalendarEventIdOk getCharactersCharacterIdCalendarEventId()

Get all the information for a specific event  --- Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/v4/characters/{character_id}/calendar/{event_id}/`  --- This route is cached for up to 5 seconds

### Example

```typescript
import {
    CalendarApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let eventId: number; //The id of the event requested (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdCalendarEventId(
    characterId,
    eventId,
    datasource,
    ifNoneMatch,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **eventId** | [**number**] | The id of the event requested | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**GetCharactersCharacterIdCalendarEventIdOk**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Full details of a specific event |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCharactersCharacterIdCalendarEventIdAttendees**
> Array<GetCharactersCharacterIdCalendarEventIdAttendees200Ok> getCharactersCharacterIdCalendarEventIdAttendees()

Get all invited attendees for a given event  --- Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/attendees/`  Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/attendees/`  Alternate route: `/v1/characters/{character_id}/calendar/{event_id}/attendees/`  Alternate route: `/v2/characters/{character_id}/calendar/{event_id}/attendees/`  --- This route is cached for up to 600 seconds

### Example

```typescript
import {
    CalendarApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let eventId: number; //The id of the event requested (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.getCharactersCharacterIdCalendarEventIdAttendees(
    characterId,
    eventId,
    datasource,
    ifNoneMatch,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **eventId** | [**number**] | The id of the event requested | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


### Return type

**Array<GetCharactersCharacterIdCalendarEventIdAttendees200Ok>**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of attendees |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putCharactersCharacterIdCalendarEventId**
> putCharactersCharacterIdCalendarEventId(response)

Set your response status to an event  --- Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/v4/characters/{character_id}/calendar/{event_id}/`  --- This route is cached for up to 5 seconds

### Example

```typescript
import {
    CalendarApi,
    Configuration,
    PutCharactersCharacterIdCalendarEventIdResponse
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let characterId: number; //An EVE character ID (default to undefined)
let eventId: number; //The ID of the event requested (default to undefined)
let response: PutCharactersCharacterIdCalendarEventIdResponse; //The response value to set, overriding current value
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.putCharactersCharacterIdCalendarEventId(
    characterId,
    eventId,
    response,
    datasource,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **response** | **PutCharactersCharacterIdCalendarEventIdResponse**| The response value to set, overriding current value | |
| **characterId** | [**number**] | An EVE character ID | defaults to undefined|
| **eventId** | [**number**] | The ID of the event requested | defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **token** | [**string**] | Access token to use if unable to set a header | (optional) defaults to undefined|


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
|**204** | Event updated |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

