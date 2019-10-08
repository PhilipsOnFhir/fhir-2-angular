import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_ClinicalImpression_Finding      extends R5_BackboneElement
{

   static def : string = 'ClinicalImpression_Finding';
   itemCodeableConcept : R5_CodeableConcept ;
   itemReference : R5_Reference ;
   basis : string ;
}
