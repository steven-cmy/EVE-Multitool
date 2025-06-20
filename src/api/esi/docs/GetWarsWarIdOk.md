# GetWarsWarIdOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggressor** | [**GetWarsWarIdAggressor**](GetWarsWarIdAggressor.md) |  | [default to undefined]
**allies** | [**Array&lt;GetWarsWarIdAlly&gt;**](GetWarsWarIdAlly.md) | allied corporations or alliances, each object contains either corporation_id or alliance_id | [optional] [default to undefined]
**declared** | **string** | Time that the war was declared | [default to undefined]
**defender** | [**GetWarsWarIdDefender**](GetWarsWarIdDefender.md) |  | [default to undefined]
**finished** | **string** | Time the war ended and shooting was no longer allowed | [optional] [default to undefined]
**id** | **number** | ID of the specified war | [default to undefined]
**mutual** | **boolean** | Was the war declared mutual by both parties | [default to undefined]
**open_for_allies** | **boolean** | Is the war currently open for allies or not | [default to undefined]
**retracted** | **string** | Time the war was retracted but both sides could still shoot each other | [optional] [default to undefined]
**started** | **string** | Time when the war started and both sides could shoot each other | [optional] [default to undefined]

## Example

```typescript
import { GetWarsWarIdOk } from 'eve-esi-client';

const instance: GetWarsWarIdOk = {
    aggressor,
    allies,
    declared,
    defender,
    finished,
    id,
    mutual,
    open_for_allies,
    retracted,
    started,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
