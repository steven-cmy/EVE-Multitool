# GetCorporationsCorporationIdContractsContractIdItems200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_included** | **boolean** | true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract | [default to undefined]
**is_singleton** | **boolean** | is_singleton boolean | [default to undefined]
**quantity** | **number** | Number of items in the stack | [default to undefined]
**raw_quantity** | **number** | -1 indicates that the item is a singleton (non-stackable). If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy | [optional] [default to undefined]
**record_id** | **number** | Unique ID for the item | [default to undefined]
**type_id** | **number** | Type ID for item | [default to undefined]

## Example

```typescript
import { GetCorporationsCorporationIdContractsContractIdItems200Ok } from 'eve-esi-client';

const instance: GetCorporationsCorporationIdContractsContractIdItems200Ok = {
    is_included,
    is_singleton,
    quantity,
    raw_quantity,
    record_id,
    type_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
