import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ProdCharacteristic } from './R4_ProdCharacteristic'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_MedicinalProductManufactured      extends R4_DomainResource
{

   static def : string = 'MedicinalProductManufactured';
   manufacturedDoseForm : R4_CodeableConcept ;
   unitOfPresentation : R4_CodeableConcept ;
   quantity : R4_Quantity ;
   manufacturer : R4_Reference [];
   ingredient : R4_Reference [];
   physicalCharacteristics : R4_ProdCharacteristic ;
   otherCharacteristics : R4_CodeableConcept [];
}
