# GetUniverseSystemsSystemIdOk

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constellation_id** | **number** | The constellation this solar system is in | [default to undefined]
**name** | **string** | name string | [default to undefined]
**planets** | [**Array&lt;GetUniverseSystemsSystemIdPlanet&gt;**](GetUniverseSystemsSystemIdPlanet.md) | planets array | [optional] [default to undefined]
**position** | [**GetUniverseSystemsSystemIdPosition**](GetUniverseSystemsSystemIdPosition.md) |  | [default to undefined]
**security_class** | **string** | security_class string | [optional] [default to undefined]
**security_status** | **number** | security_status number | [default to undefined]
**star_id** | **number** | star_id integer | [optional] [default to undefined]
**stargates** | **Array&lt;number&gt;** | stargates array | [optional] [default to undefined]
**stations** | **Array&lt;number&gt;** | stations array | [optional] [default to undefined]
**system_id** | **number** | system_id integer | [default to undefined]

## Example

```typescript
import { GetUniverseSystemsSystemIdOk } from 'eve-esi-client';

const instance: GetUniverseSystemsSystemIdOk = {
    constellation_id,
    name,
    planets,
    position,
    security_class,
    security_status,
    star_id,
    stargates,
    stations,
    system_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
