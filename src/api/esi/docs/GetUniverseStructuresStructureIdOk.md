# GetUniverseStructuresStructureIdOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The full name of the structure | [default to undefined]
**owner_id** | **number** | The ID of the corporation who owns this particular structure | [default to undefined]
**position** | [**GetUniverseStructuresStructureIdPosition**](GetUniverseStructuresStructureIdPosition.md) |  | [optional] [default to undefined]
**solar_system_id** | **number** | solar_system_id integer | [default to undefined]
**type_id** | **number** | type_id integer | [optional] [default to undefined]

## Example

```typescript
import { GetUniverseStructuresStructureIdOk } from 'eve-esi-client';

const instance: GetUniverseStructuresStructureIdOk = {
    name,
    owner_id,
    position,
    solar_system_id,
    type_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
