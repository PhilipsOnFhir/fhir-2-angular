import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_MedicinalProductPharmaceutical_Characteristics      extends R5_BackboneElement
{

   static def : string = 'MedicinalProductPharmaceutical_Characteristics';
   code : R5_CodeableConcept ;
   status : R5_CodeableConcept ;
}
