import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ProdCharacteristic } from './R4_1_ProdCharacteristic'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicinalProductManufactured      extends R4_1_DomainResource
{

   static def : string = 'MedicinalProductManufactured';
   manufacturedDoseForm : R4_1_CodeableConcept ;
   unitOfPresentation : R4_1_CodeableConcept ;
   quantity : R4_1_Quantity ;
   manufacturer : R4_1_Reference [];
   ingredient : R4_1_Reference [];
   physicalCharacteristics : R4_1_ProdCharacteristic ;
   otherCharacteristics : R4_1_CodeableConcept [];
}
