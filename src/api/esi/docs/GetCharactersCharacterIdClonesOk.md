# GetCharactersCharacterIdClonesOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**home_location** | [**GetCharactersCharacterIdClonesHomeLocation**](GetCharactersCharacterIdClonesHomeLocation.md) |  | [optional] [default to undefined]
**jump_clones** | [**Array&lt;GetCharactersCharacterIdClonesJumpClone&gt;**](GetCharactersCharacterIdClonesJumpClone.md) | jump_clones array | [default to undefined]
**last_clone_jump_date** | **string** | last_clone_jump_date string | [optional] [default to undefined]
**last_station_change_date** | **string** | last_station_change_date string | [optional] [default to undefined]

## Example

```typescript
import { GetCharactersCharacterIdClonesOk } from 'eve-esi-client';

const instance: GetCharactersCharacterIdClonesOk = {
    home_location,
    jump_clones,
    last_clone_jump_date,
    last_station_change_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
