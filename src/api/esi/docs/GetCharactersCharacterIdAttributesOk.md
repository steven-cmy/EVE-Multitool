# GetCharactersCharacterIdAttributesOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accrued_remap_cooldown_date** | **string** | Neural remapping cooldown after a character uses remap accrued over time | [optional] [default to undefined]
**bonus_remaps** | **number** | Number of available bonus character neural remaps | [optional] [default to undefined]
**charisma** | **number** | charisma integer | [default to undefined]
**intelligence** | **number** | intelligence integer | [default to undefined]
**last_remap_date** | **string** | Datetime of last neural remap, including usage of bonus remaps | [optional] [default to undefined]
**memory** | **number** | memory integer | [default to undefined]
**perception** | **number** | perception integer | [default to undefined]
**willpower** | **number** | willpower integer | [default to undefined]

## Example

```typescript
import { GetCharactersCharacterIdAttributesOk } from 'eve-esi-client';

const instance: GetCharactersCharacterIdAttributesOk = {
    accrued_remap_cooldown_date,
    bonus_remaps,
    charisma,
    intelligence,
    last_remap_date,
    memory,
    perception,
    willpower,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
