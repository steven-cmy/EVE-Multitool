# GetCorporationsCorporationIdContainersLogs200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | action string | [default to undefined]
**character_id** | **number** | ID of the character who performed the action. | [default to undefined]
**container_id** | **number** | ID of the container | [default to undefined]
**container_type_id** | **number** | Type ID of the container | [default to undefined]
**location_flag** | **string** | location_flag string | [default to undefined]
**location_id** | **number** | location_id integer | [default to undefined]
**logged_at** | **string** | Timestamp when this log was created | [default to undefined]
**new_config_bitmask** | **number** | new_config_bitmask integer | [optional] [default to undefined]
**old_config_bitmask** | **number** | old_config_bitmask integer | [optional] [default to undefined]
**password_type** | **string** | Type of password set if action is of type SetPassword or EnterPassword | [optional] [default to undefined]
**quantity** | **number** | Quantity of the item being acted upon | [optional] [default to undefined]
**type_id** | **number** | Type ID of the item being acted upon | [optional] [default to undefined]

## Example

```typescript
import { GetCorporationsCorporationIdContainersLogs200Ok } from 'eve-esi-client';

const instance: GetCorporationsCorporationIdContainersLogs200Ok = {
    action,
    character_id,
    container_id,
    container_type_id,
    location_flag,
    location_id,
    logged_at,
    new_config_bitmask,
    old_config_bitmask,
    password_type,
    quantity,
    type_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
