# GetWarsWarIdDefender

The defending corporation or alliance that declared this war, only contains either corporation_id or alliance_id

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alliance_id** | **number** | Alliance ID if and only if the defender is an alliance | [optional] [default to undefined]
**corporation_id** | **number** | Corporation ID if and only if the defender is a corporation | [optional] [default to undefined]
**isk_destroyed** | **number** | ISK value of ships the defender has killed | [default to undefined]
**ships_killed** | **number** | The number of ships the defender has killed | [default to undefined]

## Example

```typescript
import { GetWarsWarIdDefender } from 'eve-esi-client';

const instance: GetWarsWarIdDefender = {
    alliance_id,
    corporation_id,
    isk_destroyed,
    ships_killed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
