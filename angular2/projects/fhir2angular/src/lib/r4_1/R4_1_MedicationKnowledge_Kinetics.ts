import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_MedicationKnowledge_Kinetics      extends R4_1_BackboneElement
{

   static def : string = 'MedicationKnowledge_Kinetics';
   areaUnderCurve : R4_1_Quantity [];
   lethalDose50 : R4_1_Quantity [];
   halfLifePeriod : string ;
}
