import { R5_Attachment } from './R5_Attachment'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_BodyStructure      extends R5_DomainResource
{

   static def : string = 'BodyStructure';
   identifier : R5_Identifier [];
   active : boolean ;
   morphology : R5_CodeableConcept ;
   location : R5_CodeableConcept ;
   locationQualifier : R5_CodeableConcept [];
   description : string ;
   image : R5_Attachment [];
   patient : R5_Reference ;
}
