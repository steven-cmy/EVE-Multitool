## eve-esi-client@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install eve-esi-client@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://esi.evetech.net/latest*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AllianceApi* | [**getAlliances**](docs/AllianceApi.md#getalliances) | **GET** /alliances/ | List all alliances
*AllianceApi* | [**getAlliancesAllianceId**](docs/AllianceApi.md#getalliancesallianceid) | **GET** /alliances/{alliance_id}/ | Get alliance information
*AllianceApi* | [**getAlliancesAllianceIdCorporations**](docs/AllianceApi.md#getalliancesallianceidcorporations) | **GET** /alliances/{alliance_id}/corporations/ | List alliance\&#39;s corporations
*AllianceApi* | [**getAlliancesAllianceIdIcons**](docs/AllianceApi.md#getalliancesallianceidicons) | **GET** /alliances/{alliance_id}/icons/ | Get alliance icon
*AssetsApi* | [**getCharactersCharacterIdAssets**](docs/AssetsApi.md#getcharacterscharacteridassets) | **GET** /characters/{character_id}/assets/ | Get character assets
*AssetsApi* | [**getCorporationsCorporationIdAssets**](docs/AssetsApi.md#getcorporationscorporationidassets) | **GET** /corporations/{corporation_id}/assets/ | Get corporation assets
*AssetsApi* | [**postCharactersCharacterIdAssetsLocations**](docs/AssetsApi.md#postcharacterscharacteridassetslocations) | **POST** /characters/{character_id}/assets/locations/ | Get character asset locations
*AssetsApi* | [**postCharactersCharacterIdAssetsNames**](docs/AssetsApi.md#postcharacterscharacteridassetsnames) | **POST** /characters/{character_id}/assets/names/ | Get character asset names
*AssetsApi* | [**postCorporationsCorporationIdAssetsLocations**](docs/AssetsApi.md#postcorporationscorporationidassetslocations) | **POST** /corporations/{corporation_id}/assets/locations/ | Get corporation asset locations
*AssetsApi* | [**postCorporationsCorporationIdAssetsNames**](docs/AssetsApi.md#postcorporationscorporationidassetsnames) | **POST** /corporations/{corporation_id}/assets/names/ | Get corporation asset names
*CalendarApi* | [**getCharactersCharacterIdCalendar**](docs/CalendarApi.md#getcharacterscharacteridcalendar) | **GET** /characters/{character_id}/calendar/ | List calendar event summaries
*CalendarApi* | [**getCharactersCharacterIdCalendarEventId**](docs/CalendarApi.md#getcharacterscharacteridcalendareventid) | **GET** /characters/{character_id}/calendar/{event_id}/ | Get an event
*CalendarApi* | [**getCharactersCharacterIdCalendarEventIdAttendees**](docs/CalendarApi.md#getcharacterscharacteridcalendareventidattendees) | **GET** /characters/{character_id}/calendar/{event_id}/attendees/ | Get attendees
*CalendarApi* | [**putCharactersCharacterIdCalendarEventId**](docs/CalendarApi.md#putcharacterscharacteridcalendareventid) | **PUT** /characters/{character_id}/calendar/{event_id}/ | Respond to an event
*CharacterApi* | [**getCharactersCharacterId**](docs/CharacterApi.md#getcharacterscharacterid) | **GET** /characters/{character_id}/ | Get character\&#39;s public information
*CharacterApi* | [**getCharactersCharacterIdAgentsResearch**](docs/CharacterApi.md#getcharacterscharacteridagentsresearch) | **GET** /characters/{character_id}/agents_research/ | Get agents research
*CharacterApi* | [**getCharactersCharacterIdBlueprints**](docs/CharacterApi.md#getcharacterscharacteridblueprints) | **GET** /characters/{character_id}/blueprints/ | Get blueprints
*CharacterApi* | [**getCharactersCharacterIdCorporationhistory**](docs/CharacterApi.md#getcharacterscharacteridcorporationhistory) | **GET** /characters/{character_id}/corporationhistory/ | Get corporation history
*CharacterApi* | [**getCharactersCharacterIdFatigue**](docs/CharacterApi.md#getcharacterscharacteridfatigue) | **GET** /characters/{character_id}/fatigue/ | Get jump fatigue
*CharacterApi* | [**getCharactersCharacterIdMedals**](docs/CharacterApi.md#getcharacterscharacteridmedals) | **GET** /characters/{character_id}/medals/ | Get medals
*CharacterApi* | [**getCharactersCharacterIdNotifications**](docs/CharacterApi.md#getcharacterscharacteridnotifications) | **GET** /characters/{character_id}/notifications/ | Get character notifications
*CharacterApi* | [**getCharactersCharacterIdNotificationsContacts**](docs/CharacterApi.md#getcharacterscharacteridnotificationscontacts) | **GET** /characters/{character_id}/notifications/contacts/ | Get new contact notifications
*CharacterApi* | [**getCharactersCharacterIdPortrait**](docs/CharacterApi.md#getcharacterscharacteridportrait) | **GET** /characters/{character_id}/portrait/ | Get character portraits
*CharacterApi* | [**getCharactersCharacterIdRoles**](docs/CharacterApi.md#getcharacterscharacteridroles) | **GET** /characters/{character_id}/roles/ | Get character corporation roles
*CharacterApi* | [**getCharactersCharacterIdStandings**](docs/CharacterApi.md#getcharacterscharacteridstandings) | **GET** /characters/{character_id}/standings/ | Get standings
*CharacterApi* | [**getCharactersCharacterIdTitles**](docs/CharacterApi.md#getcharacterscharacteridtitles) | **GET** /characters/{character_id}/titles/ | Get character corporation titles
*CharacterApi* | [**postCharactersAffiliation**](docs/CharacterApi.md#postcharactersaffiliation) | **POST** /characters/affiliation/ | Character affiliation
*CharacterApi* | [**postCharactersCharacterIdCspa**](docs/CharacterApi.md#postcharacterscharacteridcspa) | **POST** /characters/{character_id}/cspa/ | Calculate a CSPA charge cost
*ClonesApi* | [**getCharactersCharacterIdClones**](docs/ClonesApi.md#getcharacterscharacteridclones) | **GET** /characters/{character_id}/clones/ | Get clones
*ClonesApi* | [**getCharactersCharacterIdImplants**](docs/ClonesApi.md#getcharacterscharacteridimplants) | **GET** /characters/{character_id}/implants/ | Get active implants
*ContactsApi* | [**deleteCharactersCharacterIdContacts**](docs/ContactsApi.md#deletecharacterscharacteridcontacts) | **DELETE** /characters/{character_id}/contacts/ | Delete contacts
*ContactsApi* | [**getAlliancesAllianceIdContacts**](docs/ContactsApi.md#getalliancesallianceidcontacts) | **GET** /alliances/{alliance_id}/contacts/ | Get alliance contacts
*ContactsApi* | [**getAlliancesAllianceIdContactsLabels**](docs/ContactsApi.md#getalliancesallianceidcontactslabels) | **GET** /alliances/{alliance_id}/contacts/labels/ | Get alliance contact labels
*ContactsApi* | [**getCharactersCharacterIdContacts**](docs/ContactsApi.md#getcharacterscharacteridcontacts) | **GET** /characters/{character_id}/contacts/ | Get contacts
*ContactsApi* | [**getCharactersCharacterIdContactsLabels**](docs/ContactsApi.md#getcharacterscharacteridcontactslabels) | **GET** /characters/{character_id}/contacts/labels/ | Get contact labels
*ContactsApi* | [**getCorporationsCorporationIdContacts**](docs/ContactsApi.md#getcorporationscorporationidcontacts) | **GET** /corporations/{corporation_id}/contacts/ | Get corporation contacts
*ContactsApi* | [**getCorporationsCorporationIdContactsLabels**](docs/ContactsApi.md#getcorporationscorporationidcontactslabels) | **GET** /corporations/{corporation_id}/contacts/labels/ | Get corporation contact labels
*ContactsApi* | [**postCharactersCharacterIdContacts**](docs/ContactsApi.md#postcharacterscharacteridcontacts) | **POST** /characters/{character_id}/contacts/ | Add contacts
*ContactsApi* | [**putCharactersCharacterIdContacts**](docs/ContactsApi.md#putcharacterscharacteridcontacts) | **PUT** /characters/{character_id}/contacts/ | Edit contacts
*ContractsApi* | [**getCharactersCharacterIdContracts**](docs/ContractsApi.md#getcharacterscharacteridcontracts) | **GET** /characters/{character_id}/contracts/ | Get contracts
*ContractsApi* | [**getCharactersCharacterIdContractsContractIdBids**](docs/ContractsApi.md#getcharacterscharacteridcontractscontractidbids) | **GET** /characters/{character_id}/contracts/{contract_id}/bids/ | Get contract bids
*ContractsApi* | [**getCharactersCharacterIdContractsContractIdItems**](docs/ContractsApi.md#getcharacterscharacteridcontractscontractiditems) | **GET** /characters/{character_id}/contracts/{contract_id}/items/ | Get contract items
*ContractsApi* | [**getContractsPublicBidsContractId**](docs/ContractsApi.md#getcontractspublicbidscontractid) | **GET** /contracts/public/bids/{contract_id}/ | Get public contract bids
*ContractsApi* | [**getContractsPublicItemsContractId**](docs/ContractsApi.md#getcontractspublicitemscontractid) | **GET** /contracts/public/items/{contract_id}/ | Get public contract items
*ContractsApi* | [**getContractsPublicRegionId**](docs/ContractsApi.md#getcontractspublicregionid) | **GET** /contracts/public/{region_id}/ | Get public contracts
*ContractsApi* | [**getCorporationsCorporationIdContracts**](docs/ContractsApi.md#getcorporationscorporationidcontracts) | **GET** /corporations/{corporation_id}/contracts/ | Get corporation contracts
*ContractsApi* | [**getCorporationsCorporationIdContractsContractIdBids**](docs/ContractsApi.md#getcorporationscorporationidcontractscontractidbids) | **GET** /corporations/{corporation_id}/contracts/{contract_id}/bids/ | Get corporation contract bids
*ContractsApi* | [**getCorporationsCorporationIdContractsContractIdItems**](docs/ContractsApi.md#getcorporationscorporationidcontractscontractiditems) | **GET** /corporations/{corporation_id}/contracts/{contract_id}/items/ | Get corporation contract items
*CorporationApi* | [**getCorporationsCorporationId**](docs/CorporationApi.md#getcorporationscorporationid) | **GET** /corporations/{corporation_id}/ | Get corporation information
*CorporationApi* | [**getCorporationsCorporationIdAlliancehistory**](docs/CorporationApi.md#getcorporationscorporationidalliancehistory) | **GET** /corporations/{corporation_id}/alliancehistory/ | Get alliance history
*CorporationApi* | [**getCorporationsCorporationIdBlueprints**](docs/CorporationApi.md#getcorporationscorporationidblueprints) | **GET** /corporations/{corporation_id}/blueprints/ | Get corporation blueprints
*CorporationApi* | [**getCorporationsCorporationIdContainersLogs**](docs/CorporationApi.md#getcorporationscorporationidcontainerslogs) | **GET** /corporations/{corporation_id}/containers/logs/ | Get all corporation ALSC logs
*CorporationApi* | [**getCorporationsCorporationIdDivisions**](docs/CorporationApi.md#getcorporationscorporationiddivisions) | **GET** /corporations/{corporation_id}/divisions/ | Get corporation divisions
*CorporationApi* | [**getCorporationsCorporationIdFacilities**](docs/CorporationApi.md#getcorporationscorporationidfacilities) | **GET** /corporations/{corporation_id}/facilities/ | Get corporation facilities
*CorporationApi* | [**getCorporationsCorporationIdIcons**](docs/CorporationApi.md#getcorporationscorporationidicons) | **GET** /corporations/{corporation_id}/icons/ | Get corporation icon
*CorporationApi* | [**getCorporationsCorporationIdMedals**](docs/CorporationApi.md#getcorporationscorporationidmedals) | **GET** /corporations/{corporation_id}/medals/ | Get corporation medals
*CorporationApi* | [**getCorporationsCorporationIdMedalsIssued**](docs/CorporationApi.md#getcorporationscorporationidmedalsissued) | **GET** /corporations/{corporation_id}/medals/issued/ | Get corporation issued medals
*CorporationApi* | [**getCorporationsCorporationIdMembers**](docs/CorporationApi.md#getcorporationscorporationidmembers) | **GET** /corporations/{corporation_id}/members/ | Get corporation members
*CorporationApi* | [**getCorporationsCorporationIdMembersLimit**](docs/CorporationApi.md#getcorporationscorporationidmemberslimit) | **GET** /corporations/{corporation_id}/members/limit/ | Get corporation member limit
*CorporationApi* | [**getCorporationsCorporationIdMembersTitles**](docs/CorporationApi.md#getcorporationscorporationidmemberstitles) | **GET** /corporations/{corporation_id}/members/titles/ | Get corporation\&#39;s members\&#39; titles
*CorporationApi* | [**getCorporationsCorporationIdMembertracking**](docs/CorporationApi.md#getcorporationscorporationidmembertracking) | **GET** /corporations/{corporation_id}/membertracking/ | Track corporation members
*CorporationApi* | [**getCorporationsCorporationIdRoles**](docs/CorporationApi.md#getcorporationscorporationidroles) | **GET** /corporations/{corporation_id}/roles/ | Get corporation member roles
*CorporationApi* | [**getCorporationsCorporationIdRolesHistory**](docs/CorporationApi.md#getcorporationscorporationidroleshistory) | **GET** /corporations/{corporation_id}/roles/history/ | Get corporation member roles history
*CorporationApi* | [**getCorporationsCorporationIdShareholders**](docs/CorporationApi.md#getcorporationscorporationidshareholders) | **GET** /corporations/{corporation_id}/shareholders/ | Get corporation shareholders
*CorporationApi* | [**getCorporationsCorporationIdStandings**](docs/CorporationApi.md#getcorporationscorporationidstandings) | **GET** /corporations/{corporation_id}/standings/ | Get corporation standings
*CorporationApi* | [**getCorporationsCorporationIdStarbases**](docs/CorporationApi.md#getcorporationscorporationidstarbases) | **GET** /corporations/{corporation_id}/starbases/ | Get corporation starbases (POSes)
*CorporationApi* | [**getCorporationsCorporationIdStarbasesStarbaseId**](docs/CorporationApi.md#getcorporationscorporationidstarbasesstarbaseid) | **GET** /corporations/{corporation_id}/starbases/{starbase_id}/ | Get starbase (POS) detail
*CorporationApi* | [**getCorporationsCorporationIdStructures**](docs/CorporationApi.md#getcorporationscorporationidstructures) | **GET** /corporations/{corporation_id}/structures/ | Get corporation structures
*CorporationApi* | [**getCorporationsCorporationIdTitles**](docs/CorporationApi.md#getcorporationscorporationidtitles) | **GET** /corporations/{corporation_id}/titles/ | Get corporation titles
*CorporationApi* | [**getCorporationsNpccorps**](docs/CorporationApi.md#getcorporationsnpccorps) | **GET** /corporations/npccorps/ | Get npc corporations
*DogmaApi* | [**getDogmaAttributes**](docs/DogmaApi.md#getdogmaattributes) | **GET** /dogma/attributes/ | Get attributes
*DogmaApi* | [**getDogmaAttributesAttributeId**](docs/DogmaApi.md#getdogmaattributesattributeid) | **GET** /dogma/attributes/{attribute_id}/ | Get attribute information
*DogmaApi* | [**getDogmaDynamicItemsTypeIdItemId**](docs/DogmaApi.md#getdogmadynamicitemstypeiditemid) | **GET** /dogma/dynamic/items/{type_id}/{item_id}/ | Get dynamic item information
*DogmaApi* | [**getDogmaEffects**](docs/DogmaApi.md#getdogmaeffects) | **GET** /dogma/effects/ | Get effects
*DogmaApi* | [**getDogmaEffectsEffectId**](docs/DogmaApi.md#getdogmaeffectseffectid) | **GET** /dogma/effects/{effect_id}/ | Get effect information
*FactionWarfareApi* | [**getCharactersCharacterIdFwStats**](docs/FactionWarfareApi.md#getcharacterscharacteridfwstats) | **GET** /characters/{character_id}/fw/stats/ | Overview of a character involved in faction warfare
*FactionWarfareApi* | [**getCorporationsCorporationIdFwStats**](docs/FactionWarfareApi.md#getcorporationscorporationidfwstats) | **GET** /corporations/{corporation_id}/fw/stats/ | Overview of a corporation involved in faction warfare
*FactionWarfareApi* | [**getFwLeaderboards**](docs/FactionWarfareApi.md#getfwleaderboards) | **GET** /fw/leaderboards/ | List of the top factions in faction warfare
*FactionWarfareApi* | [**getFwLeaderboardsCharacters**](docs/FactionWarfareApi.md#getfwleaderboardscharacters) | **GET** /fw/leaderboards/characters/ | List of the top pilots in faction warfare
*FactionWarfareApi* | [**getFwLeaderboardsCorporations**](docs/FactionWarfareApi.md#getfwleaderboardscorporations) | **GET** /fw/leaderboards/corporations/ | List of the top corporations in faction warfare
*FactionWarfareApi* | [**getFwStats**](docs/FactionWarfareApi.md#getfwstats) | **GET** /fw/stats/ | An overview of statistics about factions involved in faction warfare
*FactionWarfareApi* | [**getFwSystems**](docs/FactionWarfareApi.md#getfwsystems) | **GET** /fw/systems/ | Ownership of faction warfare systems
*FactionWarfareApi* | [**getFwWars**](docs/FactionWarfareApi.md#getfwwars) | **GET** /fw/wars/ | Data about which NPC factions are at war
*FittingsApi* | [**deleteCharactersCharacterIdFittingsFittingId**](docs/FittingsApi.md#deletecharacterscharacteridfittingsfittingid) | **DELETE** /characters/{character_id}/fittings/{fitting_id}/ | Delete fitting
*FittingsApi* | [**getCharactersCharacterIdFittings**](docs/FittingsApi.md#getcharacterscharacteridfittings) | **GET** /characters/{character_id}/fittings/ | Get fittings
*FittingsApi* | [**postCharactersCharacterIdFittings**](docs/FittingsApi.md#postcharacterscharacteridfittings) | **POST** /characters/{character_id}/fittings/ | Create fitting
*FleetsApi* | [**deleteFleetsFleetIdMembersMemberId**](docs/FleetsApi.md#deletefleetsfleetidmembersmemberid) | **DELETE** /fleets/{fleet_id}/members/{member_id}/ | Kick fleet member
*FleetsApi* | [**deleteFleetsFleetIdSquadsSquadId**](docs/FleetsApi.md#deletefleetsfleetidsquadssquadid) | **DELETE** /fleets/{fleet_id}/squads/{squad_id}/ | Delete fleet squad
*FleetsApi* | [**deleteFleetsFleetIdWingsWingId**](docs/FleetsApi.md#deletefleetsfleetidwingswingid) | **DELETE** /fleets/{fleet_id}/wings/{wing_id}/ | Delete fleet wing
*FleetsApi* | [**getCharactersCharacterIdFleet**](docs/FleetsApi.md#getcharacterscharacteridfleet) | **GET** /characters/{character_id}/fleet/ | Get character fleet info
*FleetsApi* | [**getFleetsFleetId**](docs/FleetsApi.md#getfleetsfleetid) | **GET** /fleets/{fleet_id}/ | Get fleet information
*FleetsApi* | [**getFleetsFleetIdMembers**](docs/FleetsApi.md#getfleetsfleetidmembers) | **GET** /fleets/{fleet_id}/members/ | Get fleet members
*FleetsApi* | [**getFleetsFleetIdWings**](docs/FleetsApi.md#getfleetsfleetidwings) | **GET** /fleets/{fleet_id}/wings/ | Get fleet wings
*FleetsApi* | [**postFleetsFleetIdMembers**](docs/FleetsApi.md#postfleetsfleetidmembers) | **POST** /fleets/{fleet_id}/members/ | Create fleet invitation
*FleetsApi* | [**postFleetsFleetIdWings**](docs/FleetsApi.md#postfleetsfleetidwings) | **POST** /fleets/{fleet_id}/wings/ | Create fleet wing
*FleetsApi* | [**postFleetsFleetIdWingsWingIdSquads**](docs/FleetsApi.md#postfleetsfleetidwingswingidsquads) | **POST** /fleets/{fleet_id}/wings/{wing_id}/squads/ | Create fleet squad
*FleetsApi* | [**putFleetsFleetId**](docs/FleetsApi.md#putfleetsfleetid) | **PUT** /fleets/{fleet_id}/ | Update fleet
*FleetsApi* | [**putFleetsFleetIdMembersMemberId**](docs/FleetsApi.md#putfleetsfleetidmembersmemberid) | **PUT** /fleets/{fleet_id}/members/{member_id}/ | Move fleet member
*FleetsApi* | [**putFleetsFleetIdSquadsSquadId**](docs/FleetsApi.md#putfleetsfleetidsquadssquadid) | **PUT** /fleets/{fleet_id}/squads/{squad_id}/ | Rename fleet squad
*FleetsApi* | [**putFleetsFleetIdWingsWingId**](docs/FleetsApi.md#putfleetsfleetidwingswingid) | **PUT** /fleets/{fleet_id}/wings/{wing_id}/ | Rename fleet wing
*IncursionsApi* | [**getIncursions**](docs/IncursionsApi.md#getincursions) | **GET** /incursions/ | List incursions
*IndustryApi* | [**getCharactersCharacterIdIndustryJobs**](docs/IndustryApi.md#getcharacterscharacteridindustryjobs) | **GET** /characters/{character_id}/industry/jobs/ | List character industry jobs
*IndustryApi* | [**getCharactersCharacterIdMining**](docs/IndustryApi.md#getcharacterscharacteridmining) | **GET** /characters/{character_id}/mining/ | Character mining ledger
*IndustryApi* | [**getCorporationCorporationIdMiningExtractions**](docs/IndustryApi.md#getcorporationcorporationidminingextractions) | **GET** /corporation/{corporation_id}/mining/extractions/ | Moon extraction timers
*IndustryApi* | [**getCorporationCorporationIdMiningObservers**](docs/IndustryApi.md#getcorporationcorporationidminingobservers) | **GET** /corporation/{corporation_id}/mining/observers/ | Corporation mining observers
*IndustryApi* | [**getCorporationCorporationIdMiningObserversObserverId**](docs/IndustryApi.md#getcorporationcorporationidminingobserversobserverid) | **GET** /corporation/{corporation_id}/mining/observers/{observer_id}/ | Observed corporation mining
*IndustryApi* | [**getCorporationsCorporationIdIndustryJobs**](docs/IndustryApi.md#getcorporationscorporationidindustryjobs) | **GET** /corporations/{corporation_id}/industry/jobs/ | List corporation industry jobs
*IndustryApi* | [**getIndustryFacilities**](docs/IndustryApi.md#getindustryfacilities) | **GET** /industry/facilities/ | List industry facilities
*IndustryApi* | [**getIndustrySystems**](docs/IndustryApi.md#getindustrysystems) | **GET** /industry/systems/ | List solar system cost indices
*InsuranceApi* | [**getInsurancePrices**](docs/InsuranceApi.md#getinsuranceprices) | **GET** /insurance/prices/ | List insurance levels
*KillmailsApi* | [**getCharactersCharacterIdKillmailsRecent**](docs/KillmailsApi.md#getcharacterscharacteridkillmailsrecent) | **GET** /characters/{character_id}/killmails/recent/ | Get a character\&#39;s recent kills and losses
*KillmailsApi* | [**getCorporationsCorporationIdKillmailsRecent**](docs/KillmailsApi.md#getcorporationscorporationidkillmailsrecent) | **GET** /corporations/{corporation_id}/killmails/recent/ | Get a corporation\&#39;s recent kills and losses
*KillmailsApi* | [**getKillmailsKillmailIdKillmailHash**](docs/KillmailsApi.md#getkillmailskillmailidkillmailhash) | **GET** /killmails/{killmail_id}/{killmail_hash}/ | Get a single killmail
*LocationApi* | [**getCharactersCharacterIdLocation**](docs/LocationApi.md#getcharacterscharacteridlocation) | **GET** /characters/{character_id}/location/ | Get character location
*LocationApi* | [**getCharactersCharacterIdOnline**](docs/LocationApi.md#getcharacterscharacteridonline) | **GET** /characters/{character_id}/online/ | Get character online
*LocationApi* | [**getCharactersCharacterIdShip**](docs/LocationApi.md#getcharacterscharacteridship) | **GET** /characters/{character_id}/ship/ | Get current ship
*LoyaltyApi* | [**getCharactersCharacterIdLoyaltyPoints**](docs/LoyaltyApi.md#getcharacterscharacteridloyaltypoints) | **GET** /characters/{character_id}/loyalty/points/ | Get loyalty points
*LoyaltyApi* | [**getLoyaltyStoresCorporationIdOffers**](docs/LoyaltyApi.md#getloyaltystorescorporationidoffers) | **GET** /loyalty/stores/{corporation_id}/offers/ | List loyalty store offers
*MailApi* | [**deleteCharactersCharacterIdMailLabelsLabelId**](docs/MailApi.md#deletecharacterscharacteridmaillabelslabelid) | **DELETE** /characters/{character_id}/mail/labels/{label_id}/ | Delete a mail label
*MailApi* | [**deleteCharactersCharacterIdMailMailId**](docs/MailApi.md#deletecharacterscharacteridmailmailid) | **DELETE** /characters/{character_id}/mail/{mail_id}/ | Delete a mail
*MailApi* | [**getCharactersCharacterIdMail**](docs/MailApi.md#getcharacterscharacteridmail) | **GET** /characters/{character_id}/mail/ | Return mail headers
*MailApi* | [**getCharactersCharacterIdMailLabels**](docs/MailApi.md#getcharacterscharacteridmaillabels) | **GET** /characters/{character_id}/mail/labels/ | Get mail labels and unread counts
*MailApi* | [**getCharactersCharacterIdMailLists**](docs/MailApi.md#getcharacterscharacteridmaillists) | **GET** /characters/{character_id}/mail/lists/ | Return mailing list subscriptions
*MailApi* | [**getCharactersCharacterIdMailMailId**](docs/MailApi.md#getcharacterscharacteridmailmailid) | **GET** /characters/{character_id}/mail/{mail_id}/ | Return a mail
*MailApi* | [**postCharactersCharacterIdMail**](docs/MailApi.md#postcharacterscharacteridmail) | **POST** /characters/{character_id}/mail/ | Send a new mail
*MailApi* | [**postCharactersCharacterIdMailLabels**](docs/MailApi.md#postcharacterscharacteridmaillabels) | **POST** /characters/{character_id}/mail/labels/ | Create a mail label
*MailApi* | [**putCharactersCharacterIdMailMailId**](docs/MailApi.md#putcharacterscharacteridmailmailid) | **PUT** /characters/{character_id}/mail/{mail_id}/ | Update metadata about a mail
*MarketApi* | [**getCharactersCharacterIdOrders**](docs/MarketApi.md#getcharacterscharacteridorders) | **GET** /characters/{character_id}/orders/ | List open orders from a character
*MarketApi* | [**getCharactersCharacterIdOrdersHistory**](docs/MarketApi.md#getcharacterscharacteridordershistory) | **GET** /characters/{character_id}/orders/history/ | List historical orders by a character
*MarketApi* | [**getCorporationsCorporationIdOrders**](docs/MarketApi.md#getcorporationscorporationidorders) | **GET** /corporations/{corporation_id}/orders/ | List open orders from a corporation
*MarketApi* | [**getCorporationsCorporationIdOrdersHistory**](docs/MarketApi.md#getcorporationscorporationidordershistory) | **GET** /corporations/{corporation_id}/orders/history/ | List historical orders from a corporation
*MarketApi* | [**getMarketsGroups**](docs/MarketApi.md#getmarketsgroups) | **GET** /markets/groups/ | Get item groups
*MarketApi* | [**getMarketsGroupsMarketGroupId**](docs/MarketApi.md#getmarketsgroupsmarketgroupid) | **GET** /markets/groups/{market_group_id}/ | Get item group information
*MarketApi* | [**getMarketsPrices**](docs/MarketApi.md#getmarketsprices) | **GET** /markets/prices/ | List market prices
*MarketApi* | [**getMarketsRegionIdHistory**](docs/MarketApi.md#getmarketsregionidhistory) | **GET** /markets/{region_id}/history/ | List historical market statistics in a region
*MarketApi* | [**getMarketsRegionIdOrders**](docs/MarketApi.md#getmarketsregionidorders) | **GET** /markets/{region_id}/orders/ | List orders in a region
*MarketApi* | [**getMarketsRegionIdTypes**](docs/MarketApi.md#getmarketsregionidtypes) | **GET** /markets/{region_id}/types/ | List type IDs relevant to a market
*MarketApi* | [**getMarketsStructuresStructureId**](docs/MarketApi.md#getmarketsstructuresstructureid) | **GET** /markets/structures/{structure_id}/ | List orders in a structure
*PlanetaryInteractionApi* | [**getCharactersCharacterIdPlanets**](docs/PlanetaryInteractionApi.md#getcharacterscharacteridplanets) | **GET** /characters/{character_id}/planets/ | Get colonies
*PlanetaryInteractionApi* | [**getCharactersCharacterIdPlanetsPlanetId**](docs/PlanetaryInteractionApi.md#getcharacterscharacteridplanetsplanetid) | **GET** /characters/{character_id}/planets/{planet_id}/ | Get colony layout
*PlanetaryInteractionApi* | [**getCorporationsCorporationIdCustomsOffices**](docs/PlanetaryInteractionApi.md#getcorporationscorporationidcustomsoffices) | **GET** /corporations/{corporation_id}/customs_offices/ | List corporation customs offices
*PlanetaryInteractionApi* | [**getUniverseSchematicsSchematicId**](docs/PlanetaryInteractionApi.md#getuniverseschematicsschematicid) | **GET** /universe/schematics/{schematic_id}/ | Get schematic information
*RoutesApi* | [**getRouteOriginDestination**](docs/RoutesApi.md#getrouteorigindestination) | **GET** /route/{origin}/{destination}/ | Get route
*SearchApi* | [**getCharactersCharacterIdSearch**](docs/SearchApi.md#getcharacterscharacteridsearch) | **GET** /characters/{character_id}/search/ | Search on a string
*SkillsApi* | [**getCharactersCharacterIdAttributes**](docs/SkillsApi.md#getcharacterscharacteridattributes) | **GET** /characters/{character_id}/attributes/ | Get character attributes
*SkillsApi* | [**getCharactersCharacterIdSkillqueue**](docs/SkillsApi.md#getcharacterscharacteridskillqueue) | **GET** /characters/{character_id}/skillqueue/ | Get character\&#39;s skill queue
*SkillsApi* | [**getCharactersCharacterIdSkills**](docs/SkillsApi.md#getcharacterscharacteridskills) | **GET** /characters/{character_id}/skills/ | Get character skills
*SovereigntyApi* | [**getSovereigntyCampaigns**](docs/SovereigntyApi.md#getsovereigntycampaigns) | **GET** /sovereignty/campaigns/ | List sovereignty campaigns
*SovereigntyApi* | [**getSovereigntyMap**](docs/SovereigntyApi.md#getsovereigntymap) | **GET** /sovereignty/map/ | List sovereignty of systems
*SovereigntyApi* | [**getSovereigntyStructures**](docs/SovereigntyApi.md#getsovereigntystructures) | **GET** /sovereignty/structures/ | List sovereignty structures
*StatusApi* | [**getStatus**](docs/StatusApi.md#getstatus) | **GET** /status/ | Retrieve the uptime and player counts
*UniverseApi* | [**getUniverseAncestries**](docs/UniverseApi.md#getuniverseancestries) | **GET** /universe/ancestries/ | Get ancestries
*UniverseApi* | [**getUniverseAsteroidBeltsAsteroidBeltId**](docs/UniverseApi.md#getuniverseasteroidbeltsasteroidbeltid) | **GET** /universe/asteroid_belts/{asteroid_belt_id}/ | Get asteroid belt information
*UniverseApi* | [**getUniverseBloodlines**](docs/UniverseApi.md#getuniversebloodlines) | **GET** /universe/bloodlines/ | Get bloodlines
*UniverseApi* | [**getUniverseCategories**](docs/UniverseApi.md#getuniversecategories) | **GET** /universe/categories/ | Get item categories
*UniverseApi* | [**getUniverseCategoriesCategoryId**](docs/UniverseApi.md#getuniversecategoriescategoryid) | **GET** /universe/categories/{category_id}/ | Get item category information
*UniverseApi* | [**getUniverseConstellations**](docs/UniverseApi.md#getuniverseconstellations) | **GET** /universe/constellations/ | Get constellations
*UniverseApi* | [**getUniverseConstellationsConstellationId**](docs/UniverseApi.md#getuniverseconstellationsconstellationid) | **GET** /universe/constellations/{constellation_id}/ | Get constellation information
*UniverseApi* | [**getUniverseFactions**](docs/UniverseApi.md#getuniversefactions) | **GET** /universe/factions/ | Get factions
*UniverseApi* | [**getUniverseGraphics**](docs/UniverseApi.md#getuniversegraphics) | **GET** /universe/graphics/ | Get graphics
*UniverseApi* | [**getUniverseGraphicsGraphicId**](docs/UniverseApi.md#getuniversegraphicsgraphicid) | **GET** /universe/graphics/{graphic_id}/ | Get graphic information
*UniverseApi* | [**getUniverseGroups**](docs/UniverseApi.md#getuniversegroups) | **GET** /universe/groups/ | Get item groups
*UniverseApi* | [**getUniverseGroupsGroupId**](docs/UniverseApi.md#getuniversegroupsgroupid) | **GET** /universe/groups/{group_id}/ | Get item group information
*UniverseApi* | [**getUniverseMoonsMoonId**](docs/UniverseApi.md#getuniversemoonsmoonid) | **GET** /universe/moons/{moon_id}/ | Get moon information
*UniverseApi* | [**getUniversePlanetsPlanetId**](docs/UniverseApi.md#getuniverseplanetsplanetid) | **GET** /universe/planets/{planet_id}/ | Get planet information
*UniverseApi* | [**getUniverseRaces**](docs/UniverseApi.md#getuniverseraces) | **GET** /universe/races/ | Get character races
*UniverseApi* | [**getUniverseRegions**](docs/UniverseApi.md#getuniverseregions) | **GET** /universe/regions/ | Get regions
*UniverseApi* | [**getUniverseRegionsRegionId**](docs/UniverseApi.md#getuniverseregionsregionid) | **GET** /universe/regions/{region_id}/ | Get region information
*UniverseApi* | [**getUniverseStargatesStargateId**](docs/UniverseApi.md#getuniversestargatesstargateid) | **GET** /universe/stargates/{stargate_id}/ | Get stargate information
*UniverseApi* | [**getUniverseStarsStarId**](docs/UniverseApi.md#getuniversestarsstarid) | **GET** /universe/stars/{star_id}/ | Get star information
*UniverseApi* | [**getUniverseStationsStationId**](docs/UniverseApi.md#getuniversestationsstationid) | **GET** /universe/stations/{station_id}/ | Get station information
*UniverseApi* | [**getUniverseStructures**](docs/UniverseApi.md#getuniversestructures) | **GET** /universe/structures/ | List all public structures
*UniverseApi* | [**getUniverseStructuresStructureId**](docs/UniverseApi.md#getuniversestructuresstructureid) | **GET** /universe/structures/{structure_id}/ | Get structure information
*UniverseApi* | [**getUniverseSystemJumps**](docs/UniverseApi.md#getuniversesystemjumps) | **GET** /universe/system_jumps/ | Get system jumps
*UniverseApi* | [**getUniverseSystemKills**](docs/UniverseApi.md#getuniversesystemkills) | **GET** /universe/system_kills/ | Get system kills
*UniverseApi* | [**getUniverseSystems**](docs/UniverseApi.md#getuniversesystems) | **GET** /universe/systems/ | Get solar systems
*UniverseApi* | [**getUniverseSystemsSystemId**](docs/UniverseApi.md#getuniversesystemssystemid) | **GET** /universe/systems/{system_id}/ | Get solar system information
*UniverseApi* | [**getUniverseTypes**](docs/UniverseApi.md#getuniversetypes) | **GET** /universe/types/ | Get types
*UniverseApi* | [**getUniverseTypesTypeId**](docs/UniverseApi.md#getuniversetypestypeid) | **GET** /universe/types/{type_id}/ | Get type information
*UniverseApi* | [**postUniverseIds**](docs/UniverseApi.md#postuniverseids) | **POST** /universe/ids/ | Bulk names to IDs
*UniverseApi* | [**postUniverseNames**](docs/UniverseApi.md#postuniversenames) | **POST** /universe/names/ | Get names and categories for a set of IDs
*UserInterfaceApi* | [**postUiAutopilotWaypoint**](docs/UserInterfaceApi.md#postuiautopilotwaypoint) | **POST** /ui/autopilot/waypoint/ | Set Autopilot Waypoint
*UserInterfaceApi* | [**postUiOpenwindowContract**](docs/UserInterfaceApi.md#postuiopenwindowcontract) | **POST** /ui/openwindow/contract/ | Open Contract Window
*UserInterfaceApi* | [**postUiOpenwindowInformation**](docs/UserInterfaceApi.md#postuiopenwindowinformation) | **POST** /ui/openwindow/information/ | Open Information Window
*UserInterfaceApi* | [**postUiOpenwindowMarketdetails**](docs/UserInterfaceApi.md#postuiopenwindowmarketdetails) | **POST** /ui/openwindow/marketdetails/ | Open Market Details
*UserInterfaceApi* | [**postUiOpenwindowNewmail**](docs/UserInterfaceApi.md#postuiopenwindownewmail) | **POST** /ui/openwindow/newmail/ | Open New Mail Window
*WalletApi* | [**getCharactersCharacterIdWallet**](docs/WalletApi.md#getcharacterscharacteridwallet) | **GET** /characters/{character_id}/wallet/ | Get a character\&#39;s wallet balance
*WalletApi* | [**getCharactersCharacterIdWalletJournal**](docs/WalletApi.md#getcharacterscharacteridwalletjournal) | **GET** /characters/{character_id}/wallet/journal/ | Get character wallet journal
*WalletApi* | [**getCharactersCharacterIdWalletTransactions**](docs/WalletApi.md#getcharacterscharacteridwallettransactions) | **GET** /characters/{character_id}/wallet/transactions/ | Get wallet transactions
*WalletApi* | [**getCorporationsCorporationIdWallets**](docs/WalletApi.md#getcorporationscorporationidwallets) | **GET** /corporations/{corporation_id}/wallets/ | Returns a corporation\&#39;s wallet balance
*WalletApi* | [**getCorporationsCorporationIdWalletsDivisionJournal**](docs/WalletApi.md#getcorporationscorporationidwalletsdivisionjournal) | **GET** /corporations/{corporation_id}/wallets/{division}/journal/ | Get corporation wallet journal
*WalletApi* | [**getCorporationsCorporationIdWalletsDivisionTransactions**](docs/WalletApi.md#getcorporationscorporationidwalletsdivisiontransactions) | **GET** /corporations/{corporation_id}/wallets/{division}/transactions/ | Get corporation wallet transactions
*WarsApi* | [**getWars**](docs/WarsApi.md#getwars) | **GET** /wars/ | List wars
*WarsApi* | [**getWarsWarId**](docs/WarsApi.md#getwarswarid) | **GET** /wars/{war_id}/ | Get war information
*WarsApi* | [**getWarsWarIdKillmails**](docs/WarsApi.md#getwarswaridkillmails) | **GET** /wars/{war_id}/killmails/ | List kills for a war


### Documentation For Models

 - [BadRequest](docs/BadRequest.md)
 - [DeleteCharactersCharacterIdMailLabelsLabelIdUnprocessableEntity](docs/DeleteCharactersCharacterIdMailLabelsLabelIdUnprocessableEntity.md)
 - [DeleteFleetsFleetIdMembersMemberIdNotFound](docs/DeleteFleetsFleetIdMembersMemberIdNotFound.md)
 - [DeleteFleetsFleetIdSquadsSquadIdNotFound](docs/DeleteFleetsFleetIdSquadsSquadIdNotFound.md)
 - [DeleteFleetsFleetIdWingsWingIdNotFound](docs/DeleteFleetsFleetIdWingsWingIdNotFound.md)
 - [ErrorLimited](docs/ErrorLimited.md)
 - [Forbidden](docs/Forbidden.md)
 - [GatewayTimeout](docs/GatewayTimeout.md)
 - [GetAlliancesAllianceIdContacts200Ok](docs/GetAlliancesAllianceIdContacts200Ok.md)
 - [GetAlliancesAllianceIdContactsLabels200Ok](docs/GetAlliancesAllianceIdContactsLabels200Ok.md)
 - [GetAlliancesAllianceIdIconsNotFound](docs/GetAlliancesAllianceIdIconsNotFound.md)
 - [GetAlliancesAllianceIdIconsOk](docs/GetAlliancesAllianceIdIconsOk.md)
 - [GetAlliancesAllianceIdNotFound](docs/GetAlliancesAllianceIdNotFound.md)
 - [GetAlliancesAllianceIdOk](docs/GetAlliancesAllianceIdOk.md)
 - [GetCharactersCharacterIdAgentsResearch200Ok](docs/GetCharactersCharacterIdAgentsResearch200Ok.md)
 - [GetCharactersCharacterIdAssets200Ok](docs/GetCharactersCharacterIdAssets200Ok.md)
 - [GetCharactersCharacterIdAssetsNotFound](docs/GetCharactersCharacterIdAssetsNotFound.md)
 - [GetCharactersCharacterIdAttributesOk](docs/GetCharactersCharacterIdAttributesOk.md)
 - [GetCharactersCharacterIdBlueprints200Ok](docs/GetCharactersCharacterIdBlueprints200Ok.md)
 - [GetCharactersCharacterIdCalendar200Ok](docs/GetCharactersCharacterIdCalendar200Ok.md)
 - [GetCharactersCharacterIdCalendarEventIdAttendees200Ok](docs/GetCharactersCharacterIdCalendarEventIdAttendees200Ok.md)
 - [GetCharactersCharacterIdCalendarEventIdAttendeesNotFound](docs/GetCharactersCharacterIdCalendarEventIdAttendeesNotFound.md)
 - [GetCharactersCharacterIdCalendarEventIdNotFound](docs/GetCharactersCharacterIdCalendarEventIdNotFound.md)
 - [GetCharactersCharacterIdCalendarEventIdOk](docs/GetCharactersCharacterIdCalendarEventIdOk.md)
 - [GetCharactersCharacterIdClonesHomeLocation](docs/GetCharactersCharacterIdClonesHomeLocation.md)
 - [GetCharactersCharacterIdClonesJumpClone](docs/GetCharactersCharacterIdClonesJumpClone.md)
 - [GetCharactersCharacterIdClonesOk](docs/GetCharactersCharacterIdClonesOk.md)
 - [GetCharactersCharacterIdContacts200Ok](docs/GetCharactersCharacterIdContacts200Ok.md)
 - [GetCharactersCharacterIdContactsLabels200Ok](docs/GetCharactersCharacterIdContactsLabels200Ok.md)
 - [GetCharactersCharacterIdContracts200Ok](docs/GetCharactersCharacterIdContracts200Ok.md)
 - [GetCharactersCharacterIdContractsContractIdBids200Ok](docs/GetCharactersCharacterIdContractsContractIdBids200Ok.md)
 - [GetCharactersCharacterIdContractsContractIdBidsNotFound](docs/GetCharactersCharacterIdContractsContractIdBidsNotFound.md)
 - [GetCharactersCharacterIdContractsContractIdItems200Ok](docs/GetCharactersCharacterIdContractsContractIdItems200Ok.md)
 - [GetCharactersCharacterIdContractsContractIdItemsNotFound](docs/GetCharactersCharacterIdContractsContractIdItemsNotFound.md)
 - [GetCharactersCharacterIdCorporationhistory200Ok](docs/GetCharactersCharacterIdCorporationhistory200Ok.md)
 - [GetCharactersCharacterIdFatigueOk](docs/GetCharactersCharacterIdFatigueOk.md)
 - [GetCharactersCharacterIdFittings200Ok](docs/GetCharactersCharacterIdFittings200Ok.md)
 - [GetCharactersCharacterIdFittingsItem](docs/GetCharactersCharacterIdFittingsItem.md)
 - [GetCharactersCharacterIdFleetNotFound](docs/GetCharactersCharacterIdFleetNotFound.md)
 - [GetCharactersCharacterIdFleetOk](docs/GetCharactersCharacterIdFleetOk.md)
 - [GetCharactersCharacterIdFwStatsKills](docs/GetCharactersCharacterIdFwStatsKills.md)
 - [GetCharactersCharacterIdFwStatsOk](docs/GetCharactersCharacterIdFwStatsOk.md)
 - [GetCharactersCharacterIdFwStatsVictoryPoints](docs/GetCharactersCharacterIdFwStatsVictoryPoints.md)
 - [GetCharactersCharacterIdIndustryJobs200Ok](docs/GetCharactersCharacterIdIndustryJobs200Ok.md)
 - [GetCharactersCharacterIdKillmailsRecent200Ok](docs/GetCharactersCharacterIdKillmailsRecent200Ok.md)
 - [GetCharactersCharacterIdLocationOk](docs/GetCharactersCharacterIdLocationOk.md)
 - [GetCharactersCharacterIdLoyaltyPoints200Ok](docs/GetCharactersCharacterIdLoyaltyPoints200Ok.md)
 - [GetCharactersCharacterIdMail200Ok](docs/GetCharactersCharacterIdMail200Ok.md)
 - [GetCharactersCharacterIdMailLabelsLabel](docs/GetCharactersCharacterIdMailLabelsLabel.md)
 - [GetCharactersCharacterIdMailLabelsOk](docs/GetCharactersCharacterIdMailLabelsOk.md)
 - [GetCharactersCharacterIdMailLists200Ok](docs/GetCharactersCharacterIdMailLists200Ok.md)
 - [GetCharactersCharacterIdMailMailIdNotFound](docs/GetCharactersCharacterIdMailMailIdNotFound.md)
 - [GetCharactersCharacterIdMailMailIdOk](docs/GetCharactersCharacterIdMailMailIdOk.md)
 - [GetCharactersCharacterIdMailMailIdRecipient](docs/GetCharactersCharacterIdMailMailIdRecipient.md)
 - [GetCharactersCharacterIdMailRecipient](docs/GetCharactersCharacterIdMailRecipient.md)
 - [GetCharactersCharacterIdMedals200Ok](docs/GetCharactersCharacterIdMedals200Ok.md)
 - [GetCharactersCharacterIdMedalsGraphic](docs/GetCharactersCharacterIdMedalsGraphic.md)
 - [GetCharactersCharacterIdMining200Ok](docs/GetCharactersCharacterIdMining200Ok.md)
 - [GetCharactersCharacterIdNotFound](docs/GetCharactersCharacterIdNotFound.md)
 - [GetCharactersCharacterIdNotifications200Ok](docs/GetCharactersCharacterIdNotifications200Ok.md)
 - [GetCharactersCharacterIdNotificationsContacts200Ok](docs/GetCharactersCharacterIdNotificationsContacts200Ok.md)
 - [GetCharactersCharacterIdOk](docs/GetCharactersCharacterIdOk.md)
 - [GetCharactersCharacterIdOnlineOk](docs/GetCharactersCharacterIdOnlineOk.md)
 - [GetCharactersCharacterIdOrders200Ok](docs/GetCharactersCharacterIdOrders200Ok.md)
 - [GetCharactersCharacterIdOrdersHistory200Ok](docs/GetCharactersCharacterIdOrdersHistory200Ok.md)
 - [GetCharactersCharacterIdPlanets200Ok](docs/GetCharactersCharacterIdPlanets200Ok.md)
 - [GetCharactersCharacterIdPlanetsPlanetIdContent](docs/GetCharactersCharacterIdPlanetsPlanetIdContent.md)
 - [GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails](docs/GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails.md)
 - [GetCharactersCharacterIdPlanetsPlanetIdFactoryDetails](docs/GetCharactersCharacterIdPlanetsPlanetIdFactoryDetails.md)
 - [GetCharactersCharacterIdPlanetsPlanetIdHead](docs/GetCharactersCharacterIdPlanetsPlanetIdHead.md)
 - [GetCharactersCharacterIdPlanetsPlanetIdLink](docs/GetCharactersCharacterIdPlanetsPlanetIdLink.md)
 - [GetCharactersCharacterIdPlanetsPlanetIdNotFound](docs/GetCharactersCharacterIdPlanetsPlanetIdNotFound.md)
 - [GetCharactersCharacterIdPlanetsPlanetIdOk](docs/GetCharactersCharacterIdPlanetsPlanetIdOk.md)
 - [GetCharactersCharacterIdPlanetsPlanetIdPin](docs/GetCharactersCharacterIdPlanetsPlanetIdPin.md)
 - [GetCharactersCharacterIdPlanetsPlanetIdRoute](docs/GetCharactersCharacterIdPlanetsPlanetIdRoute.md)
 - [GetCharactersCharacterIdPortraitNotFound](docs/GetCharactersCharacterIdPortraitNotFound.md)
 - [GetCharactersCharacterIdPortraitOk](docs/GetCharactersCharacterIdPortraitOk.md)
 - [GetCharactersCharacterIdRolesOk](docs/GetCharactersCharacterIdRolesOk.md)
 - [GetCharactersCharacterIdSearchOk](docs/GetCharactersCharacterIdSearchOk.md)
 - [GetCharactersCharacterIdShipOk](docs/GetCharactersCharacterIdShipOk.md)
 - [GetCharactersCharacterIdSkillqueue200Ok](docs/GetCharactersCharacterIdSkillqueue200Ok.md)
 - [GetCharactersCharacterIdSkillsOk](docs/GetCharactersCharacterIdSkillsOk.md)
 - [GetCharactersCharacterIdSkillsSkill](docs/GetCharactersCharacterIdSkillsSkill.md)
 - [GetCharactersCharacterIdStandings200Ok](docs/GetCharactersCharacterIdStandings200Ok.md)
 - [GetCharactersCharacterIdTitles200Ok](docs/GetCharactersCharacterIdTitles200Ok.md)
 - [GetCharactersCharacterIdWalletJournal200Ok](docs/GetCharactersCharacterIdWalletJournal200Ok.md)
 - [GetCharactersCharacterIdWalletTransactions200Ok](docs/GetCharactersCharacterIdWalletTransactions200Ok.md)
 - [GetContractsPublicBidsContractId200Ok](docs/GetContractsPublicBidsContractId200Ok.md)
 - [GetContractsPublicBidsContractIdForbidden](docs/GetContractsPublicBidsContractIdForbidden.md)
 - [GetContractsPublicBidsContractIdNotFound](docs/GetContractsPublicBidsContractIdNotFound.md)
 - [GetContractsPublicItemsContractId200Ok](docs/GetContractsPublicItemsContractId200Ok.md)
 - [GetContractsPublicItemsContractIdForbidden](docs/GetContractsPublicItemsContractIdForbidden.md)
 - [GetContractsPublicItemsContractIdNotFound](docs/GetContractsPublicItemsContractIdNotFound.md)
 - [GetContractsPublicRegionId200Ok](docs/GetContractsPublicRegionId200Ok.md)
 - [GetContractsPublicRegionIdNotFound](docs/GetContractsPublicRegionIdNotFound.md)
 - [GetCorporationCorporationIdMiningExtractions200Ok](docs/GetCorporationCorporationIdMiningExtractions200Ok.md)
 - [GetCorporationCorporationIdMiningObservers200Ok](docs/GetCorporationCorporationIdMiningObservers200Ok.md)
 - [GetCorporationCorporationIdMiningObserversObserverId200Ok](docs/GetCorporationCorporationIdMiningObserversObserverId200Ok.md)
 - [GetCorporationsCorporationIdAlliancehistory200Ok](docs/GetCorporationsCorporationIdAlliancehistory200Ok.md)
 - [GetCorporationsCorporationIdAssets200Ok](docs/GetCorporationsCorporationIdAssets200Ok.md)
 - [GetCorporationsCorporationIdBlueprints200Ok](docs/GetCorporationsCorporationIdBlueprints200Ok.md)
 - [GetCorporationsCorporationIdContacts200Ok](docs/GetCorporationsCorporationIdContacts200Ok.md)
 - [GetCorporationsCorporationIdContactsLabels200Ok](docs/GetCorporationsCorporationIdContactsLabels200Ok.md)
 - [GetCorporationsCorporationIdContainersLogs200Ok](docs/GetCorporationsCorporationIdContainersLogs200Ok.md)
 - [GetCorporationsCorporationIdContracts200Ok](docs/GetCorporationsCorporationIdContracts200Ok.md)
 - [GetCorporationsCorporationIdContractsContractIdBids200Ok](docs/GetCorporationsCorporationIdContractsContractIdBids200Ok.md)
 - [GetCorporationsCorporationIdContractsContractIdBidsNotFound](docs/GetCorporationsCorporationIdContractsContractIdBidsNotFound.md)
 - [GetCorporationsCorporationIdContractsContractIdItems200Ok](docs/GetCorporationsCorporationIdContractsContractIdItems200Ok.md)
 - [GetCorporationsCorporationIdContractsContractIdItemsError520](docs/GetCorporationsCorporationIdContractsContractIdItemsError520.md)
 - [GetCorporationsCorporationIdContractsContractIdItemsNotFound](docs/GetCorporationsCorporationIdContractsContractIdItemsNotFound.md)
 - [GetCorporationsCorporationIdCustomsOffices200Ok](docs/GetCorporationsCorporationIdCustomsOffices200Ok.md)
 - [GetCorporationsCorporationIdDivisionsHangarHangar](docs/GetCorporationsCorporationIdDivisionsHangarHangar.md)
 - [GetCorporationsCorporationIdDivisionsOk](docs/GetCorporationsCorporationIdDivisionsOk.md)
 - [GetCorporationsCorporationIdDivisionsWalletWallet](docs/GetCorporationsCorporationIdDivisionsWalletWallet.md)
 - [GetCorporationsCorporationIdFacilities200Ok](docs/GetCorporationsCorporationIdFacilities200Ok.md)
 - [GetCorporationsCorporationIdFwStatsKills](docs/GetCorporationsCorporationIdFwStatsKills.md)
 - [GetCorporationsCorporationIdFwStatsOk](docs/GetCorporationsCorporationIdFwStatsOk.md)
 - [GetCorporationsCorporationIdFwStatsVictoryPoints](docs/GetCorporationsCorporationIdFwStatsVictoryPoints.md)
 - [GetCorporationsCorporationIdIconsNotFound](docs/GetCorporationsCorporationIdIconsNotFound.md)
 - [GetCorporationsCorporationIdIconsOk](docs/GetCorporationsCorporationIdIconsOk.md)
 - [GetCorporationsCorporationIdIndustryJobs200Ok](docs/GetCorporationsCorporationIdIndustryJobs200Ok.md)
 - [GetCorporationsCorporationIdKillmailsRecent200Ok](docs/GetCorporationsCorporationIdKillmailsRecent200Ok.md)
 - [GetCorporationsCorporationIdMedals200Ok](docs/GetCorporationsCorporationIdMedals200Ok.md)
 - [GetCorporationsCorporationIdMedalsIssued200Ok](docs/GetCorporationsCorporationIdMedalsIssued200Ok.md)
 - [GetCorporationsCorporationIdMembersTitles200Ok](docs/GetCorporationsCorporationIdMembersTitles200Ok.md)
 - [GetCorporationsCorporationIdMembertracking200Ok](docs/GetCorporationsCorporationIdMembertracking200Ok.md)
 - [GetCorporationsCorporationIdNotFound](docs/GetCorporationsCorporationIdNotFound.md)
 - [GetCorporationsCorporationIdOk](docs/GetCorporationsCorporationIdOk.md)
 - [GetCorporationsCorporationIdOrders200Ok](docs/GetCorporationsCorporationIdOrders200Ok.md)
 - [GetCorporationsCorporationIdOrdersHistory200Ok](docs/GetCorporationsCorporationIdOrdersHistory200Ok.md)
 - [GetCorporationsCorporationIdRoles200Ok](docs/GetCorporationsCorporationIdRoles200Ok.md)
 - [GetCorporationsCorporationIdRolesHistory200Ok](docs/GetCorporationsCorporationIdRolesHistory200Ok.md)
 - [GetCorporationsCorporationIdShareholders200Ok](docs/GetCorporationsCorporationIdShareholders200Ok.md)
 - [GetCorporationsCorporationIdStandings200Ok](docs/GetCorporationsCorporationIdStandings200Ok.md)
 - [GetCorporationsCorporationIdStarbases200Ok](docs/GetCorporationsCorporationIdStarbases200Ok.md)
 - [GetCorporationsCorporationIdStarbasesStarbaseIdFuel](docs/GetCorporationsCorporationIdStarbasesStarbaseIdFuel.md)
 - [GetCorporationsCorporationIdStarbasesStarbaseIdOk](docs/GetCorporationsCorporationIdStarbasesStarbaseIdOk.md)
 - [GetCorporationsCorporationIdStructures200Ok](docs/GetCorporationsCorporationIdStructures200Ok.md)
 - [GetCorporationsCorporationIdStructuresService](docs/GetCorporationsCorporationIdStructuresService.md)
 - [GetCorporationsCorporationIdTitles200Ok](docs/GetCorporationsCorporationIdTitles200Ok.md)
 - [GetCorporationsCorporationIdWallets200Ok](docs/GetCorporationsCorporationIdWallets200Ok.md)
 - [GetCorporationsCorporationIdWalletsDivisionJournal200Ok](docs/GetCorporationsCorporationIdWalletsDivisionJournal200Ok.md)
 - [GetCorporationsCorporationIdWalletsDivisionTransactions200Ok](docs/GetCorporationsCorporationIdWalletsDivisionTransactions200Ok.md)
 - [GetDogmaAttributesAttributeIdNotFound](docs/GetDogmaAttributesAttributeIdNotFound.md)
 - [GetDogmaAttributesAttributeIdOk](docs/GetDogmaAttributesAttributeIdOk.md)
 - [GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute](docs/GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute.md)
 - [GetDogmaDynamicItemsTypeIdItemIdDogmaEffect](docs/GetDogmaDynamicItemsTypeIdItemIdDogmaEffect.md)
 - [GetDogmaDynamicItemsTypeIdItemIdNotFound](docs/GetDogmaDynamicItemsTypeIdItemIdNotFound.md)
 - [GetDogmaDynamicItemsTypeIdItemIdOk](docs/GetDogmaDynamicItemsTypeIdItemIdOk.md)
 - [GetDogmaEffectsEffectIdModifier](docs/GetDogmaEffectsEffectIdModifier.md)
 - [GetDogmaEffectsEffectIdNotFound](docs/GetDogmaEffectsEffectIdNotFound.md)
 - [GetDogmaEffectsEffectIdOk](docs/GetDogmaEffectsEffectIdOk.md)
 - [GetFleetsFleetIdMembers200Ok](docs/GetFleetsFleetIdMembers200Ok.md)
 - [GetFleetsFleetIdMembersNotFound](docs/GetFleetsFleetIdMembersNotFound.md)
 - [GetFleetsFleetIdNotFound](docs/GetFleetsFleetIdNotFound.md)
 - [GetFleetsFleetIdOk](docs/GetFleetsFleetIdOk.md)
 - [GetFleetsFleetIdWings200Ok](docs/GetFleetsFleetIdWings200Ok.md)
 - [GetFleetsFleetIdWingsNotFound](docs/GetFleetsFleetIdWingsNotFound.md)
 - [GetFleetsFleetIdWingsSquad](docs/GetFleetsFleetIdWingsSquad.md)
 - [GetFwLeaderboardsActiveTotalActiveTotal](docs/GetFwLeaderboardsActiveTotalActiveTotal.md)
 - [GetFwLeaderboardsActiveTotalActiveTotal1](docs/GetFwLeaderboardsActiveTotalActiveTotal1.md)
 - [GetFwLeaderboardsCharactersActiveTotalActiveTotal](docs/GetFwLeaderboardsCharactersActiveTotalActiveTotal.md)
 - [GetFwLeaderboardsCharactersActiveTotalActiveTotal1](docs/GetFwLeaderboardsCharactersActiveTotalActiveTotal1.md)
 - [GetFwLeaderboardsCharactersKills](docs/GetFwLeaderboardsCharactersKills.md)
 - [GetFwLeaderboardsCharactersLastWeekLastWeek](docs/GetFwLeaderboardsCharactersLastWeekLastWeek.md)
 - [GetFwLeaderboardsCharactersLastWeekLastWeek1](docs/GetFwLeaderboardsCharactersLastWeekLastWeek1.md)
 - [GetFwLeaderboardsCharactersOk](docs/GetFwLeaderboardsCharactersOk.md)
 - [GetFwLeaderboardsCharactersVictoryPoints](docs/GetFwLeaderboardsCharactersVictoryPoints.md)
 - [GetFwLeaderboardsCharactersYesterdayYesterday](docs/GetFwLeaderboardsCharactersYesterdayYesterday.md)
 - [GetFwLeaderboardsCharactersYesterdayYesterday1](docs/GetFwLeaderboardsCharactersYesterdayYesterday1.md)
 - [GetFwLeaderboardsCorporationsActiveTotalActiveTotal](docs/GetFwLeaderboardsCorporationsActiveTotalActiveTotal.md)
 - [GetFwLeaderboardsCorporationsActiveTotalActiveTotal1](docs/GetFwLeaderboardsCorporationsActiveTotalActiveTotal1.md)
 - [GetFwLeaderboardsCorporationsKills](docs/GetFwLeaderboardsCorporationsKills.md)
 - [GetFwLeaderboardsCorporationsLastWeekLastWeek](docs/GetFwLeaderboardsCorporationsLastWeekLastWeek.md)
 - [GetFwLeaderboardsCorporationsLastWeekLastWeek1](docs/GetFwLeaderboardsCorporationsLastWeekLastWeek1.md)
 - [GetFwLeaderboardsCorporationsOk](docs/GetFwLeaderboardsCorporationsOk.md)
 - [GetFwLeaderboardsCorporationsVictoryPoints](docs/GetFwLeaderboardsCorporationsVictoryPoints.md)
 - [GetFwLeaderboardsCorporationsYesterdayYesterday](docs/GetFwLeaderboardsCorporationsYesterdayYesterday.md)
 - [GetFwLeaderboardsCorporationsYesterdayYesterday1](docs/GetFwLeaderboardsCorporationsYesterdayYesterday1.md)
 - [GetFwLeaderboardsKills](docs/GetFwLeaderboardsKills.md)
 - [GetFwLeaderboardsLastWeekLastWeek](docs/GetFwLeaderboardsLastWeekLastWeek.md)
 - [GetFwLeaderboardsLastWeekLastWeek1](docs/GetFwLeaderboardsLastWeekLastWeek1.md)
 - [GetFwLeaderboardsOk](docs/GetFwLeaderboardsOk.md)
 - [GetFwLeaderboardsVictoryPoints](docs/GetFwLeaderboardsVictoryPoints.md)
 - [GetFwLeaderboardsYesterdayYesterday](docs/GetFwLeaderboardsYesterdayYesterday.md)
 - [GetFwLeaderboardsYesterdayYesterday1](docs/GetFwLeaderboardsYesterdayYesterday1.md)
 - [GetFwStats200Ok](docs/GetFwStats200Ok.md)
 - [GetFwStatsKills](docs/GetFwStatsKills.md)
 - [GetFwStatsVictoryPoints](docs/GetFwStatsVictoryPoints.md)
 - [GetFwSystems200Ok](docs/GetFwSystems200Ok.md)
 - [GetFwWars200Ok](docs/GetFwWars200Ok.md)
 - [GetIncursions200Ok](docs/GetIncursions200Ok.md)
 - [GetIndustryFacilities200Ok](docs/GetIndustryFacilities200Ok.md)
 - [GetIndustrySystems200Ok](docs/GetIndustrySystems200Ok.md)
 - [GetIndustrySystemsCostIndice](docs/GetIndustrySystemsCostIndice.md)
 - [GetInsurancePrices200Ok](docs/GetInsurancePrices200Ok.md)
 - [GetInsurancePricesLevel](docs/GetInsurancePricesLevel.md)
 - [GetKillmailsKillmailIdKillmailHashAttacker](docs/GetKillmailsKillmailIdKillmailHashAttacker.md)
 - [GetKillmailsKillmailIdKillmailHashItem](docs/GetKillmailsKillmailIdKillmailHashItem.md)
 - [GetKillmailsKillmailIdKillmailHashItemsItem](docs/GetKillmailsKillmailIdKillmailHashItemsItem.md)
 - [GetKillmailsKillmailIdKillmailHashOk](docs/GetKillmailsKillmailIdKillmailHashOk.md)
 - [GetKillmailsKillmailIdKillmailHashPosition](docs/GetKillmailsKillmailIdKillmailHashPosition.md)
 - [GetKillmailsKillmailIdKillmailHashUnprocessableEntity](docs/GetKillmailsKillmailIdKillmailHashUnprocessableEntity.md)
 - [GetKillmailsKillmailIdKillmailHashVictim](docs/GetKillmailsKillmailIdKillmailHashVictim.md)
 - [GetLoyaltyStoresCorporationIdOffers200Ok](docs/GetLoyaltyStoresCorporationIdOffers200Ok.md)
 - [GetLoyaltyStoresCorporationIdOffersNotFound](docs/GetLoyaltyStoresCorporationIdOffersNotFound.md)
 - [GetLoyaltyStoresCorporationIdOffersRequiredItem](docs/GetLoyaltyStoresCorporationIdOffersRequiredItem.md)
 - [GetMarketsGroupsMarketGroupIdNotFound](docs/GetMarketsGroupsMarketGroupIdNotFound.md)
 - [GetMarketsGroupsMarketGroupIdOk](docs/GetMarketsGroupsMarketGroupIdOk.md)
 - [GetMarketsPrices200Ok](docs/GetMarketsPrices200Ok.md)
 - [GetMarketsRegionIdHistory200Ok](docs/GetMarketsRegionIdHistory200Ok.md)
 - [GetMarketsRegionIdHistoryError520](docs/GetMarketsRegionIdHistoryError520.md)
 - [GetMarketsRegionIdHistoryNotFound](docs/GetMarketsRegionIdHistoryNotFound.md)
 - [GetMarketsRegionIdHistoryUnprocessableEntity](docs/GetMarketsRegionIdHistoryUnprocessableEntity.md)
 - [GetMarketsRegionIdOrders200Ok](docs/GetMarketsRegionIdOrders200Ok.md)
 - [GetMarketsRegionIdOrdersNotFound](docs/GetMarketsRegionIdOrdersNotFound.md)
 - [GetMarketsRegionIdOrdersUnprocessableEntity](docs/GetMarketsRegionIdOrdersUnprocessableEntity.md)
 - [GetMarketsRegionIdTypesNotFound](docs/GetMarketsRegionIdTypesNotFound.md)
 - [GetMarketsStructuresStructureId200Ok](docs/GetMarketsStructuresStructureId200Ok.md)
 - [GetRouteOriginDestinationNotFound](docs/GetRouteOriginDestinationNotFound.md)
 - [GetSovereigntyCampaigns200Ok](docs/GetSovereigntyCampaigns200Ok.md)
 - [GetSovereigntyCampaignsParticipant](docs/GetSovereigntyCampaignsParticipant.md)
 - [GetSovereigntyMap200Ok](docs/GetSovereigntyMap200Ok.md)
 - [GetSovereigntyStructures200Ok](docs/GetSovereigntyStructures200Ok.md)
 - [GetStatusOk](docs/GetStatusOk.md)
 - [GetUniverseAncestries200Ok](docs/GetUniverseAncestries200Ok.md)
 - [GetUniverseAsteroidBeltsAsteroidBeltIdNotFound](docs/GetUniverseAsteroidBeltsAsteroidBeltIdNotFound.md)
 - [GetUniverseAsteroidBeltsAsteroidBeltIdOk](docs/GetUniverseAsteroidBeltsAsteroidBeltIdOk.md)
 - [GetUniverseAsteroidBeltsAsteroidBeltIdPosition](docs/GetUniverseAsteroidBeltsAsteroidBeltIdPosition.md)
 - [GetUniverseBloodlines200Ok](docs/GetUniverseBloodlines200Ok.md)
 - [GetUniverseCategoriesCategoryIdNotFound](docs/GetUniverseCategoriesCategoryIdNotFound.md)
 - [GetUniverseCategoriesCategoryIdOk](docs/GetUniverseCategoriesCategoryIdOk.md)
 - [GetUniverseConstellationsConstellationIdNotFound](docs/GetUniverseConstellationsConstellationIdNotFound.md)
 - [GetUniverseConstellationsConstellationIdOk](docs/GetUniverseConstellationsConstellationIdOk.md)
 - [GetUniverseConstellationsConstellationIdPosition](docs/GetUniverseConstellationsConstellationIdPosition.md)
 - [GetUniverseFactions200Ok](docs/GetUniverseFactions200Ok.md)
 - [GetUniverseGraphicsGraphicIdNotFound](docs/GetUniverseGraphicsGraphicIdNotFound.md)
 - [GetUniverseGraphicsGraphicIdOk](docs/GetUniverseGraphicsGraphicIdOk.md)
 - [GetUniverseGroupsGroupIdNotFound](docs/GetUniverseGroupsGroupIdNotFound.md)
 - [GetUniverseGroupsGroupIdOk](docs/GetUniverseGroupsGroupIdOk.md)
 - [GetUniverseMoonsMoonIdNotFound](docs/GetUniverseMoonsMoonIdNotFound.md)
 - [GetUniverseMoonsMoonIdOk](docs/GetUniverseMoonsMoonIdOk.md)
 - [GetUniverseMoonsMoonIdPosition](docs/GetUniverseMoonsMoonIdPosition.md)
 - [GetUniversePlanetsPlanetIdNotFound](docs/GetUniversePlanetsPlanetIdNotFound.md)
 - [GetUniversePlanetsPlanetIdOk](docs/GetUniversePlanetsPlanetIdOk.md)
 - [GetUniversePlanetsPlanetIdPosition](docs/GetUniversePlanetsPlanetIdPosition.md)
 - [GetUniverseRaces200Ok](docs/GetUniverseRaces200Ok.md)
 - [GetUniverseRegionsRegionIdNotFound](docs/GetUniverseRegionsRegionIdNotFound.md)
 - [GetUniverseRegionsRegionIdOk](docs/GetUniverseRegionsRegionIdOk.md)
 - [GetUniverseSchematicsSchematicIdNotFound](docs/GetUniverseSchematicsSchematicIdNotFound.md)
 - [GetUniverseSchematicsSchematicIdOk](docs/GetUniverseSchematicsSchematicIdOk.md)
 - [GetUniverseStargatesStargateIdDestination](docs/GetUniverseStargatesStargateIdDestination.md)
 - [GetUniverseStargatesStargateIdNotFound](docs/GetUniverseStargatesStargateIdNotFound.md)
 - [GetUniverseStargatesStargateIdOk](docs/GetUniverseStargatesStargateIdOk.md)
 - [GetUniverseStargatesStargateIdPosition](docs/GetUniverseStargatesStargateIdPosition.md)
 - [GetUniverseStarsStarIdOk](docs/GetUniverseStarsStarIdOk.md)
 - [GetUniverseStationsStationIdNotFound](docs/GetUniverseStationsStationIdNotFound.md)
 - [GetUniverseStationsStationIdOk](docs/GetUniverseStationsStationIdOk.md)
 - [GetUniverseStationsStationIdPosition](docs/GetUniverseStationsStationIdPosition.md)
 - [GetUniverseStructuresStructureIdNotFound](docs/GetUniverseStructuresStructureIdNotFound.md)
 - [GetUniverseStructuresStructureIdOk](docs/GetUniverseStructuresStructureIdOk.md)
 - [GetUniverseStructuresStructureIdPosition](docs/GetUniverseStructuresStructureIdPosition.md)
 - [GetUniverseSystemJumps200Ok](docs/GetUniverseSystemJumps200Ok.md)
 - [GetUniverseSystemKills200Ok](docs/GetUniverseSystemKills200Ok.md)
 - [GetUniverseSystemsSystemIdNotFound](docs/GetUniverseSystemsSystemIdNotFound.md)
 - [GetUniverseSystemsSystemIdOk](docs/GetUniverseSystemsSystemIdOk.md)
 - [GetUniverseSystemsSystemIdPlanet](docs/GetUniverseSystemsSystemIdPlanet.md)
 - [GetUniverseSystemsSystemIdPosition](docs/GetUniverseSystemsSystemIdPosition.md)
 - [GetUniverseTypesTypeIdDogmaAttribute](docs/GetUniverseTypesTypeIdDogmaAttribute.md)
 - [GetUniverseTypesTypeIdDogmaEffect](docs/GetUniverseTypesTypeIdDogmaEffect.md)
 - [GetUniverseTypesTypeIdNotFound](docs/GetUniverseTypesTypeIdNotFound.md)
 - [GetUniverseTypesTypeIdOk](docs/GetUniverseTypesTypeIdOk.md)
 - [GetWarsWarIdAggressor](docs/GetWarsWarIdAggressor.md)
 - [GetWarsWarIdAlly](docs/GetWarsWarIdAlly.md)
 - [GetWarsWarIdDefender](docs/GetWarsWarIdDefender.md)
 - [GetWarsWarIdKillmails200Ok](docs/GetWarsWarIdKillmails200Ok.md)
 - [GetWarsWarIdKillmailsUnprocessableEntity](docs/GetWarsWarIdKillmailsUnprocessableEntity.md)
 - [GetWarsWarIdOk](docs/GetWarsWarIdOk.md)
 - [GetWarsWarIdUnprocessableEntity](docs/GetWarsWarIdUnprocessableEntity.md)
 - [InternalServerError](docs/InternalServerError.md)
 - [PostCharactersAffiliation200Ok](docs/PostCharactersAffiliation200Ok.md)
 - [PostCharactersCharacterIdAssetsLocations200Ok](docs/PostCharactersCharacterIdAssetsLocations200Ok.md)
 - [PostCharactersCharacterIdAssetsLocationsPosition](docs/PostCharactersCharacterIdAssetsLocationsPosition.md)
 - [PostCharactersCharacterIdAssetsNames200Ok](docs/PostCharactersCharacterIdAssetsNames200Ok.md)
 - [PostCharactersCharacterIdContactsError520](docs/PostCharactersCharacterIdContactsError520.md)
 - [PostCharactersCharacterIdFittingsCreated](docs/PostCharactersCharacterIdFittingsCreated.md)
 - [PostCharactersCharacterIdFittingsFitting](docs/PostCharactersCharacterIdFittingsFitting.md)
 - [PostCharactersCharacterIdFittingsItem](docs/PostCharactersCharacterIdFittingsItem.md)
 - [PostCharactersCharacterIdMailError520](docs/PostCharactersCharacterIdMailError520.md)
 - [PostCharactersCharacterIdMailLabelsLabel](docs/PostCharactersCharacterIdMailLabelsLabel.md)
 - [PostCharactersCharacterIdMailMail](docs/PostCharactersCharacterIdMailMail.md)
 - [PostCharactersCharacterIdMailRecipient](docs/PostCharactersCharacterIdMailRecipient.md)
 - [PostCorporationsCorporationIdAssetsLocations200Ok](docs/PostCorporationsCorporationIdAssetsLocations200Ok.md)
 - [PostCorporationsCorporationIdAssetsLocationsNotFound](docs/PostCorporationsCorporationIdAssetsLocationsNotFound.md)
 - [PostCorporationsCorporationIdAssetsLocationsPosition](docs/PostCorporationsCorporationIdAssetsLocationsPosition.md)
 - [PostCorporationsCorporationIdAssetsNames200Ok](docs/PostCorporationsCorporationIdAssetsNames200Ok.md)
 - [PostCorporationsCorporationIdAssetsNamesNotFound](docs/PostCorporationsCorporationIdAssetsNamesNotFound.md)
 - [PostFleetsFleetIdMembersInvitation](docs/PostFleetsFleetIdMembersInvitation.md)
 - [PostFleetsFleetIdMembersNotFound](docs/PostFleetsFleetIdMembersNotFound.md)
 - [PostFleetsFleetIdMembersUnprocessableEntity](docs/PostFleetsFleetIdMembersUnprocessableEntity.md)
 - [PostFleetsFleetIdWingsCreated](docs/PostFleetsFleetIdWingsCreated.md)
 - [PostFleetsFleetIdWingsNotFound](docs/PostFleetsFleetIdWingsNotFound.md)
 - [PostFleetsFleetIdWingsWingIdSquadsCreated](docs/PostFleetsFleetIdWingsWingIdSquadsCreated.md)
 - [PostFleetsFleetIdWingsWingIdSquadsNotFound](docs/PostFleetsFleetIdWingsWingIdSquadsNotFound.md)
 - [PostUiOpenwindowNewmailNewMail](docs/PostUiOpenwindowNewmailNewMail.md)
 - [PostUiOpenwindowNewmailUnprocessableEntity](docs/PostUiOpenwindowNewmailUnprocessableEntity.md)
 - [PostUniverseIdsAgent](docs/PostUniverseIdsAgent.md)
 - [PostUniverseIdsAlliance](docs/PostUniverseIdsAlliance.md)
 - [PostUniverseIdsCharacter](docs/PostUniverseIdsCharacter.md)
 - [PostUniverseIdsConstellation](docs/PostUniverseIdsConstellation.md)
 - [PostUniverseIdsCorporation](docs/PostUniverseIdsCorporation.md)
 - [PostUniverseIdsFaction](docs/PostUniverseIdsFaction.md)
 - [PostUniverseIdsInventoryType](docs/PostUniverseIdsInventoryType.md)
 - [PostUniverseIdsOk](docs/PostUniverseIdsOk.md)
 - [PostUniverseIdsRegion](docs/PostUniverseIdsRegion.md)
 - [PostUniverseIdsStation](docs/PostUniverseIdsStation.md)
 - [PostUniverseIdsSystem](docs/PostUniverseIdsSystem.md)
 - [PostUniverseNames200Ok](docs/PostUniverseNames200Ok.md)
 - [PostUniverseNamesNotFound](docs/PostUniverseNamesNotFound.md)
 - [PutCharactersCharacterIdCalendarEventIdResponse](docs/PutCharactersCharacterIdCalendarEventIdResponse.md)
 - [PutCharactersCharacterIdMailMailIdContents](docs/PutCharactersCharacterIdMailMailIdContents.md)
 - [PutFleetsFleetIdMembersMemberIdMovement](docs/PutFleetsFleetIdMembersMemberIdMovement.md)
 - [PutFleetsFleetIdMembersMemberIdNotFound](docs/PutFleetsFleetIdMembersMemberIdNotFound.md)
 - [PutFleetsFleetIdMembersMemberIdUnprocessableEntity](docs/PutFleetsFleetIdMembersMemberIdUnprocessableEntity.md)
 - [PutFleetsFleetIdNewSettings](docs/PutFleetsFleetIdNewSettings.md)
 - [PutFleetsFleetIdNotFound](docs/PutFleetsFleetIdNotFound.md)
 - [PutFleetsFleetIdSquadsSquadIdNaming](docs/PutFleetsFleetIdSquadsSquadIdNaming.md)
 - [PutFleetsFleetIdSquadsSquadIdNotFound](docs/PutFleetsFleetIdSquadsSquadIdNotFound.md)
 - [PutFleetsFleetIdWingsWingIdNaming](docs/PutFleetsFleetIdWingsWingIdNaming.md)
 - [PutFleetsFleetIdWingsWingIdNotFound](docs/PutFleetsFleetIdWingsWingIdNotFound.md)
 - [ServiceUnavailable](docs/ServiceUnavailable.md)
 - [Unauthorized](docs/Unauthorized.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="evesso"></a>
### evesso

- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: https://login.eveonline.com/v2/oauth/authorize
- **Scopes**: 
 - **esi-alliances.read_contacts.v1**: EVE SSO scope esi-alliances.read_contacts.v1
 - **esi-assets.read_assets.v1**: EVE SSO scope esi-assets.read_assets.v1
 - **esi-assets.read_corporation_assets.v1**: EVE SSO scope esi-assets.read_corporation_assets.v1
 - **esi-calendar.read_calendar_events.v1**: EVE SSO scope esi-calendar.read_calendar_events.v1
 - **esi-calendar.respond_calendar_events.v1**: EVE SSO scope esi-calendar.respond_calendar_events.v1
 - **esi-characters.read_agents_research.v1**: EVE SSO scope esi-characters.read_agents_research.v1
 - **esi-characters.read_blueprints.v1**: EVE SSO scope esi-characters.read_blueprints.v1
 - **esi-characters.read_contacts.v1**: EVE SSO scope esi-characters.read_contacts.v1
 - **esi-characters.read_corporation_roles.v1**: EVE SSO scope esi-characters.read_corporation_roles.v1
 - **esi-characters.read_fatigue.v1**: EVE SSO scope esi-characters.read_fatigue.v1
 - **esi-characters.read_fw_stats.v1**: EVE SSO scope esi-characters.read_fw_stats.v1
 - **esi-characters.read_loyalty.v1**: EVE SSO scope esi-characters.read_loyalty.v1
 - **esi-characters.read_medals.v1**: EVE SSO scope esi-characters.read_medals.v1
 - **esi-characters.read_notifications.v1**: EVE SSO scope esi-characters.read_notifications.v1
 - **esi-characters.read_standings.v1**: EVE SSO scope esi-characters.read_standings.v1
 - **esi-characters.read_titles.v1**: EVE SSO scope esi-characters.read_titles.v1
 - **esi-characters.write_contacts.v1**: EVE SSO scope esi-characters.write_contacts.v1
 - **esi-clones.read_clones.v1**: EVE SSO scope esi-clones.read_clones.v1
 - **esi-clones.read_implants.v1**: EVE SSO scope esi-clones.read_implants.v1
 - **esi-contracts.read_character_contracts.v1**: EVE SSO scope esi-contracts.read_character_contracts.v1
 - **esi-contracts.read_corporation_contracts.v1**: EVE SSO scope esi-contracts.read_corporation_contracts.v1
 - **esi-corporations.read_blueprints.v1**: EVE SSO scope esi-corporations.read_blueprints.v1
 - **esi-corporations.read_contacts.v1**: EVE SSO scope esi-corporations.read_contacts.v1
 - **esi-corporations.read_container_logs.v1**: EVE SSO scope esi-corporations.read_container_logs.v1
 - **esi-corporations.read_corporation_membership.v1**: EVE SSO scope esi-corporations.read_corporation_membership.v1
 - **esi-corporations.read_divisions.v1**: EVE SSO scope esi-corporations.read_divisions.v1
 - **esi-corporations.read_facilities.v1**: EVE SSO scope esi-corporations.read_facilities.v1
 - **esi-corporations.read_fw_stats.v1**: EVE SSO scope esi-corporations.read_fw_stats.v1
 - **esi-corporations.read_medals.v1**: EVE SSO scope esi-corporations.read_medals.v1
 - **esi-corporations.read_standings.v1**: EVE SSO scope esi-corporations.read_standings.v1
 - **esi-corporations.read_starbases.v1**: EVE SSO scope esi-corporations.read_starbases.v1
 - **esi-corporations.read_structures.v1**: EVE SSO scope esi-corporations.read_structures.v1
 - **esi-corporations.read_titles.v1**: EVE SSO scope esi-corporations.read_titles.v1
 - **esi-corporations.track_members.v1**: EVE SSO scope esi-corporations.track_members.v1
 - **esi-fittings.read_fittings.v1**: EVE SSO scope esi-fittings.read_fittings.v1
 - **esi-fittings.write_fittings.v1**: EVE SSO scope esi-fittings.write_fittings.v1
 - **esi-fleets.read_fleet.v1**: EVE SSO scope esi-fleets.read_fleet.v1
 - **esi-fleets.write_fleet.v1**: EVE SSO scope esi-fleets.write_fleet.v1
 - **esi-industry.read_character_jobs.v1**: EVE SSO scope esi-industry.read_character_jobs.v1
 - **esi-industry.read_character_mining.v1**: EVE SSO scope esi-industry.read_character_mining.v1
 - **esi-industry.read_corporation_jobs.v1**: EVE SSO scope esi-industry.read_corporation_jobs.v1
 - **esi-industry.read_corporation_mining.v1**: EVE SSO scope esi-industry.read_corporation_mining.v1
 - **esi-killmails.read_corporation_killmails.v1**: EVE SSO scope esi-killmails.read_corporation_killmails.v1
 - **esi-killmails.read_killmails.v1**: EVE SSO scope esi-killmails.read_killmails.v1
 - **esi-location.read_location.v1**: EVE SSO scope esi-location.read_location.v1
 - **esi-location.read_online.v1**: EVE SSO scope esi-location.read_online.v1
 - **esi-location.read_ship_type.v1**: EVE SSO scope esi-location.read_ship_type.v1
 - **esi-mail.organize_mail.v1**: EVE SSO scope esi-mail.organize_mail.v1
 - **esi-mail.read_mail.v1**: EVE SSO scope esi-mail.read_mail.v1
 - **esi-mail.send_mail.v1**: EVE SSO scope esi-mail.send_mail.v1
 - **esi-markets.read_character_orders.v1**: EVE SSO scope esi-markets.read_character_orders.v1
 - **esi-markets.read_corporation_orders.v1**: EVE SSO scope esi-markets.read_corporation_orders.v1
 - **esi-markets.structure_markets.v1**: EVE SSO scope esi-markets.structure_markets.v1
 - **esi-planets.manage_planets.v1**: EVE SSO scope esi-planets.manage_planets.v1
 - **esi-planets.read_customs_offices.v1**: EVE SSO scope esi-planets.read_customs_offices.v1
 - **esi-search.search_structures.v1**: EVE SSO scope esi-search.search_structures.v1
 - **esi-skills.read_skillqueue.v1**: EVE SSO scope esi-skills.read_skillqueue.v1
 - **esi-skills.read_skills.v1**: EVE SSO scope esi-skills.read_skills.v1
 - **esi-ui.open_window.v1**: EVE SSO scope esi-ui.open_window.v1
 - **esi-ui.write_waypoint.v1**: EVE SSO scope esi-ui.write_waypoint.v1
 - **esi-universe.read_structures.v1**: EVE SSO scope esi-universe.read_structures.v1
 - **esi-wallet.read_character_wallet.v1**: EVE SSO scope esi-wallet.read_character_wallet.v1
 - **esi-wallet.read_corporation_wallets.v1**: EVE SSO scope esi-wallet.read_corporation_wallets.v1

