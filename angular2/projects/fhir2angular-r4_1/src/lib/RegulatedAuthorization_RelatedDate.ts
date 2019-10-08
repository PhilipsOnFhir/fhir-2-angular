import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'

export class RegulatedAuthorization_RelatedDate      extends BackboneElement
{

   static def : string = 'RegulatedAuthorization_RelatedDate';
   datePeriod : Period ;
   dateDateTime : string ;
   type : CodeableConcept ;
}
