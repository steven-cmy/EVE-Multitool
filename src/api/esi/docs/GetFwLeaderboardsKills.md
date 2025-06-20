# GetFwLeaderboardsKills

Top 4 rankings of factions by number of kills from yesterday, last week and in total

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_total** | [**Array&lt;GetFwLeaderboardsActiveTotalActiveTotal&gt;**](GetFwLeaderboardsActiveTotalActiveTotal.md) | Top 4 ranking of factions active in faction warfare by total kills. A faction is considered \&quot;active\&quot; if they have participated in faction warfare in the past 14 days | [default to undefined]
**last_week** | [**Array&lt;GetFwLeaderboardsLastWeekLastWeek&gt;**](GetFwLeaderboardsLastWeekLastWeek.md) | Top 4 ranking of factions by kills in the past week | [default to undefined]
**yesterday** | [**Array&lt;GetFwLeaderboardsYesterdayYesterday&gt;**](GetFwLeaderboardsYesterdayYesterday.md) | Top 4 ranking of factions by kills in the past day | [default to undefined]

## Example

```typescript
import { GetFwLeaderboardsKills } from 'eve-esi-client';

const instance: GetFwLeaderboardsKills = {
    active_total,
    last_week,
    yesterday,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
