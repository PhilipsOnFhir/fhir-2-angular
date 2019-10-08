import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_Coverage_Exception      extends R4_1_BackboneElement
{

   static def : string = 'Coverage_Exception';
   type : R4_1_CodeableConcept ;
   period : R4_1_Period ;
}
