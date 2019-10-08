import { Annotation } from './Annotation'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Evidence_CertaintySubcomponent } from './Evidence_CertaintySubcomponent'

export class Evidence_Certainty      extends BackboneElement
{

   static def : string = 'Evidence_Certainty';
   description : string ;
   note : Annotation ;
   rating : CodeableConcept [];
   certaintySubcomponent : Evidence_CertaintySubcomponent [];
}
