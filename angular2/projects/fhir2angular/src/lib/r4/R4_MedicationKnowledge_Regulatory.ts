import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MedicationKnowledge_MaxDispense } from './R4_MedicationKnowledge_MaxDispense'
import { R4_MedicationKnowledge_Schedule } from './R4_MedicationKnowledge_Schedule'
import { R4_MedicationKnowledge_Substitution } from './R4_MedicationKnowledge_Substitution'
import { R4_Reference } from './R4_Reference'

export class R4_MedicationKnowledge_Regulatory      extends R4_BackboneElement
{

   static def : string = 'MedicationKnowledge_Regulatory';
   regulatoryAuthority : R4_Reference ;
   substitution : R4_MedicationKnowledge_Substitution [];
   schedule : R4_MedicationKnowledge_Schedule [];
   maxDispense : R4_MedicationKnowledge_MaxDispense ;
}
