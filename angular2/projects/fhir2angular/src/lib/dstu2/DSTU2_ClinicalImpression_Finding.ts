import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_ClinicalImpression_Finding      extends DSTU2_BackboneElement
{

   static def : string = 'ClinicalImpression_Finding';
   item : DSTU2_CodeableConcept ;
   cause : string ;
}
