# RoutesApi

All URIs are relative to *https://esi.evetech.net/latest*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getRouteOriginDestination**](#getrouteorigindestination) | **GET** /route/{origin}/{destination}/ | Get route|

# **getRouteOriginDestination**
> Array<number> getRouteOriginDestination()

Get the systems between origin and destination  --- Alternate route: `/dev/route/{origin}/{destination}/`  Alternate route: `/legacy/route/{origin}/{destination}/`  Alternate route: `/v1/route/{origin}/{destination}/`  --- This route is cached for up to 86400 seconds

### Example

```typescript
import {
    RoutesApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new RoutesApi(configuration);

let destination: number; //destination solar system ID (default to undefined)
let origin: number; //origin solar system ID (default to undefined)
let avoid: Set<number>; //avoid solar system ID(s) (optional) (default to undefined)
let connections: Set<Set<number>>; //connected solar system pairs (optional) (default to undefined)
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let flag: 'shortest' | 'secure' | 'insecure'; //route security preference (optional) (default to 'shortest')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)

const { status, data } = await apiInstance.getRouteOriginDestination(
    destination,
    origin,
    avoid,
    connections,
    datasource,
    flag,
    ifNoneMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **destination** | [**number**] | destination solar system ID | defaults to undefined|
| **origin** | [**number**] | origin solar system ID | defaults to undefined|
| **avoid** | **Set&lt;number&gt;** | avoid solar system ID(s) | (optional) defaults to undefined|
| **connections** | **Set&lt;Set&lt;number&gt;&gt;** | connected solar system pairs | (optional) defaults to undefined|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **flag** | [**&#39;shortest&#39; | &#39;secure&#39; | &#39;insecure&#39;**]**Array<&#39;shortest&#39; &#124; &#39;secure&#39; &#124; &#39;insecure&#39;>** | route security preference | (optional) defaults to 'shortest'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|


### Return type

**Array<number>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Solar systems in route from origin to destination |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**404** | No route found |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

