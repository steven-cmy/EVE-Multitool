# GetFwLeaderboardsCorporationsKills

Top 10 rankings of corporations by number of kills from yesterday, last week and in total

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_total** | [**Array&lt;GetFwLeaderboardsCorporationsActiveTotalActiveTotal&gt;**](GetFwLeaderboardsCorporationsActiveTotalActiveTotal.md) | Top 10 ranking of corporations active in faction warfare by total kills. A corporation is considered \&quot;active\&quot; if they have participated in faction warfare in the past 14 days | [default to undefined]
**last_week** | [**Array&lt;GetFwLeaderboardsCorporationsLastWeekLastWeek&gt;**](GetFwLeaderboardsCorporationsLastWeekLastWeek.md) | Top 10 ranking of corporations by kills in the past week | [default to undefined]
**yesterday** | [**Array&lt;GetFwLeaderboardsCorporationsYesterdayYesterday&gt;**](GetFwLeaderboardsCorporationsYesterdayYesterday.md) | Top 10 ranking of corporations by kills in the past day | [default to undefined]

## Example

```typescript
import { GetFwLeaderboardsCorporationsKills } from 'eve-esi-client';

const instance: GetFwLeaderboardsCorporationsKills = {
    active_total,
    last_week,
    yesterday,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
