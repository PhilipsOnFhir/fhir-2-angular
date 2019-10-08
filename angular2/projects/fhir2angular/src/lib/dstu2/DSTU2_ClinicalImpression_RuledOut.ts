import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_ClinicalImpression_RuledOut      extends DSTU2_BackboneElement
{

   static def : string = 'ClinicalImpression_RuledOut';
   item : DSTU2_CodeableConcept ;
   reason : string ;
}
