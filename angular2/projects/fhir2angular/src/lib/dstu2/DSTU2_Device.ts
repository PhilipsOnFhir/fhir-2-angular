import { DSTU2_Annotation } from './DSTU2_Annotation'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_ContactPoint } from './DSTU2_ContactPoint'
import { DSTU2_DeviceStatusEnum } from './DSTU2_DeviceStatusEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Device      extends DSTU2_DomainResource
{

   static def : string = 'Device';
   identifier : DSTU2_Identifier [];
   type : DSTU2_CodeableConcept ;
   note : DSTU2_Annotation [];
   status : DSTU2_DeviceStatusEnum ;
   manufacturer : string ;
   model : string ;
   version : string ;
   manufactureDate : string ;
   expiry : string ;
   udi : string ;
   lotNumber : string ;
   owner : DSTU2_Reference ;
   location : DSTU2_Reference ;
   patient : DSTU2_Reference ;
   contact : DSTU2_ContactPoint [];
   url : string ;
}
