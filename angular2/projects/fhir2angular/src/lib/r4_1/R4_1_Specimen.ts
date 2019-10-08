import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_SpecimenStatusEnum } from './R4_1_SpecimenStatusEnum'
import { R4_1_Specimen_Collection } from './R4_1_Specimen_Collection'
import { R4_1_Specimen_Container } from './R4_1_Specimen_Container'
import { R4_1_Specimen_Processing } from './R4_1_Specimen_Processing'

export class R4_1_Specimen      extends R4_1_DomainResource
{

   static def : string = 'Specimen';
   identifier : R4_1_Identifier [];
   accessionIdentifier : R4_1_Identifier ;
   status : R4_1_SpecimenStatusEnum ;
   type : R4_1_CodeableConcept ;
   subject : R4_1_Reference ;
   receivedTime : string ;
   parent : R4_1_Reference [];
   request : R4_1_Reference [];
   collection : R4_1_Specimen_Collection ;
   processing : R4_1_Specimen_Processing [];
   container : R4_1_Specimen_Container [];
   condition : R4_1_CodeableConcept [];
   note : R4_1_Annotation [];
}
