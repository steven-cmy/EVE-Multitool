# GetCharactersCharacterIdSkillsOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skills** | [**Array&lt;GetCharactersCharacterIdSkillsSkill&gt;**](GetCharactersCharacterIdSkillsSkill.md) | skills array | [default to undefined]
**total_sp** | **number** | total_sp integer | [default to undefined]
**unallocated_sp** | **number** | Skill points available to be assigned | [optional] [default to undefined]

## Example

```typescript
import { GetCharactersCharacterIdSkillsOk } from 'eve-esi-client';

const instance: GetCharactersCharacterIdSkillsOk = {
    skills,
    total_sp,
    unallocated_sp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
