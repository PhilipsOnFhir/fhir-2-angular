import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_ProdCharacteristic } from './R4_1_ProdCharacteristic'
import { R4_1_ProductShelfLife } from './R4_1_ProductShelfLife'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicinalProductPackaged_PackageItem      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProductPackaged_PackageItem';
   identifier : R4_1_Identifier [];
   type : R4_1_CodeableConcept ;
   quantity : R4_1_Quantity ;
   material : R4_1_CodeableConcept [];
   alternateMaterial : R4_1_CodeableConcept [];
   device : R4_1_Reference [];
   manufacturedItem : R4_1_Reference [];
   packageItem : R4_1_MedicinalProductPackaged_PackageItem [];
   physicalCharacteristics : R4_1_ProdCharacteristic ;
   otherCharacteristics : R4_1_CodeableConcept [];
   shelfLifeStorage : R4_1_ProductShelfLife [];
   manufacturer : R4_1_Reference [];
}
