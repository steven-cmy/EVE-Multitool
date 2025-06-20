# GetCharactersCharacterIdNotificationsContacts200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | message string | [default to undefined]
**notification_id** | **number** | notification_id integer | [default to undefined]
**send_date** | **string** | send_date string | [default to undefined]
**sender_character_id** | **number** | sender_character_id integer | [default to undefined]
**standing_level** | **number** | A number representing the standing level the receiver has been added at by the sender. The standing levels are as follows: -10 -&gt; Terrible | -5 -&gt; Bad |  0 -&gt; Neutral |  5 -&gt; Good |  10 -&gt; Excellent | [default to undefined]

## Example

```typescript
import { GetCharactersCharacterIdNotificationsContacts200Ok } from 'eve-esi-client';

const instance: GetCharactersCharacterIdNotificationsContacts200Ok = {
    message,
    notification_id,
    send_date,
    sender_character_id,
    standing_level,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
