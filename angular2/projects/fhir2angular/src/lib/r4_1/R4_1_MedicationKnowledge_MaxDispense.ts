import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_MedicationKnowledge_MaxDispense      extends R4_1_BackboneElement
{

   static def : string = 'MedicationKnowledge_MaxDispense';
   quantity : R4_1_Quantity ;
   period : string ;
}
