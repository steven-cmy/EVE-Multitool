# GetAlliancesAllianceIdOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creator_corporation_id** | **number** | ID of the corporation that created the alliance | [default to undefined]
**creator_id** | **number** | ID of the character that created the alliance | [default to undefined]
**date_founded** | **string** | date_founded string | [default to undefined]
**executor_corporation_id** | **number** | the executor corporation ID, if this alliance is not closed | [optional] [default to undefined]
**faction_id** | **number** | Faction ID this alliance is fighting for, if this alliance is enlisted in factional warfare | [optional] [default to undefined]
**name** | **string** | the full name of the alliance | [default to undefined]
**ticker** | **string** | the short name of the alliance | [default to undefined]

## Example

```typescript
import { GetAlliancesAllianceIdOk } from 'eve-esi-client';

const instance: GetAlliancesAllianceIdOk = {
    creator_corporation_id,
    creator_id,
    date_founded,
    executor_corporation_id,
    faction_id,
    name,
    ticker,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
