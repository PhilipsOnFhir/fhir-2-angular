import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'

export class R5_MedicationKnowledge_DrugCharacteristic      extends R5_BackboneElement
{

   static def : string = 'MedicationKnowledge_DrugCharacteristic';
   type : R5_CodeableConcept ;
   valueCodeableConcept : R5_CodeableConcept ;
   valueString : string ;
   valueQuantity : R5_Quantity ;
   valueBase64Binary : string ;
}
