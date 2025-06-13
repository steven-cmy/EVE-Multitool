# GetCorporationsCorporationIdStarbasesStarbaseIdOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_alliance_members** | **boolean** | allow_alliance_members boolean | [default to undefined]
**allow_corporation_members** | **boolean** | allow_corporation_members boolean | [default to undefined]
**anchor** | **string** | Who can anchor starbase (POS) and its structures | [default to undefined]
**attack_if_at_war** | **boolean** | attack_if_at_war boolean | [default to undefined]
**attack_if_other_security_status_dropping** | **boolean** | attack_if_other_security_status_dropping boolean | [default to undefined]
**attack_security_status_threshold** | **number** | Starbase (POS) will attack if target\&#39;s security standing is lower than this value | [optional] [default to undefined]
**attack_standing_threshold** | **number** | Starbase (POS) will attack if target\&#39;s standing is lower than this value | [optional] [default to undefined]
**fuel_bay_take** | **string** | Who can take fuel blocks out of the starbase (POS)\&#39;s fuel bay | [default to undefined]
**fuel_bay_view** | **string** | Who can view the starbase (POS)\&#39;s fule bay. Characters either need to have required role or belong to the starbase (POS) owner\&#39;s corporation or alliance, as described by the enum, all other access settings follows the same scheme | [default to undefined]
**fuels** | [**Array&lt;GetCorporationsCorporationIdStarbasesStarbaseIdFuel&gt;**](GetCorporationsCorporationIdStarbasesStarbaseIdFuel.md) | Fuel blocks and other things that will be consumed when operating a starbase (POS) | [optional] [default to undefined]
**offline** | **string** | Who can offline starbase (POS) and its structures | [default to undefined]
**online** | **string** | Who can online starbase (POS) and its structures | [default to undefined]
**unanchor** | **string** | Who can unanchor starbase (POS) and its structures | [default to undefined]
**use_alliance_standings** | **boolean** | True if the starbase (POS) is using alliance standings, otherwise using corporation\&#39;s | [default to undefined]

## Example

```typescript
import { GetCorporationsCorporationIdStarbasesStarbaseIdOk } from 'eve-esi-client';

const instance: GetCorporationsCorporationIdStarbasesStarbaseIdOk = {
    allow_alliance_members,
    allow_corporation_members,
    anchor,
    attack_if_at_war,
    attack_if_other_security_status_dropping,
    attack_security_status_threshold,
    attack_standing_threshold,
    fuel_bay_take,
    fuel_bay_view,
    fuels,
    offline,
    online,
    unanchor,
    use_alliance_standings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
