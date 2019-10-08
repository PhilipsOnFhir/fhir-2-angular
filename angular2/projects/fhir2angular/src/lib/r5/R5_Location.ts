import { R5_Address } from './R5_Address'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_LocationModeEnum } from './R5_LocationModeEnum'
import { R5_LocationStatusEnum } from './R5_LocationStatusEnum'
import { R5_Location_HoursOfOperation } from './R5_Location_HoursOfOperation'
import { R5_Location_Position } from './R5_Location_Position'
import { R5_Reference } from './R5_Reference'

export class R5_Location      extends R5_DomainResource
{

   static def : string = 'Location';
   identifier : R5_Identifier [];
   status : R5_LocationStatusEnum ;
   operationalStatus : R5_Coding ;
   name : string ;
   alias : string [];
   description : string ;
   mode : R5_LocationModeEnum ;
   type : R5_CodeableConcept [];
   telecom : R5_ContactPoint [];
   address : R5_Address ;
   physicalType : R5_CodeableConcept ;
   position : R5_Location_Position ;
   managingOrganization : R5_Reference ;
   partOf : R5_Reference ;
   hoursOfOperation : R5_Location_HoursOfOperation [];
   availabilityExceptions : string ;
   endpoint : R5_Reference [];
}
