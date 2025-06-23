# GetCharactersCharacterIdFwStatsOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_rank** | **number** | The given character\&#39;s current faction rank | [optional] [default to undefined]
**enlisted_on** | **string** | The enlistment date of the given character into faction warfare. Will not be included if character is not enlisted in faction warfare | [optional] [default to undefined]
**faction_id** | **number** | The faction the given character is enlisted to fight for. Will not be included if character is not enlisted in faction warfare | [optional] [default to undefined]
**highest_rank** | **number** | The given character\&#39;s highest faction rank achieved | [optional] [default to undefined]
**kills** | [**GetCharactersCharacterIdFwStatsKills**](GetCharactersCharacterIdFwStatsKills.md) |  | [default to undefined]
**victory_points** | [**GetCharactersCharacterIdFwStatsVictoryPoints**](GetCharactersCharacterIdFwStatsVictoryPoints.md) |  | [default to undefined]

## Example

```typescript
import { GetCharactersCharacterIdFwStatsOk } from 'eve-esi-client';

const instance: GetCharactersCharacterIdFwStatsOk = {
    current_rank,
    enlisted_on,
    faction_id,
    highest_rank,
    kills,
    victory_points,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
