# GetFwLeaderboardsCharactersKills

Top 100 rankings of pilots by number of kills from yesterday, last week and in total

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_total** | [**Array&lt;GetFwLeaderboardsCharactersActiveTotalActiveTotal&gt;**](GetFwLeaderboardsCharactersActiveTotalActiveTotal.md) | Top 100 ranking of pilots active in faction warfare by total kills. A pilot is considered \&quot;active\&quot; if they have participated in faction warfare in the past 14 days | [default to undefined]
**last_week** | [**Array&lt;GetFwLeaderboardsCharactersLastWeekLastWeek&gt;**](GetFwLeaderboardsCharactersLastWeekLastWeek.md) | Top 100 ranking of pilots by kills in the past week | [default to undefined]
**yesterday** | [**Array&lt;GetFwLeaderboardsCharactersYesterdayYesterday&gt;**](GetFwLeaderboardsCharactersYesterdayYesterday.md) | Top 100 ranking of pilots by kills in the past day | [default to undefined]

## Example

```typescript
import { GetFwLeaderboardsCharactersKills } from 'eve-esi-client';

const instance: GetFwLeaderboardsCharactersKills = {
    active_total,
    last_week,
    yesterday,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
