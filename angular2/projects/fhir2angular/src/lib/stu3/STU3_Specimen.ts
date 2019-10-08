import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'
import { STU3_SpecimenStatusEnum } from './STU3_SpecimenStatusEnum'
import { STU3_Specimen_Collection } from './STU3_Specimen_Collection'
import { STU3_Specimen_Container } from './STU3_Specimen_Container'
import { STU3_Specimen_Processing } from './STU3_Specimen_Processing'

export class STU3_Specimen      extends STU3_DomainResource
{

   static def : string = 'Specimen';
   identifier : STU3_Identifier [];
   accessionIdentifier : STU3_Identifier ;
   status : STU3_SpecimenStatusEnum ;
   type : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   receivedTime : string ;
   parent : STU3_Reference [];
   request : STU3_Reference [];
   collection : STU3_Specimen_Collection ;
   processing : STU3_Specimen_Processing [];
   container : STU3_Specimen_Container [];
   note : STU3_Annotation [];
}
