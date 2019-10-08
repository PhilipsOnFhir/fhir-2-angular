import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MedicationKnowledge_AdministrationGuideline } from './MedicationKnowledge_AdministrationGuideline'
import { MedicationKnowledge_Cost } from './MedicationKnowledge_Cost'
import { MedicationKnowledge_DrugCharacteristic } from './MedicationKnowledge_DrugCharacteristic'
import { MedicationKnowledge_Ingredient } from './MedicationKnowledge_Ingredient'
import { MedicationKnowledge_KineticCharacteristic } from './MedicationKnowledge_KineticCharacteristic'
import { MedicationKnowledge_MedicineClassification } from './MedicationKnowledge_MedicineClassification'
import { MedicationKnowledge_MonitoringProgram } from './MedicationKnowledge_MonitoringProgram'
import { MedicationKnowledge_Monograph } from './MedicationKnowledge_Monograph'
import { MedicationKnowledge_Packaging } from './MedicationKnowledge_Packaging'
import { MedicationKnowledge_Regulatory } from './MedicationKnowledge_Regulatory'
import { MedicationKnowledge_RelatedMedicationKnowledge } from './MedicationKnowledge_RelatedMedicationKnowledge'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class MedicationKnowledge      extends DomainResource
{

   static def : string = 'MedicationKnowledge';
   identifier : Identifier [];
   code : CodeableConcept ;
   status : string ;
   manufacturer : Reference ;
   doseForm : CodeableConcept ;
   amount : Quantity ;
   synonym : string [];
   relatedMedicationKnowledge : MedicationKnowledge_RelatedMedicationKnowledge [];
   associatedMedication : Reference [];
   productType : CodeableConcept [];
   monograph : MedicationKnowledge_Monograph [];
   ingredient : MedicationKnowledge_Ingredient [];
   device : Reference [];
   preparationInstruction : string ;
   intendedRoute : CodeableConcept [];
   cost : MedicationKnowledge_Cost [];
   monitoringProgram : MedicationKnowledge_MonitoringProgram [];
   administrationGuideline : MedicationKnowledge_AdministrationGuideline [];
   medicineClassification : MedicationKnowledge_MedicineClassification [];
   packaging : MedicationKnowledge_Packaging ;
   drugCharacteristic : MedicationKnowledge_DrugCharacteristic [];
   clinicalUseIssue : Reference [];
   regulatory : MedicationKnowledge_Regulatory [];
   kineticCharacteristic : MedicationKnowledge_KineticCharacteristic [];
}
