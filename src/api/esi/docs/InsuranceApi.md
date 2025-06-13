# InsuranceApi

All URIs are relative to *https://esi.evetech.net/latest*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getInsurancePrices**](#getinsuranceprices) | **GET** /insurance/prices/ | List insurance levels|

# **getInsurancePrices**
> Array<GetInsurancePrices200Ok> getInsurancePrices()

Return available insurance levels for all ship types  --- Alternate route: `/dev/insurance/prices/`  Alternate route: `/legacy/insurance/prices/`  Alternate route: `/v1/insurance/prices/`  --- This route is cached for up to 3600 seconds

### Example

```typescript
import {
    InsuranceApi,
    Configuration
} from 'eve-esi-client';

const configuration = new Configuration();
const apiInstance = new InsuranceApi(configuration);

let acceptLanguage: 'en' | 'en-us' | 'de' | 'fr' | 'ja' | 'ru' | 'zh' | 'ko' | 'es'; //Language to use in the response (optional) (default to 'en')
let datasource: 'tranquility'; //The server name you would like data from (optional) (default to 'tranquility')
let ifNoneMatch: string; //ETag from a previous request. A 304 will be returned if this matches the current ETag (optional) (default to undefined)
let language: 'en' | 'en-us' | 'de' | 'fr' | 'ja' | 'ru' | 'zh' | 'ko' | 'es'; //Language to use in the response, takes precedence over Accept-Language (optional) (default to 'en')

const { status, data } = await apiInstance.getInsurancePrices(
    acceptLanguage,
    datasource,
    ifNoneMatch,
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptLanguage** | [**&#39;en&#39; | &#39;en-us&#39; | &#39;de&#39; | &#39;fr&#39; | &#39;ja&#39; | &#39;ru&#39; | &#39;zh&#39; | &#39;ko&#39; | &#39;es&#39;**]**Array<&#39;en&#39; &#124; &#39;en-us&#39; &#124; &#39;de&#39; &#124; &#39;fr&#39; &#124; &#39;ja&#39; &#124; &#39;ru&#39; &#124; &#39;zh&#39; &#124; &#39;ko&#39; &#124; &#39;es&#39;>** | Language to use in the response | (optional) defaults to 'en'|
| **datasource** | [**&#39;tranquility&#39;**]**Array<&#39;tranquility&#39;>** | The server name you would like data from | (optional) defaults to 'tranquility'|
| **ifNoneMatch** | [**string**] | ETag from a previous request. A 304 will be returned if this matches the current ETag | (optional) defaults to undefined|
| **language** | [**&#39;en&#39; | &#39;en-us&#39; | &#39;de&#39; | &#39;fr&#39; | &#39;ja&#39; | &#39;ru&#39; | &#39;zh&#39; | &#39;ko&#39; | &#39;es&#39;**]**Array<&#39;en&#39; &#124; &#39;en-us&#39; &#124; &#39;de&#39; &#124; &#39;fr&#39; &#124; &#39;ja&#39; &#124; &#39;ru&#39; &#124; &#39;zh&#39; &#124; &#39;ko&#39; &#124; &#39;es&#39;>** | Language to use in the response, takes precedence over Accept-Language | (optional) defaults to 'en'|


### Return type

**Array<GetInsurancePrices200Ok>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of insurance levels for all ship types |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  * Content-Language - The language used in the response <br>  |
|**304** | Not modified |  * Cache-Control - The caching mechanism used <br>  * ETag - RFC7232 compliant entity tag <br>  * Expires - RFC7231 formatted datetime string <br>  * Last-Modified - RFC7231 formatted datetime string <br>  |
|**400** | Bad request |  -  |
|**420** | Error limited |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable |  -  |
|**504** | Gateway timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

