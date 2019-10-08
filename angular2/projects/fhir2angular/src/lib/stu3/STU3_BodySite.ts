import { STU3_Attachment } from './STU3_Attachment'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_BodySite      extends STU3_DomainResource
{

   static def : string = 'BodySite';
   identifier : STU3_Identifier [];
   active : boolean ;
   code : STU3_CodeableConcept ;
   qualifier : STU3_CodeableConcept [];
   description : string ;
   image : STU3_Attachment [];
   patient : STU3_Reference ;
}
