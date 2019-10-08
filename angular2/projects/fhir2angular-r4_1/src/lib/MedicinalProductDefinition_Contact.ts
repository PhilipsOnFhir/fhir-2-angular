import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class MedicinalProductDefinition_Contact      extends BackboneElement
{

   static def : string = 'MedicinalProductDefinition_Contact';
   type : CodeableConcept ;
   contact : Reference ;
}
