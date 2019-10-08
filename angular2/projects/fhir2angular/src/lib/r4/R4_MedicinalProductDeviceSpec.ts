import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_MedicinalProductDeviceSpec_Material } from './R4_MedicinalProductDeviceSpec_Material'
import { R4_ProdCharacteristic } from './R4_ProdCharacteristic'
import { R4_ProductShelfLife } from './R4_ProductShelfLife'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_MedicinalProductDeviceSpec      extends R4_DomainResource
{

   static def : string = 'MedicinalProductDeviceSpec';
   identifier : R4_Identifier ;
   type : R4_CodeableConcept ;
   tradeName : string ;
   quantity : R4_Quantity ;
   listingNumber : string ;
   modelNumber : string ;
   sterilityIndicator : R4_CodeableConcept ;
   sterilisationRequirement : R4_CodeableConcept ;
   usage : R4_CodeableConcept ;
   nomenclature : R4_CodeableConcept [];
   shelfLifeStorage : R4_ProductShelfLife [];
   physicalCharacteristics : R4_ProdCharacteristic ;
   otherCharacteristics : R4_CodeableConcept [];
   batchIdentifier : R4_Identifier [];
   manufacturer : R4_Reference [];
   material : R4_MedicinalProductDeviceSpec_Material [];
}
