import { R4_1_Address } from './R4_1_Address'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_LocationModeEnum } from './R4_1_LocationModeEnum'
import { R4_1_LocationStatusEnum } from './R4_1_LocationStatusEnum'
import { R4_1_Location_HoursOfOperation } from './R4_1_Location_HoursOfOperation'
import { R4_1_Location_Position } from './R4_1_Location_Position'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Location      extends R4_1_DomainResource
{

   static def : string = 'Location';
   identifier : R4_1_Identifier [];
   status : R4_1_LocationStatusEnum ;
   operationalStatus : R4_1_Coding ;
   name : string ;
   alias : string [];
   description : string ;
   mode : R4_1_LocationModeEnum ;
   type : R4_1_CodeableConcept [];
   telecom : R4_1_ContactPoint [];
   address : R4_1_Address ;
   physicalType : R4_1_CodeableConcept ;
   position : R4_1_Location_Position ;
   managingOrganization : R4_1_Reference ;
   partOf : R4_1_Reference ;
   hoursOfOperation : R4_1_Location_HoursOfOperation [];
   availabilityExceptions : string ;
   endpoint : R4_1_Reference [];
}
