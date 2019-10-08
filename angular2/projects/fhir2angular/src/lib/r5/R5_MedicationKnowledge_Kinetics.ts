import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'

export class R5_MedicationKnowledge_Kinetics      extends R5_BackboneElement
{

   static def : string = 'MedicationKnowledge_Kinetics';
   areaUnderCurve : R5_Quantity [];
   lethalDose50 : R5_Quantity [];
   halfLifePeriod : string ;
}
