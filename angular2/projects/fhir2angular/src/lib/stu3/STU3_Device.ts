import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_Device_Udi } from './STU3_Device_Udi'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FHIRDeviceStatusEnum } from './STU3_FHIRDeviceStatusEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Device      extends STU3_DomainResource
{

   static def : string = 'Device';
   identifier : STU3_Identifier [];
   udi : STU3_Device_Udi ;
   status : STU3_FHIRDeviceStatusEnum ;
   type : STU3_CodeableConcept ;
   lotNumber : string ;
   manufacturer : string ;
   manufactureDate : string ;
   expirationDate : string ;
   model : string ;
   version : string ;
   patient : STU3_Reference ;
   owner : STU3_Reference ;
   contact : STU3_ContactPoint [];
   location : STU3_Reference ;
   url : string ;
   note : STU3_Annotation [];
   safety : STU3_CodeableConcept [];
}
