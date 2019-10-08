import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MedicationKnowledge_MaxDispense } from './R4_1_MedicationKnowledge_MaxDispense'
import { R4_1_MedicationKnowledge_Schedule } from './R4_1_MedicationKnowledge_Schedule'
import { R4_1_MedicationKnowledge_Substitution } from './R4_1_MedicationKnowledge_Substitution'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicationKnowledge_Regulatory      extends R4_1_BackboneElement
{

   static def : string = 'MedicationKnowledge_Regulatory';
   regulatoryAuthority : R4_1_Reference ;
   substitution : R4_1_MedicationKnowledge_Substitution [];
   schedule : R4_1_MedicationKnowledge_Schedule [];
   maxDispense : R4_1_MedicationKnowledge_MaxDispense ;
}
