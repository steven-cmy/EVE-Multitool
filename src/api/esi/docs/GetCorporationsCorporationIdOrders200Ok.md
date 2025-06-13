# GetCorporationsCorporationIdOrders200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **number** | Number of days for which order is valid (starting from the issued date). An order expires at time issued + duration | [default to undefined]
**escrow** | **number** | For buy orders, the amount of ISK in escrow | [optional] [default to undefined]
**is_buy_order** | **boolean** | True if the order is a bid (buy) order | [optional] [default to undefined]
**issued** | **string** | Date and time when this order was issued | [default to undefined]
**issued_by** | **number** | The character who issued this order | [default to undefined]
**location_id** | **number** | ID of the location where order was placed | [default to undefined]
**min_volume** | **number** | For buy orders, the minimum quantity that will be accepted in a matching sell order | [optional] [default to undefined]
**order_id** | **number** | Unique order ID | [default to undefined]
**price** | **number** | Cost per unit for this order | [default to undefined]
**range** | **string** | Valid order range, numbers are ranges in jumps | [default to undefined]
**region_id** | **number** | ID of the region where order was placed | [default to undefined]
**type_id** | **number** | The type ID of the item transacted in this order | [default to undefined]
**volume_remain** | **number** | Quantity of items still required or offered | [default to undefined]
**volume_total** | **number** | Quantity of items required or offered at time order was placed | [default to undefined]
**wallet_division** | **number** | The corporation wallet division used for this order. | [default to undefined]

## Example

```typescript
import { GetCorporationsCorporationIdOrders200Ok } from 'eve-esi-client';

const instance: GetCorporationsCorporationIdOrders200Ok = {
    duration,
    escrow,
    is_buy_order,
    issued,
    issued_by,
    location_id,
    min_volume,
    order_id,
    price,
    range,
    region_id,
    type_id,
    volume_remain,
    volume_total,
    wallet_division,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
