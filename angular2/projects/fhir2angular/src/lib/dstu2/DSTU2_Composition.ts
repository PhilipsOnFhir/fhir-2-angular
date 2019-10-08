import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_CompositionStatusEnum } from './DSTU2_CompositionStatusEnum'
import { DSTU2_Composition_Attester } from './DSTU2_Composition_Attester'
import { DSTU2_Composition_Event } from './DSTU2_Composition_Event'
import { DSTU2_Composition_Section } from './DSTU2_Composition_Section'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Composition      extends DSTU2_DomainResource
{

   static def : string = 'Composition';
   identifier : DSTU2_Identifier ;
   date : string ;
   type : DSTU2_CodeableConcept ;
   class : DSTU2_CodeableConcept ;
   title : string ;
   status : DSTU2_CompositionStatusEnum ;
   confidentiality : string ;
   subject : DSTU2_Reference ;
   author : DSTU2_Reference [];
   attester : DSTU2_Composition_Attester [];
   custodian : DSTU2_Reference ;
   event : DSTU2_Composition_Event [];
   encounter : DSTU2_Reference ;
   section : DSTU2_Composition_Section [];
}
