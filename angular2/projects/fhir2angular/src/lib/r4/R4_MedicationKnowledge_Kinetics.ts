import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'

export class R4_MedicationKnowledge_Kinetics      extends R4_BackboneElement
{

   static def : string = 'MedicationKnowledge_Kinetics';
   areaUnderCurve : R4_Quantity [];
   lethalDose50 : R4_Quantity [];
   halfLifePeriod : string ;
}
