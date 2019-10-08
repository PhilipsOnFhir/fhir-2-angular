import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MedicationKnowledge_MaxDispense } from './R5_MedicationKnowledge_MaxDispense'
import { R5_MedicationKnowledge_Schedule } from './R5_MedicationKnowledge_Schedule'
import { R5_MedicationKnowledge_Substitution } from './R5_MedicationKnowledge_Substitution'
import { R5_Reference } from './R5_Reference'

export class R5_MedicationKnowledge_Regulatory      extends R5_BackboneElement
{

   static def : string = 'MedicationKnowledge_Regulatory';
   regulatoryAuthority : R5_Reference ;
   substitution : R5_MedicationKnowledge_Substitution [];
   schedule : R5_MedicationKnowledge_Schedule [];
   maxDispense : R5_MedicationKnowledge_MaxDispense ;
}
