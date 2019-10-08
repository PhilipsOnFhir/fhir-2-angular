import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coding } from './R4_Coding'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EndpointStatusEnum } from './R4_EndpointStatusEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Endpoint      extends R4_DomainResource
{

   static def : string = 'Endpoint';
   identifier : R4_Identifier [];
   status : R4_EndpointStatusEnum ;
   connectionType : R4_Coding ;
   name : string ;
   managingOrganization : R4_Reference ;
   contact : R4_ContactPoint [];
   period : R4_Period ;
   payloadType : R4_CodeableConcept [];
   payloadMimeType : string [];
   address : string ;
   header : string [];
}
