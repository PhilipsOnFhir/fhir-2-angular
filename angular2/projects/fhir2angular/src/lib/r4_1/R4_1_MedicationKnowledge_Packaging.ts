import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_MedicationKnowledge_Packaging      extends R4_1_BackboneElement
{

   static def : string = 'MedicationKnowledge_Packaging';
   type : R4_1_CodeableConcept ;
   quantity : R4_1_Quantity ;
}
