import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class MedicinalProduct_Contact      extends BackboneElement
{

   static def : string = 'MedicinalProduct_Contact';
   type : CodeableConcept ;
   contact : Reference ;
}
