import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_MeasureReport_Component      extends R4_BackboneElement
{

   static def : string = 'MeasureReport_Component';
   code : R4_CodeableConcept ;
   value : R4_CodeableConcept ;
}
