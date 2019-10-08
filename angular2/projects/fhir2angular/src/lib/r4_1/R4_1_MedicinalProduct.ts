import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_MarketingStatus } from './R4_1_MarketingStatus'
import { R4_1_MedicinalProduct_ManufacturingBusinessOperation } from './R4_1_MedicinalProduct_ManufacturingBusinessOperation'
import { R4_1_MedicinalProduct_Name } from './R4_1_MedicinalProduct_Name'
import { R4_1_MedicinalProduct_SpecialDesignation } from './R4_1_MedicinalProduct_SpecialDesignation'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicinalProduct      extends R4_1_DomainResource
{

   static def : string = 'MedicinalProduct';
   identifier : R4_1_Identifier [];
   type : R4_1_CodeableConcept ;
   domain : R4_1_Coding ;
   combinedPharmaceuticalDoseForm : R4_1_CodeableConcept ;
   legalStatusOfSupply : R4_1_CodeableConcept ;
   additionalMonitoringIndicator : R4_1_CodeableConcept ;
   specialMeasures : string [];
   paediatricUseIndicator : R4_1_CodeableConcept ;
   productClassification : R4_1_CodeableConcept [];
   marketingStatus : R4_1_MarketingStatus [];
   pharmaceuticalProduct : R4_1_Reference [];
   packagedMedicinalProduct : R4_1_Reference [];
   attachedDocument : R4_1_Reference [];
   masterFile : R4_1_Reference [];
   contact : R4_1_Reference [];
   clinicalTrial : R4_1_Reference [];
   name : R4_1_MedicinalProduct_Name [];
   crossReference : R4_1_Identifier [];
   manufacturingBusinessOperation : R4_1_MedicinalProduct_ManufacturingBusinessOperation [];
   specialDesignation : R4_1_MedicinalProduct_SpecialDesignation [];
}
