import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_CompositionStatusEnum } from './STU3_CompositionStatusEnum'
import { STU3_Composition_Attester } from './STU3_Composition_Attester'
import { STU3_Composition_Event } from './STU3_Composition_Event'
import { STU3_Composition_RelatesTo } from './STU3_Composition_RelatesTo'
import { STU3_Composition_Section } from './STU3_Composition_Section'
import { STU3_ConfidentialityClassificationEnum } from './STU3_ConfidentialityClassificationEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Composition      extends STU3_DomainResource
{

   static def : string = 'Composition';
   identifier : STU3_Identifier ;
   status : STU3_CompositionStatusEnum ;
   type : STU3_CodeableConcept ;
   class : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   encounter : STU3_Reference ;
   date : string ;
   author : STU3_Reference [];
   title : string ;
   confidentiality : STU3_ConfidentialityClassificationEnum ;
   attester : STU3_Composition_Attester [];
   custodian : STU3_Reference ;
   relatesTo : STU3_Composition_RelatesTo [];
   event : STU3_Composition_Event [];
   section : STU3_Composition_Section [];
}
