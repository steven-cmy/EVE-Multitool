# GetCharactersCharacterIdSkillqueue200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finish_date** | **string** | Date on which training of the skill will complete. Omitted if the skill queue is paused. | [optional] [default to undefined]
**finished_level** | **number** | finished_level integer | [default to undefined]
**level_end_sp** | **number** | level_end_sp integer | [optional] [default to undefined]
**level_start_sp** | **number** | Amount of SP that was in the skill when it started training it\&#39;s current level. Used to calculate % of current level complete. | [optional] [default to undefined]
**queue_position** | **number** | queue_position integer | [default to undefined]
**skill_id** | **number** | skill_id integer | [default to undefined]
**start_date** | **string** | start_date string | [optional] [default to undefined]
**training_start_sp** | **number** | training_start_sp integer | [optional] [default to undefined]

## Example

```typescript
import { GetCharactersCharacterIdSkillqueue200Ok } from 'eve-esi-client';

const instance: GetCharactersCharacterIdSkillqueue200Ok = {
    finish_date,
    finished_level,
    level_end_sp,
    level_start_sp,
    queue_position,
    skill_id,
    start_date,
    training_start_sp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
