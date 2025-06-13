# GetSovereigntyCampaigns200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attackers_score** | **number** | Score for all attacking parties, only present in Defense Events.  | [optional] [default to undefined]
**campaign_id** | **number** | Unique ID for this campaign. | [default to undefined]
**constellation_id** | **number** | The constellation in which the campaign will take place.  | [default to undefined]
**defender_id** | **number** | Defending alliance, only present in Defense Events  | [optional] [default to undefined]
**defender_score** | **number** | Score for the defending alliance, only present in Defense Events.  | [optional] [default to undefined]
**event_type** | **string** | Type of event this campaign is for. tcu_defense, ihub_defense and station_defense are referred to as \&quot;Defense Events\&quot;, station_freeport as \&quot;Freeport Events\&quot;.  | [default to undefined]
**participants** | [**Array&lt;GetSovereigntyCampaignsParticipant&gt;**](GetSovereigntyCampaignsParticipant.md) | Alliance participating and their respective scores, only present in Freeport Events.  | [optional] [default to undefined]
**solar_system_id** | **number** | The solar system the structure is located in.  | [default to undefined]
**start_time** | **string** | Time the event is scheduled to start.  | [default to undefined]
**structure_id** | **number** | The structure item ID that is related to this campaign.  | [default to undefined]

## Example

```typescript
import { GetSovereigntyCampaigns200Ok } from 'eve-esi-client';

const instance: GetSovereigntyCampaigns200Ok = {
    attackers_score,
    campaign_id,
    constellation_id,
    defender_id,
    defender_score,
    event_type,
    participants,
    solar_system_id,
    start_time,
    structure_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
