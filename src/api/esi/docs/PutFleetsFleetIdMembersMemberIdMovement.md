# PutFleetsFleetIdMembersMemberIdMovement

movement object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **string** | If a character is moved to the &#x60;fleet_commander&#x60; role, neither &#x60;wing_id&#x60; or &#x60;squad_id&#x60; should be specified. If a character is moved to the &#x60;wing_commander&#x60; role, only &#x60;wing_id&#x60; should be specified. If a character is moved to the &#x60;squad_commander&#x60; role, both &#x60;wing_id&#x60; and &#x60;squad_id&#x60; should be specified. If a character is moved to the &#x60;squad_member&#x60; role, both &#x60;wing_id&#x60; and &#x60;squad_id&#x60; should be specified. | [default to undefined]
**squad_id** | **number** | squad_id integer | [optional] [default to undefined]
**wing_id** | **number** | wing_id integer | [optional] [default to undefined]

## Example

```typescript
import { PutFleetsFleetIdMembersMemberIdMovement } from 'eve-esi-client';

const instance: PutFleetsFleetIdMembersMemberIdMovement = {
    role,
    squad_id,
    wing_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
