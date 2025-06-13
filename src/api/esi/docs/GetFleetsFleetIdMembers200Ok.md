# GetFleetsFleetIdMembers200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**character_id** | **number** | character_id integer | [default to undefined]
**join_time** | **string** | join_time string | [default to undefined]
**role** | **string** | Member’s role in fleet | [default to undefined]
**role_name** | **string** | Localized role names | [default to undefined]
**ship_type_id** | **number** | ship_type_id integer | [default to undefined]
**solar_system_id** | **number** | Solar system the member is located in | [default to undefined]
**squad_id** | **number** | ID of the squad the member is in. If not applicable, will be set to -1 | [default to undefined]
**station_id** | **number** | Station in which the member is docked in, if applicable | [optional] [default to undefined]
**takes_fleet_warp** | **boolean** | Whether the member take fleet warps | [default to undefined]
**wing_id** | **number** | ID of the wing the member is in. If not applicable, will be set to -1 | [default to undefined]

## Example

```typescript
import { GetFleetsFleetIdMembers200Ok } from 'eve-esi-client';

const instance: GetFleetsFleetIdMembers200Ok = {
    character_id,
    join_time,
    role,
    role_name,
    ship_type_id,
    solar_system_id,
    squad_id,
    station_id,
    takes_fleet_warp,
    wing_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
