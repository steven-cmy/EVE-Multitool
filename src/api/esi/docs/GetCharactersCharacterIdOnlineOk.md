# GetCharactersCharacterIdOnlineOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_login** | **string** | Timestamp of the last login | [optional] [default to undefined]
**last_logout** | **string** | Timestamp of the last logout | [optional] [default to undefined]
**logins** | **number** | Total number of times the character has logged in | [optional] [default to undefined]
**online** | **boolean** | If the character is online | [default to undefined]

## Example

```typescript
import { GetCharactersCharacterIdOnlineOk } from 'eve-esi-client';

const instance: GetCharactersCharacterIdOnlineOk = {
    last_login,
    last_logout,
    logins,
    online,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
