import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'

export class R4_MedicationKnowledge_DrugCharacteristic      extends R4_BackboneElement
{

   static def : string = 'MedicationKnowledge_DrugCharacteristic';
   type : R4_CodeableConcept ;
   valueCodeableConcept : R4_CodeableConcept ;
   valueString : string ;
   valueQuantity : R4_Quantity ;
   valueBase64Binary : string ;
}
