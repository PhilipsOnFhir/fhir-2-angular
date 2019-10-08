import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MedicinalProductInteraction_Interactant } from './R5_MedicinalProductInteraction_Interactant'
import { R5_Reference } from './R5_Reference'

export class R5_MedicinalProductInteraction      extends R5_DomainResource
{

   static def : string = 'MedicinalProductInteraction';
   subject : R5_Reference [];
   description : string ;
   interactant : R5_MedicinalProductInteraction_Interactant [];
   type : R5_CodeableConcept ;
   effect : R5_CodeableConcept ;
   incidence : R5_CodeableConcept ;
   management : R5_CodeableConcept ;
}
