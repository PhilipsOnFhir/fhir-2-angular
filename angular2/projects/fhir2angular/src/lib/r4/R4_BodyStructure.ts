import { R4_Attachment } from './R4_Attachment'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_BodyStructure      extends R4_DomainResource
{

   static def : string = 'BodyStructure';
   identifier : R4_Identifier [];
   active : boolean ;
   morphology : R4_CodeableConcept ;
   location : R4_CodeableConcept ;
   locationQualifier : R4_CodeableConcept [];
   description : string ;
   image : R4_Attachment [];
   patient : R4_Reference ;
}
