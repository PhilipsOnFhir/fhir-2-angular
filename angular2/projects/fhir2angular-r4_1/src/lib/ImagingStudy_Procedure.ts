import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ImagingStudy_Procedure      extends BackboneElement
{

   static def : string = 'ImagingStudy_Procedure';
   valueReference : Reference ;
   valueCodeableConcept : CodeableConcept ;
}
