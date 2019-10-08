import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_EndpointStatusEnum } from './STU3_EndpointStatusEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Endpoint      extends STU3_DomainResource
{

   static def : string = 'Endpoint';
   identifier : STU3_Identifier [];
   status : STU3_EndpointStatusEnum ;
   connectionType : STU3_Coding ;
   name : string ;
   managingOrganization : STU3_Reference ;
   contact : STU3_ContactPoint [];
   period : STU3_Period ;
   payloadType : STU3_CodeableConcept [];
   payloadMimeType : string [];
   address : string ;
   header : string [];
}
