import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_MarketingStatus } from './R4_MarketingStatus'
import { R4_MedicinalProduct_ManufacturingBusinessOperation } from './R4_MedicinalProduct_ManufacturingBusinessOperation'
import { R4_MedicinalProduct_Name } from './R4_MedicinalProduct_Name'
import { R4_MedicinalProduct_SpecialDesignation } from './R4_MedicinalProduct_SpecialDesignation'
import { R4_Reference } from './R4_Reference'

export class R4_MedicinalProduct      extends R4_DomainResource
{

   static def : string = 'MedicinalProduct';
   identifier : R4_Identifier [];
   type : R4_CodeableConcept ;
   domain : R4_Coding ;
   combinedPharmaceuticalDoseForm : R4_CodeableConcept ;
   legalStatusOfSupply : R4_CodeableConcept ;
   additionalMonitoringIndicator : R4_CodeableConcept ;
   specialMeasures : string [];
   paediatricUseIndicator : R4_CodeableConcept ;
   productClassification : R4_CodeableConcept [];
   marketingStatus : R4_MarketingStatus [];
   pharmaceuticalProduct : R4_Reference [];
   packagedMedicinalProduct : R4_Reference [];
   attachedDocument : R4_Reference [];
   masterFile : R4_Reference [];
   contact : R4_Reference [];
   clinicalTrial : R4_Reference [];
   name : R4_MedicinalProduct_Name [];
   crossReference : R4_Identifier [];
   manufacturingBusinessOperation : R4_MedicinalProduct_ManufacturingBusinessOperation [];
   specialDesignation : R4_MedicinalProduct_SpecialDesignation [];
}
