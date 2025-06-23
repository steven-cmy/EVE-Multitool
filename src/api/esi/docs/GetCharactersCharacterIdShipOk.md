# GetCharactersCharacterIdShipOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ship_item_id** | **number** | Item id\&#39;s are unique to a ship and persist until it is repackaged. This value can be used to track repeated uses of a ship, or detect when a pilot changes into a different instance of the same ship type. | [default to undefined]
**ship_name** | **string** | ship_name string | [default to undefined]
**ship_type_id** | **number** | ship_type_id integer | [default to undefined]

## Example

```typescript
import { GetCharactersCharacterIdShipOk } from 'eve-esi-client';

const instance: GetCharactersCharacterIdShipOk = {
    ship_item_id,
    ship_name,
    ship_type_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
