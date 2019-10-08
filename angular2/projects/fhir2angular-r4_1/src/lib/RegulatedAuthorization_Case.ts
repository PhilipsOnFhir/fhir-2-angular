import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'

export class RegulatedAuthorization_Case      extends BackboneElement
{

   static def : string = 'RegulatedAuthorization_Case';
   identifier : Identifier ;
   type : CodeableConcept ;
   status : CodeableConcept ;
   datePeriod : Period ;
   dateDateTime : string ;
   application : RegulatedAuthorization_Case [];
}
