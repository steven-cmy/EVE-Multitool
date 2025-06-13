# PostFleetsFleetIdMembersInvitation

invitation object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**character_id** | **number** | The character you want to invite | [default to undefined]
**role** | **string** | If a character is invited with the &#x60;fleet_commander&#x60; role, neither &#x60;wing_id&#x60; or &#x60;squad_id&#x60; should be specified. If a character is invited with the &#x60;wing_commander&#x60; role, only &#x60;wing_id&#x60; should be specified. If a character is invited with the &#x60;squad_commander&#x60; role, both &#x60;wing_id&#x60; and &#x60;squad_id&#x60; should be specified. If a character is invited with the &#x60;squad_member&#x60; role, &#x60;wing_id&#x60; and &#x60;squad_id&#x60; should either both be specified or not specified at all. If they aren’t specified, the invited character will join any squad with available positions. | [default to undefined]
**squad_id** | **number** | squad_id integer | [optional] [default to undefined]
**wing_id** | **number** | wing_id integer | [optional] [default to undefined]

## Example

```typescript
import { PostFleetsFleetIdMembersInvitation } from 'eve-esi-client';

const instance: PostFleetsFleetIdMembersInvitation = {
    character_id,
    role,
    squad_id,
    wing_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
