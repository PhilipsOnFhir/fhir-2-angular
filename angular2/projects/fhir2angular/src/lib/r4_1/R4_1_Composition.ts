import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_CompositionStatusEnum } from './R4_1_CompositionStatusEnum'
import { R4_1_Composition_Attester } from './R4_1_Composition_Attester'
import { R4_1_Composition_Event } from './R4_1_Composition_Event'
import { R4_1_Composition_RelatesTo } from './R4_1_Composition_RelatesTo'
import { R4_1_Composition_Section } from './R4_1_Composition_Section'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Composition      extends R4_1_DomainResource
{

   static def : string = 'Composition';
   identifier : R4_1_Identifier ;
   status : R4_1_CompositionStatusEnum ;
   type : R4_1_CodeableConcept ;
   category : R4_1_CodeableConcept [];
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   date : string ;
   author : R4_1_Reference [];
   title : string ;
   confidentiality : string ;
   attester : R4_1_Composition_Attester [];
   custodian : R4_1_Reference ;
   relatesTo : R4_1_Composition_RelatesTo [];
   event : R4_1_Composition_Event [];
   section : R4_1_Composition_Section [];
}
