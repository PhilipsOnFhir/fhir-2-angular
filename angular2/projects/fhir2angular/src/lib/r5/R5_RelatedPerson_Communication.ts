import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_RelatedPerson_Communication      extends R5_BackboneElement
{

   static def : string = 'RelatedPerson_Communication';
   language : R5_CodeableConcept ;
   preferred : boolean ;
}
