import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_Provenance_RelatedAgent      extends DSTU2_BackboneElement
{

   static def : string = 'Provenance_RelatedAgent';
   type : DSTU2_CodeableConcept ;
   target : string ;
}
