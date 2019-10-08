import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MedicationKnowledge_AdministrationGuidelines } from './R4_1_MedicationKnowledge_AdministrationGuidelines'
import { R4_1_MedicationKnowledge_Cost } from './R4_1_MedicationKnowledge_Cost'
import { R4_1_MedicationKnowledge_DrugCharacteristic } from './R4_1_MedicationKnowledge_DrugCharacteristic'
import { R4_1_MedicationKnowledge_Ingredient } from './R4_1_MedicationKnowledge_Ingredient'
import { R4_1_MedicationKnowledge_Kinetics } from './R4_1_MedicationKnowledge_Kinetics'
import { R4_1_MedicationKnowledge_MedicineClassification } from './R4_1_MedicationKnowledge_MedicineClassification'
import { R4_1_MedicationKnowledge_MonitoringProgram } from './R4_1_MedicationKnowledge_MonitoringProgram'
import { R4_1_MedicationKnowledge_Monograph } from './R4_1_MedicationKnowledge_Monograph'
import { R4_1_MedicationKnowledge_Packaging } from './R4_1_MedicationKnowledge_Packaging'
import { R4_1_MedicationKnowledge_Regulatory } from './R4_1_MedicationKnowledge_Regulatory'
import { R4_1_MedicationKnowledge_RelatedMedicationKnowledge } from './R4_1_MedicationKnowledge_RelatedMedicationKnowledge'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicationKnowledge      extends R4_1_DomainResource
{

   static def : string = 'MedicationKnowledge';
   code : R4_1_CodeableConcept ;
   status : string ;
   manufacturer : R4_1_Reference ;
   doseForm : R4_1_CodeableConcept ;
   amount : R4_1_Quantity ;
   synonym : string [];
   relatedMedicationKnowledge : R4_1_MedicationKnowledge_RelatedMedicationKnowledge [];
   associatedMedication : R4_1_Reference [];
   productType : R4_1_CodeableConcept [];
   monograph : R4_1_MedicationKnowledge_Monograph [];
   ingredient : R4_1_MedicationKnowledge_Ingredient [];
   preparationInstruction : string ;
   intendedRoute : R4_1_CodeableConcept [];
   cost : R4_1_MedicationKnowledge_Cost [];
   monitoringProgram : R4_1_MedicationKnowledge_MonitoringProgram [];
   administrationGuidelines : R4_1_MedicationKnowledge_AdministrationGuidelines [];
   medicineClassification : R4_1_MedicationKnowledge_MedicineClassification [];
   packaging : R4_1_MedicationKnowledge_Packaging ;
   drugCharacteristic : R4_1_MedicationKnowledge_DrugCharacteristic [];
   contraindication : R4_1_Reference [];
   regulatory : R4_1_MedicationKnowledge_Regulatory [];
   kinetics : R4_1_MedicationKnowledge_Kinetics [];
}
