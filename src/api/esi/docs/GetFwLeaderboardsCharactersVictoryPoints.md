# GetFwLeaderboardsCharactersVictoryPoints

Top 100 rankings of pilots by victory points from yesterday, last week and in total

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_total** | [**Array&lt;GetFwLeaderboardsCharactersActiveTotalActiveTotal1&gt;**](GetFwLeaderboardsCharactersActiveTotalActiveTotal1.md) | Top 100 ranking of pilots active in faction warfare by total victory points. A pilot is considered \&quot;active\&quot; if they have participated in faction warfare in the past 14 days | [default to undefined]
**last_week** | [**Array&lt;GetFwLeaderboardsCharactersLastWeekLastWeek1&gt;**](GetFwLeaderboardsCharactersLastWeekLastWeek1.md) | Top 100 ranking of pilots by victory points in the past week | [default to undefined]
**yesterday** | [**Array&lt;GetFwLeaderboardsCharactersYesterdayYesterday1&gt;**](GetFwLeaderboardsCharactersYesterdayYesterday1.md) | Top 100 ranking of pilots by victory points in the past day | [default to undefined]

## Example

```typescript
import { GetFwLeaderboardsCharactersVictoryPoints } from 'eve-esi-client';

const instance: GetFwLeaderboardsCharactersVictoryPoints = {
    active_total,
    last_week,
    yesterday,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
