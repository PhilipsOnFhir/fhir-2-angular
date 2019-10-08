import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_MedicinalProductDeviceSpec_Material } from './R4_1_MedicinalProductDeviceSpec_Material'
import { R4_1_ProdCharacteristic } from './R4_1_ProdCharacteristic'
import { R4_1_ProductShelfLife } from './R4_1_ProductShelfLife'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicinalProductDeviceSpec      extends R4_1_DomainResource
{

   static def : string = 'MedicinalProductDeviceSpec';
   identifier : R4_1_Identifier ;
   type : R4_1_CodeableConcept ;
   tradeName : string ;
   quantity : R4_1_Quantity ;
   listingNumber : string ;
   modelNumber : string ;
   sterilityIndicator : R4_1_CodeableConcept ;
   sterilisationRequirement : R4_1_CodeableConcept ;
   usage : R4_1_CodeableConcept ;
   nomenclature : R4_1_CodeableConcept [];
   shelfLifeStorage : R4_1_ProductShelfLife [];
   physicalCharacteristics : R4_1_ProdCharacteristic ;
   otherCharacteristics : R4_1_CodeableConcept [];
   batchIdentifier : R4_1_Identifier [];
   manufacturer : R4_1_Reference [];
   material : R4_1_MedicinalProductDeviceSpec_Material [];
}
