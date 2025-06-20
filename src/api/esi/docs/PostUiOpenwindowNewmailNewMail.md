# PostUiOpenwindowNewmailNewMail

new_mail object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **string** | body string | [default to undefined]
**recipients** | **Array&lt;number&gt;** | recipients array | [default to undefined]
**subject** | **string** | subject string | [default to undefined]
**to_corp_or_alliance_id** | **number** | to_corp_or_alliance_id integer | [optional] [default to undefined]
**to_mailing_list_id** | **number** | Corporations, alliances and mailing lists are all types of mailing groups. You may only send to one mailing group, at a time, so you may fill out either this field or the to_corp_or_alliance_ids field | [optional] [default to undefined]

## Example

```typescript
import { PostUiOpenwindowNewmailNewMail } from 'eve-esi-client';

const instance: PostUiOpenwindowNewmailNewMail = {
    body,
    recipients,
    subject,
    to_corp_or_alliance_id,
    to_mailing_list_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
