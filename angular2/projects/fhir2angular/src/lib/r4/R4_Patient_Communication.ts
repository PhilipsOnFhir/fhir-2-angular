import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_Patient_Communication      extends R4_BackboneElement
{

   static def : string = 'Patient_Communication';
   language : R4_CodeableConcept ;
   preferred : boolean ;
}
