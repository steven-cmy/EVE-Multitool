# GetCharactersCharacterIdWalletJournal200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount of ISK given or taken from the wallet as a result of the given transaction. Positive when ISK is deposited into the wallet and negative when ISK is withdrawn | [optional] [default to undefined]
**balance** | **number** | Wallet balance after transaction occurred | [optional] [default to undefined]
**context_id** | **number** | An ID that gives extra context to the particular transaction. Because of legacy reasons the context is completely different per ref_type and means different things. It is also possible to not have a context_id | [optional] [default to undefined]
**context_id_type** | **string** | The type of the given context_id if present | [optional] [default to undefined]
**date** | **string** | Date and time of transaction | [default to undefined]
**description** | **string** | The reason for the transaction, mirrors what is seen in the client | [default to undefined]
**first_party_id** | **number** | The id of the first party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name | [optional] [default to undefined]
**id** | **number** | Unique journal reference ID | [default to undefined]
**reason** | **string** | The user stated reason for the transaction. Only applies to some ref_types | [optional] [default to undefined]
**ref_type** | **string** | \&quot;The transaction type for the given. transaction. Different transaction types will populate different attributes.\&quot; | [default to undefined]
**second_party_id** | **number** | The id of the second party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name | [optional] [default to undefined]
**tax** | **number** | Tax amount received. Only applies to tax related transactions | [optional] [default to undefined]
**tax_receiver_id** | **number** | The corporation ID receiving any tax paid. Only applies to tax related transactions | [optional] [default to undefined]

## Example

```typescript
import { GetCharactersCharacterIdWalletJournal200Ok } from 'eve-esi-client';

const instance: GetCharactersCharacterIdWalletJournal200Ok = {
    amount,
    balance,
    context_id,
    context_id_type,
    date,
    description,
    first_party_id,
    id,
    reason,
    ref_type,
    second_party_id,
    tax,
    tax_receiver_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
