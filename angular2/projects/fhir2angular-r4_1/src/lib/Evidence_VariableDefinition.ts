import { Annotation } from './Annotation'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Evidence_VariableDefinition      extends BackboneElement
{

   static def : string = 'Evidence_VariableDefinition';
   description : string ;
   note : Annotation [];
   variableRole : CodeableConcept ;
   actualDefinition : Reference ;
   intendedDefinition : Reference ;
   directnessMatch : CodeableConcept ;
}
