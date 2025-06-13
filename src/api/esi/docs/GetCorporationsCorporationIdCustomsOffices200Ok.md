# GetCorporationsCorporationIdCustomsOffices200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alliance_tax_rate** | **number** | Only present if alliance access is allowed | [optional] [default to undefined]
**allow_access_with_standings** | **boolean** | standing_level and any standing related tax rate only present when this is true | [default to undefined]
**allow_alliance_access** | **boolean** | allow_alliance_access boolean | [default to undefined]
**bad_standing_tax_rate** | **number** | bad_standing_tax_rate number | [optional] [default to undefined]
**corporation_tax_rate** | **number** | corporation_tax_rate number | [optional] [default to undefined]
**excellent_standing_tax_rate** | **number** | Tax rate for entities with excellent level of standing, only present if this level is allowed, same for all other standing related tax rates | [optional] [default to undefined]
**good_standing_tax_rate** | **number** | good_standing_tax_rate number | [optional] [default to undefined]
**neutral_standing_tax_rate** | **number** | neutral_standing_tax_rate number | [optional] [default to undefined]
**office_id** | **number** | unique ID of this customs office | [default to undefined]
**reinforce_exit_end** | **number** | reinforce_exit_end integer | [default to undefined]
**reinforce_exit_start** | **number** | Together with reinforce_exit_end, marks a 2-hour period where this customs office could exit reinforcement mode during the day after initial attack | [default to undefined]
**standing_level** | **string** | Access is allowed only for entities with this level of standing or better | [optional] [default to undefined]
**system_id** | **number** | ID of the solar system this customs office is located in | [default to undefined]
**terrible_standing_tax_rate** | **number** | terrible_standing_tax_rate number | [optional] [default to undefined]

## Example

```typescript
import { GetCorporationsCorporationIdCustomsOffices200Ok } from 'eve-esi-client';

const instance: GetCorporationsCorporationIdCustomsOffices200Ok = {
    alliance_tax_rate,
    allow_access_with_standings,
    allow_alliance_access,
    bad_standing_tax_rate,
    corporation_tax_rate,
    excellent_standing_tax_rate,
    good_standing_tax_rate,
    neutral_standing_tax_rate,
    office_id,
    reinforce_exit_end,
    reinforce_exit_start,
    standing_level,
    system_id,
    terrible_standing_tax_rate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
