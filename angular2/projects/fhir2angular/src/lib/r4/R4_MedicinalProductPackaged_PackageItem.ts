import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_ProdCharacteristic } from './R4_ProdCharacteristic'
import { R4_ProductShelfLife } from './R4_ProductShelfLife'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_MedicinalProductPackaged_PackageItem      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductPackaged_PackageItem';
   identifier : R4_Identifier [];
   type : R4_CodeableConcept ;
   quantity : R4_Quantity ;
   material : R4_CodeableConcept [];
   alternateMaterial : R4_CodeableConcept [];
   device : R4_Reference [];
   manufacturedItem : R4_Reference [];
   packageItem : R4_MedicinalProductPackaged_PackageItem [];
   physicalCharacteristics : R4_ProdCharacteristic ;
   otherCharacteristics : R4_CodeableConcept [];
   shelfLifeStorage : R4_ProductShelfLife [];
   manufacturer : R4_Reference [];
}
