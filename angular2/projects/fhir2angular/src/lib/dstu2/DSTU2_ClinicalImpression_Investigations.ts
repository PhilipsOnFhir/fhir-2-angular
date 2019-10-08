import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_ClinicalImpression_Investigations      extends DSTU2_BackboneElement
{

   static def : string = 'ClinicalImpression_Investigations';
   code : DSTU2_CodeableConcept ;
   item : DSTU2_Reference [];
}
