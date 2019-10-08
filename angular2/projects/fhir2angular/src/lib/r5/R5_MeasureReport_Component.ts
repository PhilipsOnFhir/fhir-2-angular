import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_MeasureReport_Component      extends R5_BackboneElement
{

   static def : string = 'MeasureReport_Component';
   code : R5_CodeableConcept ;
   value : R5_CodeableConcept ;
}
