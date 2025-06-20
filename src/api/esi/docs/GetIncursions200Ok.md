# GetIncursions200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constellation_id** | **number** | The constellation id in which this incursion takes place | [default to undefined]
**faction_id** | **number** | The attacking faction\&#39;s id | [default to undefined]
**has_boss** | **boolean** | Whether the final encounter has boss or not | [default to undefined]
**infested_solar_systems** | **Array&lt;number&gt;** | A list of infested solar system ids that are a part of this incursion | [default to undefined]
**influence** | **number** | Influence of this incursion as a float from 0 to 1 | [default to undefined]
**staging_solar_system_id** | **number** | Staging solar system for this incursion | [default to undefined]
**state** | **string** | The state of this incursion | [default to undefined]
**type** | **string** | The type of this incursion | [default to undefined]

## Example

```typescript
import { GetIncursions200Ok } from 'eve-esi-client';

const instance: GetIncursions200Ok = {
    constellation_id,
    faction_id,
    has_boss,
    infested_solar_systems,
    influence,
    staging_solar_system_id,
    state,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
