import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'
import { R4_Range } from './R4_Range'
import { R4_Ratio } from './R4_Ratio'

export class R4_Dosage_DoseAndRate      extends R4_BackboneElement
{

   static def : string = 'Dosage_DoseAndRate';
   type : R4_CodeableConcept ;
   doseRange : R4_Range ;
   doseQuantity : R4_Quantity ;
   rateRatio : R4_Ratio ;
   rateRange : R4_Range ;
   rateQuantity : R4_Quantity ;
}
