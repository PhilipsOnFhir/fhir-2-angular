import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'
import { R4_SpecimenStatusEnum } from './R4_SpecimenStatusEnum'
import { R4_Specimen_Collection } from './R4_Specimen_Collection'
import { R4_Specimen_Container } from './R4_Specimen_Container'
import { R4_Specimen_Processing } from './R4_Specimen_Processing'

export class R4_Specimen      extends R4_DomainResource
{

   static def : string = 'Specimen';
   identifier : R4_Identifier [];
   accessionIdentifier : R4_Identifier ;
   status : R4_SpecimenStatusEnum ;
   type : R4_CodeableConcept ;
   subject : R4_Reference ;
   receivedTime : string ;
   parent : R4_Reference [];
   request : R4_Reference [];
   collection : R4_Specimen_Collection ;
   processing : R4_Specimen_Processing [];
   container : R4_Specimen_Container [];
   condition : R4_CodeableConcept [];
   note : R4_Annotation [];
}
