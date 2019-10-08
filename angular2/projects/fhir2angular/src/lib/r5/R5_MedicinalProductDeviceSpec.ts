import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_MedicinalProductDeviceSpec_Material } from './R5_MedicinalProductDeviceSpec_Material'
import { R5_ProdCharacteristic } from './R5_ProdCharacteristic'
import { R5_ProductShelfLife } from './R5_ProductShelfLife'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_MedicinalProductDeviceSpec      extends R5_DomainResource
{

   static def : string = 'MedicinalProductDeviceSpec';
   identifier : R5_Identifier ;
   type : R5_CodeableConcept ;
   tradeName : string ;
   quantity : R5_Quantity ;
   listingNumber : string ;
   modelNumber : string ;
   sterilityIndicator : R5_CodeableConcept ;
   sterilisationRequirement : R5_CodeableConcept ;
   usage : R5_CodeableConcept ;
   nomenclature : R5_CodeableConcept [];
   shelfLifeStorage : R5_ProductShelfLife [];
   physicalCharacteristics : R5_ProdCharacteristic ;
   otherCharacteristics : R5_CodeableConcept [];
   batchIdentifier : R5_Identifier [];
   manufacturer : R5_Reference [];
   material : R5_MedicinalProductDeviceSpec_Material [];
}
