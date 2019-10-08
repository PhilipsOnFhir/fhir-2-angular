import { STU3_Address } from './STU3_Address'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_LocationModeEnum } from './STU3_LocationModeEnum'
import { STU3_LocationStatusEnum } from './STU3_LocationStatusEnum'
import { STU3_Location_Position } from './STU3_Location_Position'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Location      extends STU3_DomainResource
{

   static def : string = 'Location';
   identifier : STU3_Identifier [];
   status : STU3_LocationStatusEnum ;
   operationalStatus : STU3_Coding ;
   name : string ;
   alias : string [];
   description : string ;
   mode : STU3_LocationModeEnum ;
   type : STU3_CodeableConcept ;
   telecom : STU3_ContactPoint [];
   address : STU3_Address ;
   physicalType : STU3_CodeableConcept ;
   position : STU3_Location_Position ;
   managingOrganization : STU3_Reference ;
   partOf : STU3_Reference ;
   endpoint : STU3_Reference [];
}
