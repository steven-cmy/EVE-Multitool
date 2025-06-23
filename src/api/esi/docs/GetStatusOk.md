# GetStatusOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**players** | **number** | Current online player count | [default to undefined]
**server_version** | **string** | Running version as string | [default to undefined]
**start_time** | **string** | Server start timestamp | [default to undefined]
**vip** | **boolean** | If the server is in VIP mode | [optional] [default to undefined]

## Example

```typescript
import { GetStatusOk } from 'eve-esi-client';

const instance: GetStatusOk = {
    players,
    server_version,
    start_time,
    vip,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
