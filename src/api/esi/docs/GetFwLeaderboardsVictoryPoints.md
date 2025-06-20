# GetFwLeaderboardsVictoryPoints

Top 4 rankings of factions by victory points from yesterday, last week and in total

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_total** | [**Array&lt;GetFwLeaderboardsActiveTotalActiveTotal1&gt;**](GetFwLeaderboardsActiveTotalActiveTotal1.md) | Top 4 ranking of factions active in faction warfare by total victory points. A faction is considered \&quot;active\&quot; if they have participated in faction warfare in the past 14 days | [default to undefined]
**last_week** | [**Array&lt;GetFwLeaderboardsLastWeekLastWeek1&gt;**](GetFwLeaderboardsLastWeekLastWeek1.md) | Top 4 ranking of factions by victory points in the past week | [default to undefined]
**yesterday** | [**Array&lt;GetFwLeaderboardsYesterdayYesterday1&gt;**](GetFwLeaderboardsYesterdayYesterday1.md) | Top 4 ranking of factions by victory points in the past day | [default to undefined]

## Example

```typescript
import { GetFwLeaderboardsVictoryPoints } from 'eve-esi-client';

const instance: GetFwLeaderboardsVictoryPoints = {
    active_total,
    last_week,
    yesterday,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
