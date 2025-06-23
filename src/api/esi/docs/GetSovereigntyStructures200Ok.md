# GetSovereigntyStructures200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alliance_id** | **number** | The alliance that owns the structure.  | [default to undefined]
**solar_system_id** | **number** | Solar system in which the structure is located.  | [default to undefined]
**structure_id** | **number** | Unique item ID for this structure. | [default to undefined]
**structure_type_id** | **number** | A reference to the type of structure this is.  | [default to undefined]
**vulnerability_occupancy_level** | **number** | The occupancy level for the next or current vulnerability window. This takes into account all development indexes and capital system bonuses. Also known as Activity Defense Multiplier from in the client. It increases the time that attackers must spend using their entosis links on the structure.  | [optional] [default to undefined]
**vulnerable_end_time** | **string** | The time at which the next or current vulnerability window ends. At the end of a vulnerability window the next window is recalculated and locked in along with the vulnerabilityOccupancyLevel. If the structure is not in 100% entosis control of the defender, it will go in to \&#39;overtime\&#39; and stay vulnerable for as long as that situation persists. Only once the defenders have 100% entosis control and has the vulnerableEndTime passed does the vulnerability interval expire and a new one is calculated.  | [optional] [default to undefined]
**vulnerable_start_time** | **string** | The next time at which the structure will become vulnerable. Or the start time of the current window if current time is between this and vulnerableEndTime.  | [optional] [default to undefined]

## Example

```typescript
import { GetSovereigntyStructures200Ok } from 'eve-esi-client';

const instance: GetSovereigntyStructures200Ok = {
    alliance_id,
    solar_system_id,
    structure_id,
    structure_type_id,
    vulnerability_occupancy_level,
    vulnerable_end_time,
    vulnerable_start_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
