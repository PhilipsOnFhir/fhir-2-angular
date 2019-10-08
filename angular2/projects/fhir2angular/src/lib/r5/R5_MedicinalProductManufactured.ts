import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ProdCharacteristic } from './R5_ProdCharacteristic'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_MedicinalProductManufactured      extends R5_DomainResource
{

   static def : string = 'MedicinalProductManufactured';
   manufacturedDoseForm : R5_CodeableConcept ;
   unitOfPresentation : R5_CodeableConcept ;
   quantity : R5_Quantity ;
   manufacturer : R5_Reference [];
   ingredient : R5_Reference [];
   physicalCharacteristics : R5_ProdCharacteristic ;
   otherCharacteristics : R5_CodeableConcept [];
}
