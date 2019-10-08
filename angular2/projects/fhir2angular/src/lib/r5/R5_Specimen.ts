import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'
import { R5_SpecimenStatusEnum } from './R5_SpecimenStatusEnum'
import { R5_Specimen_Collection } from './R5_Specimen_Collection'
import { R5_Specimen_Container } from './R5_Specimen_Container'
import { R5_Specimen_Processing } from './R5_Specimen_Processing'

export class R5_Specimen      extends R5_DomainResource
{

   static def : string = 'Specimen';
   identifier : R5_Identifier [];
   accessionIdentifier : R5_Identifier ;
   status : R5_SpecimenStatusEnum ;
   type : R5_CodeableConcept ;
   subject : R5_Reference ;
   receivedTime : string ;
   parent : R5_Reference [];
   request : R5_Reference [];
   collection : R5_Specimen_Collection ;
   processing : R5_Specimen_Processing [];
   container : R5_Specimen_Container [];
   condition : R5_CodeableConcept [];
   note : R5_Annotation [];
}
