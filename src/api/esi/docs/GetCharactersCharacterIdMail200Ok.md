# GetCharactersCharacterIdMail200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **number** | From whom the mail was sent | [optional] [default to undefined]
**is_read** | **boolean** | is_read boolean | [optional] [default to undefined]
**labels** | **Set&lt;number&gt;** | labels array | [optional] [default to undefined]
**mail_id** | **number** | mail_id integer | [optional] [default to undefined]
**recipients** | [**Set&lt;GetCharactersCharacterIdMailRecipient&gt;**](GetCharactersCharacterIdMailRecipient.md) | Recipients of the mail | [optional] [default to undefined]
**subject** | **string** | Mail subject | [optional] [default to undefined]
**timestamp** | **string** | When the mail was sent | [optional] [default to undefined]

## Example

```typescript
import { GetCharactersCharacterIdMail200Ok } from 'eve-esi-client';

const instance: GetCharactersCharacterIdMail200Ok = {
    from,
    is_read,
    labels,
    mail_id,
    recipients,
    subject,
    timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
