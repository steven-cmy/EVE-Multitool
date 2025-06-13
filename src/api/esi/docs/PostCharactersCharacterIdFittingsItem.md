# PostCharactersCharacterIdFittingsItem

item object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flag** | **string** | Fitting location for the item. Entries placed in \&#39;Invalid\&#39; will be discarded. If this leaves the fitting with nothing, it will cause an error. | [default to undefined]
**quantity** | **number** | quantity integer | [default to undefined]
**type_id** | **number** | type_id integer | [default to undefined]

## Example

```typescript
import { PostCharactersCharacterIdFittingsItem } from 'eve-esi-client';

const instance: PostCharactersCharacterIdFittingsItem = {
    flag,
    quantity,
    type_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
