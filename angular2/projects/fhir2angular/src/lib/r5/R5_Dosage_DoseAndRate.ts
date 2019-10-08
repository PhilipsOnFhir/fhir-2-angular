import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'
import { R5_Range } from './R5_Range'
import { R5_Ratio } from './R5_Ratio'

export class R5_Dosage_DoseAndRate      extends R5_BackboneElement
{

   static def : string = 'Dosage_DoseAndRate';
   type : R5_CodeableConcept ;
   doseRange : R5_Range ;
   doseQuantity : R5_Quantity ;
   rateRatio : R5_Ratio ;
   rateRange : R5_Range ;
   rateQuantity : R5_Quantity ;
}
