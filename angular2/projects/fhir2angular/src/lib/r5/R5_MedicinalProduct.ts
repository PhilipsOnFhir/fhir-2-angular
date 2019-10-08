import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_MarketingStatus } from './R5_MarketingStatus'
import { R5_MedicinalProduct_ManufacturingBusinessOperation } from './R5_MedicinalProduct_ManufacturingBusinessOperation'
import { R5_MedicinalProduct_Name } from './R5_MedicinalProduct_Name'
import { R5_MedicinalProduct_SpecialDesignation } from './R5_MedicinalProduct_SpecialDesignation'
import { R5_Reference } from './R5_Reference'

export class R5_MedicinalProduct      extends R5_DomainResource
{

   static def : string = 'MedicinalProduct';
   identifier : R5_Identifier [];
   type : R5_CodeableConcept ;
   domain : R5_Coding ;
   combinedPharmaceuticalDoseForm : R5_CodeableConcept ;
   legalStatusOfSupply : R5_CodeableConcept ;
   additionalMonitoringIndicator : R5_CodeableConcept ;
   specialMeasures : string [];
   paediatricUseIndicator : R5_CodeableConcept ;
   productClassification : R5_CodeableConcept [];
   marketingStatus : R5_MarketingStatus [];
   pharmaceuticalProduct : R5_Reference [];
   packagedMedicinalProduct : R5_Reference [];
   attachedDocument : R5_Reference [];
   masterFile : R5_Reference [];
   contact : R5_Reference [];
   clinicalTrial : R5_Reference [];
   name : R5_MedicinalProduct_Name [];
   crossReference : R5_Identifier [];
   manufacturingBusinessOperation : R5_MedicinalProduct_ManufacturingBusinessOperation [];
   specialDesignation : R5_MedicinalProduct_SpecialDesignation [];
}
