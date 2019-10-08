import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MedicationKnowledge_AdministrationGuidelines } from './R5_MedicationKnowledge_AdministrationGuidelines'
import { R5_MedicationKnowledge_Cost } from './R5_MedicationKnowledge_Cost'
import { R5_MedicationKnowledge_DrugCharacteristic } from './R5_MedicationKnowledge_DrugCharacteristic'
import { R5_MedicationKnowledge_Ingredient } from './R5_MedicationKnowledge_Ingredient'
import { R5_MedicationKnowledge_Kinetics } from './R5_MedicationKnowledge_Kinetics'
import { R5_MedicationKnowledge_MedicineClassification } from './R5_MedicationKnowledge_MedicineClassification'
import { R5_MedicationKnowledge_MonitoringProgram } from './R5_MedicationKnowledge_MonitoringProgram'
import { R5_MedicationKnowledge_Monograph } from './R5_MedicationKnowledge_Monograph'
import { R5_MedicationKnowledge_Packaging } from './R5_MedicationKnowledge_Packaging'
import { R5_MedicationKnowledge_Regulatory } from './R5_MedicationKnowledge_Regulatory'
import { R5_MedicationKnowledge_RelatedMedicationKnowledge } from './R5_MedicationKnowledge_RelatedMedicationKnowledge'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_MedicationKnowledge      extends R5_DomainResource
{

   static def : string = 'MedicationKnowledge';
   code : R5_CodeableConcept ;
   status : string ;
   manufacturer : R5_Reference ;
   doseForm : R5_CodeableConcept ;
   amount : R5_Quantity ;
   synonym : string [];
   relatedMedicationKnowledge : R5_MedicationKnowledge_RelatedMedicationKnowledge [];
   associatedMedication : R5_Reference [];
   productType : R5_CodeableConcept [];
   monograph : R5_MedicationKnowledge_Monograph [];
   ingredient : R5_MedicationKnowledge_Ingredient [];
   preparationInstruction : string ;
   intendedRoute : R5_CodeableConcept [];
   cost : R5_MedicationKnowledge_Cost [];
   monitoringProgram : R5_MedicationKnowledge_MonitoringProgram [];
   administrationGuidelines : R5_MedicationKnowledge_AdministrationGuidelines [];
   medicineClassification : R5_MedicationKnowledge_MedicineClassification [];
   packaging : R5_MedicationKnowledge_Packaging ;
   drugCharacteristic : R5_MedicationKnowledge_DrugCharacteristic [];
   contraindication : R5_Reference [];
   regulatory : R5_MedicationKnowledge_Regulatory [];
   kinetics : R5_MedicationKnowledge_Kinetics [];
}
