import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_ClinicalImpression_Investigation      extends R5_BackboneElement
{

   static def : string = 'ClinicalImpression_Investigation';
   code : R5_CodeableConcept ;
   item : R5_Reference [];
}
