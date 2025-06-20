# GetCorporationsCorporationIdStarbases200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**moon_id** | **number** | The moon this starbase (POS) is anchored on, unanchored POSes do not have this information | [optional] [default to undefined]
**onlined_since** | **string** | When the POS onlined, for starbases (POSes) in online state | [optional] [default to undefined]
**reinforced_until** | **string** | When the POS will be out of reinforcement, for starbases (POSes) in reinforced state | [optional] [default to undefined]
**starbase_id** | **number** | Unique ID for this starbase (POS) | [default to undefined]
**state** | **string** | state string | [optional] [default to undefined]
**system_id** | **number** | The solar system this starbase (POS) is in, unanchored POSes have this information | [default to undefined]
**type_id** | **number** | Starbase (POS) type | [default to undefined]
**unanchor_at** | **string** | When the POS started unanchoring, for starbases (POSes) in unanchoring state | [optional] [default to undefined]

## Example

```typescript
import { GetCorporationsCorporationIdStarbases200Ok } from 'eve-esi-client';

const instance: GetCorporationsCorporationIdStarbases200Ok = {
    moon_id,
    onlined_since,
    reinforced_until,
    starbase_id,
    state,
    system_id,
    type_id,
    unanchor_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
