import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SpecimenStatusEnum } from './DSTU2_SpecimenStatusEnum'
import { DSTU2_Specimen_Collection } from './DSTU2_Specimen_Collection'
import { DSTU2_Specimen_Container } from './DSTU2_Specimen_Container'
import { DSTU2_Specimen_Treatment } from './DSTU2_Specimen_Treatment'

export class DSTU2_Specimen      extends DSTU2_DomainResource
{

   static def : string = 'Specimen';
   identifier : DSTU2_Identifier [];
   status : DSTU2_SpecimenStatusEnum ;
   type : DSTU2_CodeableConcept ;
   parent : DSTU2_Reference [];
   subject : DSTU2_Reference ;
   accessionIdentifier : DSTU2_Identifier ;
   receivedTime : string ;
   collection : DSTU2_Specimen_Collection ;
   treatment : DSTU2_Specimen_Treatment [];
   container : DSTU2_Specimen_Container [];
}
