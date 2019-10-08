import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_CompositionStatusEnum } from './R4_CompositionStatusEnum'
import { R4_Composition_Attester } from './R4_Composition_Attester'
import { R4_Composition_Event } from './R4_Composition_Event'
import { R4_Composition_RelatesTo } from './R4_Composition_RelatesTo'
import { R4_Composition_Section } from './R4_Composition_Section'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_Composition      extends R4_DomainResource
{

   static def : string = 'Composition';
   identifier : R4_Identifier ;
   status : R4_CompositionStatusEnum ;
   type : R4_CodeableConcept ;
   category : R4_CodeableConcept [];
   subject : R4_Reference ;
   encounter : R4_Reference ;
   date : string ;
   author : R4_Reference [];
   title : string ;
   confidentiality : string ;
   attester : R4_Composition_Attester [];
   custodian : R4_Reference ;
   relatesTo : R4_Composition_RelatesTo [];
   event : R4_Composition_Event [];
   section : R4_Composition_Section [];
}
