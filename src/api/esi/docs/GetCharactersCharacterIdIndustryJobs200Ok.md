# GetCharactersCharacterIdIndustryJobs200Ok

200 ok object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_id** | **number** | Job activity ID | [default to undefined]
**blueprint_id** | **number** | blueprint_id integer | [default to undefined]
**blueprint_location_id** | **number** | Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility | [default to undefined]
**blueprint_type_id** | **number** | blueprint_type_id integer | [default to undefined]
**completed_character_id** | **number** | ID of the character which completed this job | [optional] [default to undefined]
**completed_date** | **string** | Date and time when this job was completed | [optional] [default to undefined]
**cost** | **number** | The sume of job installation fee and industry facility tax | [optional] [default to undefined]
**duration** | **number** | Job duration in seconds | [default to undefined]
**end_date** | **string** | Date and time when this job finished | [default to undefined]
**facility_id** | **number** | ID of the facility where this job is running | [default to undefined]
**installer_id** | **number** | ID of the character which installed this job | [default to undefined]
**job_id** | **number** | Unique job ID | [default to undefined]
**licensed_runs** | **number** | Number of runs blueprint is licensed for | [optional] [default to undefined]
**output_location_id** | **number** | Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility | [default to undefined]
**pause_date** | **string** | Date and time when this job was paused (i.e. time when the facility where this job was installed went offline) | [optional] [default to undefined]
**probability** | **number** | Chance of success for invention | [optional] [default to undefined]
**product_type_id** | **number** | Type ID of product (manufactured, copied or invented) | [optional] [default to undefined]
**runs** | **number** | Number of runs for a manufacturing job, or number of copies to make for a blueprint copy | [default to undefined]
**start_date** | **string** | Date and time when this job started | [default to undefined]
**station_id** | **number** | ID of the station where industry facility is located | [default to undefined]
**status** | **string** | status string | [default to undefined]
**successful_runs** | **number** | Number of successful runs for this job. Equal to runs unless this is an invention job | [optional] [default to undefined]

## Example

```typescript
import { GetCharactersCharacterIdIndustryJobs200Ok } from 'eve-esi-client';

const instance: GetCharactersCharacterIdIndustryJobs200Ok = {
    activity_id,
    blueprint_id,
    blueprint_location_id,
    blueprint_type_id,
    completed_character_id,
    completed_date,
    cost,
    duration,
    end_date,
    facility_id,
    installer_id,
    job_id,
    licensed_runs,
    output_location_id,
    pause_date,
    probability,
    product_type_id,
    runs,
    start_date,
    station_id,
    status,
    successful_runs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
