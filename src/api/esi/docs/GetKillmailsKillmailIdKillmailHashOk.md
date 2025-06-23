# GetKillmailsKillmailIdKillmailHashOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attackers** | [**Array&lt;GetKillmailsKillmailIdKillmailHashAttacker&gt;**](GetKillmailsKillmailIdKillmailHashAttacker.md) | attackers array | [default to undefined]
**killmail_id** | **number** | ID of the killmail | [default to undefined]
**killmail_time** | **string** | Time that the victim was killed and the killmail generated  | [default to undefined]
**moon_id** | **number** | Moon if the kill took place at one | [optional] [default to undefined]
**solar_system_id** | **number** | Solar system that the kill took place in  | [default to undefined]
**victim** | [**GetKillmailsKillmailIdKillmailHashVictim**](GetKillmailsKillmailIdKillmailHashVictim.md) |  | [default to undefined]
**war_id** | **number** | War if the killmail is generated in relation to an official war  | [optional] [default to undefined]

## Example

```typescript
import { GetKillmailsKillmailIdKillmailHashOk } from 'eve-esi-client';

const instance: GetKillmailsKillmailIdKillmailHashOk = {
    attackers,
    killmail_id,
    killmail_time,
    moon_id,
    solar_system_id,
    victim,
    war_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
