import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_MedicinalProductInteraction_Interactant      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductInteraction_Interactant';
   itemReference : R4_Reference ;
   itemCodeableConcept : R4_CodeableConcept ;
}
