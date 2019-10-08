import { R4_Address } from './R4_Address'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coding } from './R4_Coding'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_LocationModeEnum } from './R4_LocationModeEnum'
import { R4_LocationStatusEnum } from './R4_LocationStatusEnum'
import { R4_Location_HoursOfOperation } from './R4_Location_HoursOfOperation'
import { R4_Location_Position } from './R4_Location_Position'
import { R4_Reference } from './R4_Reference'

export class R4_Location      extends R4_DomainResource
{

   static def : string = 'Location';
   identifier : R4_Identifier [];
   status : R4_LocationStatusEnum ;
   operationalStatus : R4_Coding ;
   name : string ;
   alias : string [];
   description : string ;
   mode : R4_LocationModeEnum ;
   type : R4_CodeableConcept [];
   telecom : R4_ContactPoint [];
   address : R4_Address ;
   physicalType : R4_CodeableConcept ;
   position : R4_Location_Position ;
   managingOrganization : R4_Reference ;
   partOf : R4_Reference ;
   hoursOfOperation : R4_Location_HoursOfOperation [];
   availabilityExceptions : string ;
   endpoint : R4_Reference [];
}
