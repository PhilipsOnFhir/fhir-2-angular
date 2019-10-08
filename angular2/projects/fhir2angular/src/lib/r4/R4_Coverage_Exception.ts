import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'

export class R4_Coverage_Exception      extends R4_BackboneElement
{

   static def : string = 'Coverage_Exception';
   type : R4_CodeableConcept ;
   period : R4_Period ;
}
