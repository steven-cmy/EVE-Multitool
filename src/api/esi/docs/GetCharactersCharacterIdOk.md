# GetCharactersCharacterIdOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alliance_id** | **number** | The character\&#39;s alliance ID | [optional] [default to undefined]
**birthday** | **string** | Creation date of the character | [default to undefined]
**bloodline_id** | **number** | bloodline_id integer | [default to undefined]
**corporation_id** | **number** | The character\&#39;s corporation ID | [default to undefined]
**description** | **string** | description string | [optional] [default to undefined]
**faction_id** | **number** | ID of the faction the character is fighting for, if the character is enlisted in Factional Warfare | [optional] [default to undefined]
**gender** | **string** | gender string | [default to undefined]
**name** | **string** | name string | [default to undefined]
**race_id** | **number** | race_id integer | [default to undefined]
**security_status** | **number** | security_status number | [optional] [default to undefined]
**title** | **string** | The individual title of the character | [optional] [default to undefined]

## Example

```typescript
import { GetCharactersCharacterIdOk } from 'eve-esi-client';

const instance: GetCharactersCharacterIdOk = {
    alliance_id,
    birthday,
    bloodline_id,
    corporation_id,
    description,
    faction_id,
    gender,
    name,
    race_id,
    security_status,
    title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
