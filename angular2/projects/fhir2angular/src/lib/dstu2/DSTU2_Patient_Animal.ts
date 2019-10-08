import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_Patient_Animal      extends DSTU2_BackboneElement
{

   static def : string = 'Patient_Animal';
   species : DSTU2_CodeableConcept ;
   breed : DSTU2_CodeableConcept ;
   genderStatus : DSTU2_CodeableConcept ;
}
