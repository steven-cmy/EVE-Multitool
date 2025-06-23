# GetFleetsFleetIdOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_free_move** | **boolean** | Is free-move enabled | [default to undefined]
**is_registered** | **boolean** | Does the fleet have an active fleet advertisement | [default to undefined]
**is_voice_enabled** | **boolean** | Is EVE Voice enabled | [default to undefined]
**motd** | **string** | Fleet MOTD in CCP flavoured HTML | [default to undefined]

## Example

```typescript
import { GetFleetsFleetIdOk } from 'eve-esi-client';

const instance: GetFleetsFleetIdOk = {
    is_free_move,
    is_registered,
    is_voice_enabled,
    motd,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
