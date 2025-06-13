# UserInterfaceApi

All URIs are relative to *https://esi.evetech.net/latest*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**postUiAutopilotWaypoint**](#postuiautopilotwaypoint) | **POST** /ui/autopilot/waypoint/ | Set Autopilot Waypoint|
|[**postUiOpenwindowContract**](#postuiopenwindowcontract) | **POST** /ui/openwindow/contract/ | Open Contract Window|
|[**postUiOpenwindowInformation**](#postuiopenwindowinformation) | **POST** /ui/openwindow/information/ | Open Information Window|
|[**postUiOpenwindowMarketdetails**](#postuiopenwindowmarketdetails) | **POST** /ui/openwindow/marketdetails/ | Open Market Details|
|[**postUiOpenwindowNewmail**](#postuiopenwindownewmail) | **POST** /ui/openwindow/newmail/ | Open New Mail Window|

# **postUiAutopilotWaypoint**
> postUiAutopilotWaypoint()

Set a solar system as autopilot waypoint  --- Alternate route: `/dev/ui/autopilot/waypoint/`  Alternate route: `/legacy/ui/autopilot/waypoint/`  Alternate route: `/v2/ui/autopilot/waypoint/` 

### Example

```typescript
import {
    UserInterfaceApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new UserInterfaceApi(configuration);

let addToBeginning: boolean; //Whether this solar system should be added to the beginning of all waypoints (default to false)
let clearOtherWaypoints: boolean; //Whether clean other waypoints beforing adding this one (default to false)
let destinationId: number; //The destination to travel to, can be solar system, station or structure\'s id (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.postUiAutopilotWaypoint(
    addToBeginning,
    clearOtherWaypoints,
    destinationId,
    datasource,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addToBeginning** | [**boolean**] | Whether this solar system should be added to the beginning of all waypoints | defaults to false|
| **clearOtherWaypoints** | [**boolean**] | Whether clean other waypoints beforing adding this one | defaults to false|
| **destinationId** | [**number**] | The destination to travel to, can be solar system, station or structure\&#39;s id | defaults to undefined|
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
|**204** | Open window request received |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUiOpenwindowContract**
> postUiOpenwindowContract()

Open the contract window inside the client  --- Alternate route: `/dev/ui/openwindow/contract/`  Alternate route: `/legacy/ui/openwindow/contract/`  Alternate route: `/v1/ui/openwindow/contract/` 

### Example

```typescript
import {
    UserInterfaceApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new UserInterfaceApi(configuration);

let contractId: number; //The contract to open (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.postUiOpenwindowContract(
    contractId,
    datasource,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contractId** | [**number**] | The contract to open | defaults to undefined|
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
|**204** | Open window request received |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUiOpenwindowInformation**
> postUiOpenwindowInformation()

Open the information window for a character, corporation or alliance inside the client  --- Alternate route: `/dev/ui/openwindow/information/`  Alternate route: `/legacy/ui/openwindow/information/`  Alternate route: `/v1/ui/openwindow/information/` 

### Example

```typescript
import {
    UserInterfaceApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new UserInterfaceApi(configuration);

let targetId: number; //The target to open (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.postUiOpenwindowInformation(
    targetId,
    datasource,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **targetId** | [**number**] | The target to open | defaults to undefined|
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
|**204** | Open window request received |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUiOpenwindowMarketdetails**
> postUiOpenwindowMarketdetails()

Open the market details window for a specific typeID inside the client  --- Alternate route: `/dev/ui/openwindow/marketdetails/`  Alternate route: `/legacy/ui/openwindow/marketdetails/`  Alternate route: `/v1/ui/openwindow/marketdetails/` 

### Example

```typescript
import {
    UserInterfaceApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new UserInterfaceApi(configuration);

let typeId: number; //The item type to open in market window (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.postUiOpenwindowMarketdetails(
    typeId,
    datasource,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **typeId** | [**number**] | The item type to open in market window | defaults to undefined|
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
|**204** | Open window request received |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUiOpenwindowNewmail**
> postUiOpenwindowNewmail(newMail)

Open the New Mail window, according to settings from the request if applicable  --- Alternate route: `/dev/ui/openwindow/newmail/`  Alternate route: `/legacy/ui/openwindow/newmail/`  Alternate route: `/v1/ui/openwindow/newmail/` 

### Example

```typescript
import {
    UserInterfaceApi,
    Configuration,
    PostUiOpenwindowNewmailNewMail
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new UserInterfaceApi(configuration);

let newMail: PostUiOpenwindowNewmailNewMail; //The details of mail to create
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let token: string; //Access token to use if unable to set a header (optional) (default to undefined)

const { status, data } = await apiInstance.postUiOpenwindowNewmail(
    newMail,
    datasource,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newMail** | **PostUiOpenwindowNewmailNewMail**| The details of mail to create | |
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
|**204** | Open window request received |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**420** | Error limited |  -  |
|**422** | Invalid request |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

