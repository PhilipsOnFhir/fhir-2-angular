import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class MedicationKnowledge_Packaging      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_Packaging';
   type : CodeableConcept ;
   quantity : Quantity ;
   device : Reference ;
   material : CodeableConcept ;
   packaging : MedicationKnowledge_Packaging [];
}
