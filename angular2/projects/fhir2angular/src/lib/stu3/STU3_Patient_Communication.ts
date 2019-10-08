import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_Patient_Communication      extends STU3_BackboneElement
{

   static def : string = 'Patient_Communication';
   language : STU3_CodeableConcept ;
   preferred : boolean ;
}
