# GetCorporationsCorporationIdOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alliance_id** | **number** | ID of the alliance that corporation is a member of, if any | [optional] [default to undefined]
**ceo_id** | **number** | ceo_id integer | [default to undefined]
**creator_id** | **number** | creator_id integer | [default to undefined]
**date_founded** | **string** | date_founded string | [optional] [default to undefined]
**description** | **string** | description string | [optional] [default to undefined]
**faction_id** | **number** | faction_id integer | [optional] [default to undefined]
**home_station_id** | **number** | home_station_id integer | [optional] [default to undefined]
**member_count** | **number** | member_count integer | [default to undefined]
**name** | **string** | the full name of the corporation | [default to undefined]
**shares** | **number** | shares integer | [optional] [default to undefined]
**tax_rate** | **number** | tax_rate number | [default to undefined]
**ticker** | **string** | the short name of the corporation | [default to undefined]
**url** | **string** | url string | [optional] [default to undefined]
**war_eligible** | **boolean** | war_eligible boolean | [optional] [default to undefined]

## Example

```typescript
import { GetCorporationsCorporationIdOk } from 'eve-esi-client';

const instance: GetCorporationsCorporationIdOk = {
    alliance_id,
    ceo_id,
    creator_id,
    date_founded,
    description,
    faction_id,
    home_station_id,
    member_count,
    name,
    shares,
    tax_rate,
    ticker,
    url,
    war_eligible,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
