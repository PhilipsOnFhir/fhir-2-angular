import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MedicinalProductInteraction_Interactant } from './R4_1_MedicinalProductInteraction_Interactant'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicinalProductInteraction      extends R4_1_DomainResource
{

   static def : string = 'MedicinalProductInteraction';
   subject : R4_1_Reference [];
   description : string ;
   interactant : R4_1_MedicinalProductInteraction_Interactant [];
   type : R4_1_CodeableConcept ;
   effect : R4_1_CodeableConcept ;
   incidence : R4_1_CodeableConcept ;
   management : R4_1_CodeableConcept ;
}
