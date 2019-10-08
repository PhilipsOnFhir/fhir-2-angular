import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MedicationKnowledge_AdministrationGuidelines } from './R4_MedicationKnowledge_AdministrationGuidelines'
import { R4_MedicationKnowledge_Cost } from './R4_MedicationKnowledge_Cost'
import { R4_MedicationKnowledge_DrugCharacteristic } from './R4_MedicationKnowledge_DrugCharacteristic'
import { R4_MedicationKnowledge_Ingredient } from './R4_MedicationKnowledge_Ingredient'
import { R4_MedicationKnowledge_Kinetics } from './R4_MedicationKnowledge_Kinetics'
import { R4_MedicationKnowledge_MedicineClassification } from './R4_MedicationKnowledge_MedicineClassification'
import { R4_MedicationKnowledge_MonitoringProgram } from './R4_MedicationKnowledge_MonitoringProgram'
import { R4_MedicationKnowledge_Monograph } from './R4_MedicationKnowledge_Monograph'
import { R4_MedicationKnowledge_Packaging } from './R4_MedicationKnowledge_Packaging'
import { R4_MedicationKnowledge_Regulatory } from './R4_MedicationKnowledge_Regulatory'
import { R4_MedicationKnowledge_RelatedMedicationKnowledge } from './R4_MedicationKnowledge_RelatedMedicationKnowledge'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_MedicationKnowledge      extends R4_DomainResource
{

   static def : string = 'MedicationKnowledge';
   code : R4_CodeableConcept ;
   status : string ;
   manufacturer : R4_Reference ;
   doseForm : R4_CodeableConcept ;
   amount : R4_Quantity ;
   synonym : string [];
   relatedMedicationKnowledge : R4_MedicationKnowledge_RelatedMedicationKnowledge [];
   associatedMedication : R4_Reference [];
   productType : R4_CodeableConcept [];
   monograph : R4_MedicationKnowledge_Monograph [];
   ingredient : R4_MedicationKnowledge_Ingredient [];
   preparationInstruction : string ;
   intendedRoute : R4_CodeableConcept [];
   cost : R4_MedicationKnowledge_Cost [];
   monitoringProgram : R4_MedicationKnowledge_MonitoringProgram [];
   administrationGuidelines : R4_MedicationKnowledge_AdministrationGuidelines [];
   medicineClassification : R4_MedicationKnowledge_MedicineClassification [];
   packaging : R4_MedicationKnowledge_Packaging ;
   drugCharacteristic : R4_MedicationKnowledge_DrugCharacteristic [];
   contraindication : R4_Reference [];
   regulatory : R4_MedicationKnowledge_Regulatory [];
   kinetics : R4_MedicationKnowledge_Kinetics [];
}
