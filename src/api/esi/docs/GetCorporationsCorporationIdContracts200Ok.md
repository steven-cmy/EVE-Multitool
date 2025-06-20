# GetCorporationsCorporationIdContracts200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acceptor_id** | **number** | Who will accept the contract | [default to undefined]
**assignee_id** | **number** | ID to whom the contract is assigned, can be corporation or character ID | [default to undefined]
**availability** | **string** | To whom the contract is available | [default to undefined]
**buyout** | **number** | Buyout price (for Auctions only) | [optional] [default to undefined]
**collateral** | **number** | Collateral price (for Couriers only) | [optional] [default to undefined]
**contract_id** | **number** | contract_id integer | [default to undefined]
**date_accepted** | **string** | Date of confirmation of contract | [optional] [default to undefined]
**date_completed** | **string** | Date of completed of contract | [optional] [default to undefined]
**date_expired** | **string** | Expiration date of the contract | [default to undefined]
**date_issued** | **string** | Сreation date of the contract | [default to undefined]
**days_to_complete** | **number** | Number of days to perform the contract | [optional] [default to undefined]
**end_location_id** | **number** | End location ID (for Couriers contract) | [optional] [default to undefined]
**for_corporation** | **boolean** | true if the contract was issued on behalf of the issuer\&#39;s corporation | [default to undefined]
**issuer_corporation_id** | **number** | Character\&#39;s corporation ID for the issuer | [default to undefined]
**issuer_id** | **number** | Character ID for the issuer | [default to undefined]
**price** | **number** | Price of contract (for ItemsExchange and Auctions) | [optional] [default to undefined]
**reward** | **number** | Remuneration for contract (for Couriers only) | [optional] [default to undefined]
**start_location_id** | **number** | Start location ID (for Couriers contract) | [optional] [default to undefined]
**status** | **string** | Status of the the contract | [default to undefined]
**title** | **string** | Title of the contract | [optional] [default to undefined]
**type** | **string** | Type of the contract | [default to undefined]
**volume** | **number** | Volume of items in the contract | [optional] [default to undefined]

## Example

```typescript
import { GetCorporationsCorporationIdContracts200Ok } from 'eve-esi-client';

const instance: GetCorporationsCorporationIdContracts200Ok = {
    acceptor_id,
    assignee_id,
    availability,
    buyout,
    collateral,
    contract_id,
    date_accepted,
    date_completed,
    date_expired,
    date_issued,
    days_to_complete,
    end_location_id,
    for_corporation,
    issuer_corporation_id,
    issuer_id,
    price,
    reward,
    start_location_id,
    status,
    title,
    type,
    volume,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
