# GetCharactersCharacterIdMailMailIdOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **string** | Mail\&#39;s body | [optional] [default to undefined]
**from** | **number** | From whom the mail was sent | [optional] [default to undefined]
**labels** | **Array&lt;number&gt;** | Labels attached to the mail | [optional] [default to undefined]
**read** | **boolean** | Whether the mail is flagged as read | [optional] [default to undefined]
**recipients** | [**Set&lt;GetCharactersCharacterIdMailMailIdRecipient&gt;**](GetCharactersCharacterIdMailMailIdRecipient.md) | Recipients of the mail | [optional] [default to undefined]
**subject** | **string** | Mail subject | [optional] [default to undefined]
**timestamp** | **string** | When the mail was sent | [optional] [default to undefined]

## Example

```typescript
import { GetCharactersCharacterIdMailMailIdOk } from 'eve-esi-client';

const instance: GetCharactersCharacterIdMailMailIdOk = {
    body,
    from,
    labels,
    read,
    recipients,
    subject,
    timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
