import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_CompositionStatusEnum } from './R5_CompositionStatusEnum'
import { R5_Composition_Attester } from './R5_Composition_Attester'
import { R5_Composition_Event } from './R5_Composition_Event'
import { R5_Composition_RelatesTo } from './R5_Composition_RelatesTo'
import { R5_Composition_Section } from './R5_Composition_Section'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_Composition      extends R5_DomainResource
{

   static def : string = 'Composition';
   identifier : R5_Identifier ;
   status : R5_CompositionStatusEnum ;
   type : R5_CodeableConcept ;
   category : R5_CodeableConcept [];
   subject : R5_Reference ;
   encounter : R5_Reference ;
   date : string ;
   author : R5_Reference [];
   title : string ;
   confidentiality : string ;
   attester : R5_Composition_Attester [];
   custodian : R5_Reference ;
   relatesTo : R5_Composition_RelatesTo [];
   event : R5_Composition_Event [];
   section : R5_Composition_Section [];
}
