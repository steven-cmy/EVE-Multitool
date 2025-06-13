# GetFwStats200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**faction_id** | **number** | faction_id integer | [default to undefined]
**kills** | [**GetFwStatsKills**](GetFwStatsKills.md) |  | [default to undefined]
**pilots** | **number** | How many pilots fight for the given faction | [default to undefined]
**systems_controlled** | **number** | The number of solar systems controlled by the given faction | [default to undefined]
**victory_points** | [**GetFwStatsVictoryPoints**](GetFwStatsVictoryPoints.md) |  | [default to undefined]

## Example

```typescript
import { GetFwStats200Ok } from 'eve-esi-client';

const instance: GetFwStats200Ok = {
    faction_id,
    kills,
    pilots,
    systems_controlled,
    victory_points,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
