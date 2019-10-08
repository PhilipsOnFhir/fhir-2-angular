import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_ProdCharacteristic } from './R5_ProdCharacteristic'
import { R5_ProductShelfLife } from './R5_ProductShelfLife'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_MedicinalProductPackaged_PackageItem      extends R5_BackboneElement
{

   static def : string = 'MedicinalProductPackaged_PackageItem';
   identifier : R5_Identifier [];
   type : R5_CodeableConcept ;
   quantity : R5_Quantity ;
   material : R5_CodeableConcept [];
   alternateMaterial : R5_CodeableConcept [];
   device : R5_Reference [];
   manufacturedItem : R5_Reference [];
   packageItem : R5_MedicinalProductPackaged_PackageItem [];
   physicalCharacteristics : R5_ProdCharacteristic ;
   otherCharacteristics : R5_CodeableConcept [];
   shelfLifeStorage : R5_ProductShelfLife [];
   manufacturer : R5_Reference [];
}
