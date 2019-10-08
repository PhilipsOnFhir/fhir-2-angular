import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_EndpointStatusEnum } from './R5_EndpointStatusEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Endpoint      extends R5_DomainResource
{

   static def : string = 'Endpoint';
   identifier : R5_Identifier [];
   status : R5_EndpointStatusEnum ;
   connectionType : R5_Coding ;
   name : string ;
   managingOrganization : R5_Reference ;
   contact : R5_ContactPoint [];
   period : R5_Period ;
   payloadType : R5_CodeableConcept [];
   payloadMimeType : string [];
   address : string ;
   header : string [];
}
