# GetCharactersCharacterIdBlueprints200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **number** | Unique ID for this item. | [default to undefined]
**location_flag** | **string** | Type of the location_id | [default to undefined]
**location_id** | **number** | References a station, a ship or an item_id if this blueprint is located within a container. If the return value is an item_id, then the Character AssetList API must be queried to find the container using the given item_id to determine the correct location of the Blueprint. | [default to undefined]
**material_efficiency** | **number** | Material Efficiency Level of the blueprint. | [default to undefined]
**quantity** | **number** | A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet). | [default to undefined]
**runs** | **number** | Number of runs remaining if the blueprint is a copy, -1 if it is an original. | [default to undefined]
**time_efficiency** | **number** | Time Efficiency Level of the blueprint. | [default to undefined]
**type_id** | **number** | type_id integer | [default to undefined]

## Example

```typescript
import { GetCharactersCharacterIdBlueprints200Ok } from 'eve-esi-client';

const instance: GetCharactersCharacterIdBlueprints200Ok = {
    item_id,
    location_flag,
    location_id,
    material_efficiency,
    quantity,
    runs,
    time_efficiency,
    type_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
