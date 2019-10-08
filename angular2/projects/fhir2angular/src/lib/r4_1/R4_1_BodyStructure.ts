import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_BodyStructure      extends R4_1_DomainResource
{

   static def : string = 'BodyStructure';
   identifier : R4_1_Identifier [];
   active : boolean ;
   morphology : R4_1_CodeableConcept ;
   location : R4_1_CodeableConcept ;
   locationQualifier : R4_1_CodeableConcept [];
   description : string ;
   image : R4_1_Attachment [];
   patient : R4_1_Reference ;
}
