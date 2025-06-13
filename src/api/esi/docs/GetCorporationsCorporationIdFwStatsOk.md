# GetCorporationsCorporationIdFwStatsOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enlisted_on** | **string** | The enlistment date of the given corporation into faction warfare. Will not be included if corporation is not enlisted in faction warfare | [optional] [default to undefined]
**faction_id** | **number** | The faction the given corporation is enlisted to fight for. Will not be included if corporation is not enlisted in faction warfare | [optional] [default to undefined]
**kills** | [**GetCorporationsCorporationIdFwStatsKills**](GetCorporationsCorporationIdFwStatsKills.md) |  | [default to undefined]
**pilots** | **number** | How many pilots the enlisted corporation has. Will not be included if corporation is not enlisted in faction warfare | [optional] [default to undefined]
**victory_points** | [**GetCorporationsCorporationIdFwStatsVictoryPoints**](GetCorporationsCorporationIdFwStatsVictoryPoints.md) |  | [default to undefined]

## Example

```typescript
import { GetCorporationsCorporationIdFwStatsOk } from 'eve-esi-client';

const instance: GetCorporationsCorporationIdFwStatsOk = {
    enlisted_on,
    faction_id,
    kills,
    pilots,
    victory_points,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
