import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Ratio } from './R4_1_Ratio'

export class R4_1_Dosage_DoseAndRate      extends R4_1_BackboneElement
{

   static def : string = 'Dosage_DoseAndRate';
   type : R4_1_CodeableConcept ;
   doseRange : R4_1_Range ;
   doseQuantity : R4_1_Quantity ;
   rateRatio : R4_1_Ratio ;
   rateRange : R4_1_Range ;
   rateQuantity : R4_1_Quantity ;
}
