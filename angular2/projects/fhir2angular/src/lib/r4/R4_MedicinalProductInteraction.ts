import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MedicinalProductInteraction_Interactant } from './R4_MedicinalProductInteraction_Interactant'
import { R4_Reference } from './R4_Reference'

export class R4_MedicinalProductInteraction      extends R4_DomainResource
{

   static def : string = 'MedicinalProductInteraction';
   subject : R4_Reference [];
   description : string ;
   interactant : R4_MedicinalProductInteraction_Interactant [];
   type : R4_CodeableConcept ;
   effect : R4_CodeableConcept ;
   incidence : R4_CodeableConcept ;
   management : R4_CodeableConcept ;
}
