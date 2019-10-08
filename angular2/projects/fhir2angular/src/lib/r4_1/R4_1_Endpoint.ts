import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EndpointStatusEnum } from './R4_1_EndpointStatusEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Endpoint      extends R4_1_DomainResource
{

   static def : string = 'Endpoint';
   identifier : R4_1_Identifier [];
   status : R4_1_EndpointStatusEnum ;
   connectionType : R4_1_Coding ;
   name : string ;
   managingOrganization : R4_1_Reference ;
   contact : R4_1_ContactPoint [];
   period : R4_1_Period ;
   payloadType : R4_1_CodeableConcept [];
   payloadMimeType : string [];
   address : string ;
   header : string [];
}
