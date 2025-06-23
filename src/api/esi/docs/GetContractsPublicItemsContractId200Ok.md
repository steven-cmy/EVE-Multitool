# GetContractsPublicItemsContractId200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_blueprint_copy** | **boolean** | is_blueprint_copy boolean | [optional] [default to undefined]
**is_included** | **boolean** | true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract | [default to undefined]
**item_id** | **number** | Unique ID for the item being sold. Not present if item is being requested by contract rather than sold with contract | [optional] [default to undefined]
**material_efficiency** | **number** | Material Efficiency Level of the blueprint | [optional] [default to undefined]
**quantity** | **number** | Number of items in the stack | [default to undefined]
**record_id** | **number** | Unique ID for the item, used by the contract system | [default to undefined]
**runs** | **number** | Number of runs remaining if the blueprint is a copy, -1 if it is an original | [optional] [default to undefined]
**time_efficiency** | **number** | Time Efficiency Level of the blueprint | [optional] [default to undefined]
**type_id** | **number** | Type ID for item | [default to undefined]

## Example

```typescript
import { GetContractsPublicItemsContractId200Ok } from 'eve-esi-client';

const instance: GetContractsPublicItemsContractId200Ok = {
    is_blueprint_copy,
    is_included,
    item_id,
    material_efficiency,
    quantity,
    record_id,
    runs,
    time_efficiency,
    type_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
