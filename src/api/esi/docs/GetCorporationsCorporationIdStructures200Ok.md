# GetCorporationsCorporationIdStructures200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corporation_id** | **number** | ID of the corporation that owns the structure | [default to undefined]
**fuel_expires** | **string** | Date on which the structure will run out of fuel | [optional] [default to undefined]
**name** | **string** | The structure name | [optional] [default to undefined]
**next_reinforce_apply** | **string** | The date and time when the structure\&#39;s newly requested reinforcement times (e.g. next_reinforce_hour and next_reinforce_day) will take effect | [optional] [default to undefined]
**next_reinforce_hour** | **number** | The requested change to reinforce_hour that will take effect at the time shown by next_reinforce_apply | [optional] [default to undefined]
**profile_id** | **number** | The id of the ACL profile for this citadel | [default to undefined]
**reinforce_hour** | **number** | The hour of day that determines the four hour window when the structure will randomly exit its reinforcement periods and become vulnerable to attack against its armor and/or hull. The structure will become vulnerable at a random time that is +/- 2 hours centered on the value of this property | [optional] [default to undefined]
**services** | [**Array&lt;GetCorporationsCorporationIdStructuresService&gt;**](GetCorporationsCorporationIdStructuresService.md) | Contains a list of service upgrades, and their state | [optional] [default to undefined]
**state** | **string** | state string | [default to undefined]
**state_timer_end** | **string** | Date at which the structure will move to it\&#39;s next state | [optional] [default to undefined]
**state_timer_start** | **string** | Date at which the structure entered it\&#39;s current state | [optional] [default to undefined]
**structure_id** | **number** | The Item ID of the structure | [default to undefined]
**system_id** | **number** | The solar system the structure is in | [default to undefined]
**type_id** | **number** | The type id of the structure | [default to undefined]
**unanchors_at** | **string** | Date at which the structure will unanchor | [optional] [default to undefined]

## Example

```typescript
import { GetCorporationsCorporationIdStructures200Ok } from 'eve-esi-client';

const instance: GetCorporationsCorporationIdStructures200Ok = {
    corporation_id,
    fuel_expires,
    name,
    next_reinforce_apply,
    next_reinforce_hour,
    profile_id,
    reinforce_hour,
    services,
    state,
    state_timer_end,
    state_timer_start,
    structure_id,
    system_id,
    type_id,
    unanchors_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
