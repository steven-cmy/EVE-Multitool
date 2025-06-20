# GetCharactersCharacterIdFleetOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fleet_boss_id** | **number** | Character ID of the current fleet boss | [default to undefined]
**fleet_id** | **number** | The character\&#39;s current fleet ID | [default to undefined]
**role** | **string** | Member’s role in fleet | [default to undefined]
**squad_id** | **number** | ID of the squad the member is in. If not applicable, will be set to -1 | [default to undefined]
**wing_id** | **number** | ID of the wing the member is in. If not applicable, will be set to -1 | [default to undefined]

## Example

```typescript
import { GetCharactersCharacterIdFleetOk } from 'eve-esi-client';

const instance: GetCharactersCharacterIdFleetOk = {
    fleet_boss_id,
    fleet_id,
    role,
    squad_id,
    wing_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
