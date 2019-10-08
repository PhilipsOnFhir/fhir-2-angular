import { Annotation } from './Annotation'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Evidence_ReferentGroup      extends BackboneElement
{

   static def : string = 'Evidence_ReferentGroup';
   description : string ;
   note : Annotation [];
   evidenceSource : Reference ;
   intendedGroup : Reference ;
   directnessMatch : CodeableConcept ;
}
