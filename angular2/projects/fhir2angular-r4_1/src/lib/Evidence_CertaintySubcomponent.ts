import { Annotation } from './Annotation'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class Evidence_CertaintySubcomponent      extends BackboneElement
{

   static def : string = 'Evidence_CertaintySubcomponent';
   description : string ;
   note : Annotation ;
   type : CodeableConcept [];
   rating : CodeableConcept [];
}
