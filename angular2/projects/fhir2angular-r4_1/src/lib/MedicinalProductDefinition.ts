import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MarketingStatus } from './MarketingStatus'
import { MedicinalProductDefinition_Contact } from './MedicinalProductDefinition_Contact'
import { MedicinalProductDefinition_ManufacturingBusinessOperation } from './MedicinalProductDefinition_ManufacturingBusinessOperation'
import { MedicinalProductDefinition_Name } from './MedicinalProductDefinition_Name'
import { MedicinalProductDefinition_SpecialDesignation } from './MedicinalProductDefinition_SpecialDesignation'
import { Reference } from './Reference'

export class MedicinalProductDefinition      extends DomainResource
{

   static def : string = 'MedicinalProductDefinition';
   identifier : Identifier [];
   type : CodeableConcept ;
   domain : Coding ;
   description : string ;
   combinedPharmaceuticalDoseForm : CodeableConcept ;
   indication : string ;
   legalStatusOfSupply : CodeableConcept ;
   additionalMonitoringIndicator : CodeableConcept ;
   specialMeasure : string [];
   paediatricUseIndicator : CodeableConcept ;
   productClassification : CodeableConcept [];
   marketingStatus : MarketingStatus [];
   pharmaceuticalProduct : Reference [];
   packagedMedicinalProduct : Reference [];
   ingredient : Reference [];
   attachedDocument : Reference [];
   masterFile : Reference [];
   contact : MedicinalProductDefinition_Contact [];
   clinicalTrial : Reference [];
   name : MedicinalProductDefinition_Name [];
   crossReference : Identifier [];
   manufacturingBusinessOperation : MedicinalProductDefinition_ManufacturingBusinessOperation [];
   specialDesignation : MedicinalProductDefinition_SpecialDesignation [];
}
